-- lock down security definer functions
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_staff(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_staff(uuid) TO authenticated;

-- public content reads must not call is_staff (anon has no execute rights)
DROP POLICY "Anyone reads published content" ON public.content_items;
CREATE POLICY "Anyone reads published content" ON public.content_items
  FOR SELECT TO anon USING (published);
CREATE POLICY "Signed in users read content" ON public.content_items
  FOR SELECT TO authenticated USING (published OR public.is_staff(auth.uid()));