-- ============ roles ============
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'guest');

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE OR REPLACE FUNCTION public.is_staff(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role IN ('admin', 'staff')
  )
$$;

CREATE POLICY "Users read own profile" ON public.profiles
  FOR SELECT TO authenticated USING (auth.uid() = id OR public.is_staff(auth.uid()));
CREATE POLICY "Users insert own profile" ON public.profiles
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id OR public.is_staff(auth.uid()))
  WITH CHECK (auth.uid() = id OR public.is_staff(auth.uid()));

CREATE POLICY "Users read own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name'),
    NEW.email
  )
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'guest')
  ON CONFLICT (user_id, role) DO NOTHING;

  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============ editable content ============
CREATE TABLE public.content_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  kind TEXT NOT NULL,
  slug TEXT NOT NULL,
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  image_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (kind, slug)
);
GRANT SELECT ON public.content_items TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.content_items TO authenticated;
GRANT ALL ON public.content_items TO service_role;
ALTER TABLE public.content_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone reads published content" ON public.content_items
  FOR SELECT TO anon, authenticated USING (published OR public.is_staff(auth.uid()));
CREATE POLICY "Staff manage content" ON public.content_items
  FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TRIGGER content_items_updated_at BEFORE UPDATE ON public.content_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.site_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  media_key TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  alt TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_media TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.site_media TO authenticated;
GRANT ALL ON public.site_media TO service_role;
ALTER TABLE public.site_media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone reads site media" ON public.site_media
  FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Staff manage site media" ON public.site_media
  FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TRIGGER site_media_updated_at BEFORE UPDATE ON public.site_media
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ reservations ============
CREATE TABLE public.reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  confirmation_code TEXT NOT NULL UNIQUE DEFAULT 'SLR-' || lpad((floor(random() * 900000) + 100000)::int::text, 6, '0'),
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  villa_slug TEXT NOT NULL,
  villa_name TEXT NOT NULL,
  arrival DATE NOT NULL,
  departure DATE NOT NULL,
  guests INTEGER NOT NULL DEFAULT 2,
  extras JSONB NOT NULL DEFAULT '[]'::jsonb,
  requests TEXT,
  total_amount NUMERIC(10,2) NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'requested',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reservations TO authenticated;
GRANT ALL ON public.reservations TO service_role;
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Guests read own reservations" ON public.reservations
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Guests create own reservations" ON public.reservations
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Guests update own reservations" ON public.reservations
  FOR UPDATE TO authenticated USING (auth.uid() = user_id OR public.is_staff(auth.uid()))
  WITH CHECK (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Staff delete reservations" ON public.reservations
  FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER reservations_updated_at BEFORE UPDATE ON public.reservations
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.validate_reservation_dates()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.departure <= NEW.arrival THEN
    RAISE EXCEPTION 'Departure must be after arrival';
  END IF;
  RETURN NEW;
END;
$$;
CREATE TRIGGER reservations_validate_dates BEFORE INSERT OR UPDATE ON public.reservations
  FOR EACH ROW EXECUTE FUNCTION public.validate_reservation_dates();

-- ============ spa bookings ============
CREATE TABLE public.spa_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  treatment_slug TEXT NOT NULL,
  treatment_name TEXT NOT NULL,
  therapist TEXT,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  add_ons JSONB NOT NULL DEFAULT '[]'::jsonb,
  total_amount NUMERIC(10,2) NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'requested',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.spa_bookings TO authenticated;
GRANT ALL ON public.spa_bookings TO service_role;
ALTER TABLE public.spa_bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Guests read own spa bookings" ON public.spa_bookings
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Guests create own spa bookings" ON public.spa_bookings
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Guests update own spa bookings" ON public.spa_bookings
  FOR UPDATE TO authenticated USING (auth.uid() = user_id OR public.is_staff(auth.uid()))
  WITH CHECK (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Staff delete spa bookings" ON public.spa_bookings
  FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER spa_bookings_updated_at BEFORE UPDATE ON public.spa_bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ dining requests ============
CREATE TABLE public.dining_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  restaurant_slug TEXT NOT NULL,
  restaurant_name TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  party_size INTEGER NOT NULL DEFAULT 2,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'requested',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.dining_requests TO authenticated;
GRANT ALL ON public.dining_requests TO service_role;
ALTER TABLE public.dining_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Guests read own dining requests" ON public.dining_requests
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Guests create own dining requests" ON public.dining_requests
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Guests update own dining requests" ON public.dining_requests
  FOR UPDATE TO authenticated USING (auth.uid() = user_id OR public.is_staff(auth.uid()))
  WITH CHECK (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Staff delete dining requests" ON public.dining_requests
  FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER dining_requests_updated_at BEFORE UPDATE ON public.dining_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ membership enquiries ============
CREATE TABLE public.membership_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  note TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.membership_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.membership_requests TO authenticated;
GRANT ALL ON public.membership_requests TO service_role;
ALTER TABLE public.membership_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can request membership" ON public.membership_requests
  FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Staff read membership requests" ON public.membership_requests
  FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "Staff manage membership requests" ON public.membership_requests
  FOR UPDATE TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Staff delete membership requests" ON public.membership_requests
  FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
CREATE TRIGGER membership_requests_updated_at BEFORE UPDATE ON public.membership_requests
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ concierge conversation ============
CREATE TABLE public.concierge_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, DELETE ON public.concierge_messages TO authenticated;
GRANT ALL ON public.concierge_messages TO service_role;
ALTER TABLE public.concierge_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Guests read own concierge messages" ON public.concierge_messages
  FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.is_staff(auth.uid()));
CREATE POLICY "Guests write own concierge messages" ON public.concierge_messages
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Guests delete own concierge messages" ON public.concierge_messages
  FOR DELETE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX idx_reservations_user ON public.reservations(user_id);
CREATE INDEX idx_spa_bookings_user ON public.spa_bookings(user_id);
CREATE INDEX idx_dining_requests_user ON public.dining_requests(user_id);
CREATE INDEX idx_concierge_messages_user ON public.concierge_messages(user_id, created_at);
CREATE INDEX idx_content_items_kind ON public.content_items(kind, sort_order);