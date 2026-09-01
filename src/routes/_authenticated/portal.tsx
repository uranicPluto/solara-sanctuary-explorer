import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { CtaLink, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { rituals, villas, experiences } from "@/data/resort";


export const Route = createFileRoute("/_authenticated/portal")({
  head: () => ({
    meta: [
      { title: "Guest Portal — Your stay | SOLARA" },
      {
        name: "description",
        content: "Your reservations, itinerary, saved villas and concierge messages at SOLARA.",
      },
      { property: "og:title", content: "Guest Portal | SOLARA" },
      { property: "og:description", content: "Everything arranged before you arrive." },
    ],
  }),
  component: PortalPage,
});

function PortalPage() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isStaff, setIsStaff] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      setEmail(data.user?.email ?? "");
      const meta = data.user?.user_metadata as { full_name?: string; name?: string } | undefined;
      setName(meta?.full_name ?? meta?.name ?? "");
      if (data.user) {
        const { data: roles } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", data.user.id);
        setIsStaff((roles ?? []).some((r) => r.role === "admin" || r.role === "staff"));
      }
    });
  }, []);

  const { data: reservations } = useQuery({
    queryKey: ["portal", "reservations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reservations")
        .select("*")
        .order("arrival", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: spa } = useQuery({
    queryKey: ["portal", "spa"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("spa_bookings")
        .select("*")
        .order("booking_date");
      if (error) throw error;
      return data;
    },
  });

  const itinerary = rituals["Restore"] ?? [];
  const saved = villas.slice(0, 2);
  const suggested = experiences.slice(0, 3);

  async function cancelReservation(id: string) {
    await supabase.from("reservations").update({ status: "cancelled" }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["portal", "reservations"] });
  }

  return (
    <section className="pt-40 pb-28">
      <Shell>
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <p className="eyebrow text-muted-foreground">Guest portal</p>
            <h1 className="display mt-4 text-5xl text-foreground md:text-7xl">
              {name ? `Welcome, ${name.split(" ")[0]}.` : "Welcome back."}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">{email}</p>
          </div>
          <div className="flex gap-3">
            {isStaff && (
              <Link
                to="/admin"
                className="border border-border px-6 py-3 text-[0.65rem] tracking-[0.24em] uppercase transition-colors hover:border-foreground/40"
              >
                Admin
              </Link>
            )}
            <button
              type="button"
              onClick={async () => {
                await qc.cancelQueries();
                qc.clear();
                await supabase.auth.signOut();
                navigate({ to: "/", replace: true });
              }}
              className="border border-border px-6 py-3 text-[0.65rem] tracking-[0.24em] uppercase transition-colors hover:border-foreground/40"
            >
              Sign Out
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-16">
            <Reveal>
              <h2 className="display text-3xl text-foreground">Your reservations</h2>
              {reservations?.length ? (
                <ul className="mt-6 space-y-4">
                  {reservations.map((r) => (
                    <li key={r.id} className="border border-border bg-card p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-4">
                        <p className="display text-2xl">{r.villa_name}</p>
                        <span className="text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                          {r.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {r.arrival} → {r.departure} · {r.guests} guests ·{" "}
                        {r.confirmation_code}
                      </p>
                      <p className="mt-1 text-sm">${Number(r.total_amount).toLocaleString()}</p>
                      {r.status !== "cancelled" && (
                        <button
                          type="button"
                          onClick={() => void cancelReservation(r.id)}
                          className="mt-4 text-xs tracking-[0.2em] text-muted-foreground uppercase underline-offset-4 hover:underline"
                        >
                          Cancel
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-6 border border-border bg-card p-8">
                  <p className="text-muted-foreground">
                    You have no reservation yet. When you book, your villa, transfers and itinerary
                    will appear here.
                  </p>
                  <CtaLink to="/book" className="mt-8">
                    Plan Your Escape
                  </CtaLink>
                </div>
              )}
            </Reveal>

            {spa && spa.length > 0 && (
              <Reveal>
                <h2 className="display text-3xl text-foreground">Spa</h2>
                <ul className="mt-6 space-y-3">
                  {spa.map((s) => (
                    <li key={s.id} className="flex justify-between border-b border-border pb-3">
                      <span>{s.treatment_name}</span>
                      <span className="text-sm text-muted-foreground">
                        {s.booking_date} · {s.booking_time}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}


            <Reveal>
              <h2 className="display text-3xl text-foreground">A suggested day</h2>
              <ol className="mt-6 space-y-4">
                {itinerary.map((item) => (
                  <li
                    key={item.time}
                    className="flex gap-8 border-b border-border pb-4 text-foreground"
                  >
                    <span className="w-16 text-sm text-muted-foreground">{item.time}</span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="display text-3xl text-foreground">Chosen for you</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {suggested.map((e) => (
                  <div key={e.slug}>
                    <img
                      src={e.image}
                      alt={e.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <p className="display mt-3 text-2xl">{e.name}</p>
                    <p className="text-sm text-muted-foreground">${e.price} per guest</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="space-y-10">
            <div className="border border-border bg-card p-8">
              <p className="eyebrow text-muted-foreground">Saved villas</p>
              <ul className="mt-5 space-y-4">
                {saved.map((v) => (
                  <li key={v.slug} className="flex items-center gap-4">
                    <img src={v.image} alt={v.name} className="h-16 w-20 object-cover" />
                    <div>
                      <p className="text-sm text-foreground">{v.name}</p>
                      <p className="text-xs text-muted-foreground">
                        ${v.price.toLocaleString()} / night
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-sand/40 p-8">
              <p className="eyebrow text-muted-foreground">Your concierge</p>
              <p className="display mt-3 text-3xl">Amara</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Available around the clock, on the island and before you arrive.
              </p>
            </div>
          </aside>
        </div>
      </Shell>
    </section>
  );
}
