import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { treatments, therapists, spaAddOns, images } from "@/data/resort";
import { PageHero, SectionHeading, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { RitualFinder } from "@/components/site/RitualFinder";

export const Route = createFileRoute("/wellness")({
  head: () => ({
    meta: [
      { title: "Wellness & Spa — Return to yourself | SOLARA" },
      {
        name: "description",
        content:
          "SOLARA Wellness: massage, facials, body rituals, yoga, meditation, breathwork and multi-day retreats in stone pavilions above the sea.",
      },
      { property: "og:title", content: "Return to yourself | SOLARA Wellness" },
      {
        property: "og:description",
        content: "Twelve signature rituals, sequenced by therapists who ask how you slept.",
      },
    ],
  }),
  component: WellnessPage,
});

const pillars = [
  { name: "Spa", note: "Six treatment pavilions, one couples suite." },
  { name: "Movement", note: "Yoga, mat pilates, strength and ocean swimming." },
  { name: "Stillness", note: "Meditation, breathwork and guided sleep." },
  { name: "Retreats", note: "Three, five and seven-night wellness journeys." },
];

function WellnessPage() {
  const [treatment, setTreatment] = useState(treatments[0]!.slug);
  const [therapist, setTherapist] = useState(therapists[0]!);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("11:00");
  const [addOns, setAddOns] = useState<string[]>([]);

  const selected = treatments.find((t) => t.slug === treatment)!;
  const total =
    selected.price + spaAddOns.filter((a) => addOns.includes(a.id)).reduce((s, a) => s + a.price, 0);

  return (
    <>
      <PageHero
        image={images.wellnessSpa}
        eyebrow="Wellness"
        title="Return to yourself."
        intro="Stone pavilions in a palm grove, and nothing at all to be on time for."
      />

      <section className="py-24">
        <Shell>
          <div className="grid gap-6 md:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07} className="border-t border-foreground/20 pt-6">
                <h2 className="display text-3xl text-foreground">{p.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      <section className="border-y border-border bg-sand/25 py-24">
        <Shell>
          <RitualFinder />
        </Shell>
      </section>

      <section className="py-24">
        <Shell>
          <SectionHeading
            eyebrow="Spa booking"
            title="Reserve a treatment."
            intro="Choose a ritual, a therapist and a time. Availability shown is live for the coming week."
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4">
              {treatments.map((t) => (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => setTreatment(t.slug)}
                  className={`w-full border p-6 text-left transition-colors ${
                    treatment === t.slug
                      ? "border-accent bg-card"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <h3 className="display text-2xl text-foreground">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t.duration} min · ${t.price}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
                </button>
              ))}
            </div>

            <form
              className="h-fit border border-border bg-card p-8 lg:sticky lg:top-28"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!date) {
                  toast.error("Choose a date for your treatment.");
                  return;
                }
                const { data: userData } = await supabase.auth.getUser();
                if (!userData.user) {
                  toast.error("Please sign in to reserve a treatment.");
                  return;
                }
                const addOnItems = addOns.map(
                  (id) => spaAddOns.find((a) => a.id === id) ?? { id, label: id, price: 0 },
                );
                const { error } = await supabase.from("spa_bookings").insert({
                  user_id: userData.user.id,
                  treatment_slug: selected.slug,
                  treatment_name: selected.name,
                  therapist,
                  booking_date: date,
                  booking_time: time,
                  add_ons: addOnItems,
                  total_amount:
                    selected.price + addOnItems.reduce((sum, a) => sum + (a.price ?? 0), 0),
                });
                if (error) {
                  toast.error("We couldn't save that booking. Please try again.");
                  return;
                }
                toast.success(`${selected.name} reserved for ${date} at ${time}.`);
              }}
            >
              <p className="eyebrow text-muted-foreground">Your treatment</p>
              <h3 className="display mt-3 text-3xl">{selected.name}</h3>

              <label className="mt-8 block text-sm">
                <span className="eyebrow text-muted-foreground">Therapist</span>
                <select
                  value={therapist}
                  onChange={(e) => setTherapist(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                >
                  {therapists.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="mt-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                />
              </label>

              <div className="mt-6">
                <span className="eyebrow text-muted-foreground">Time</span>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {["09:00", "11:00", "13:30", "15:00", "16:30", "18:00"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`border px-2 py-3 text-xs transition-colors ${
                        time === t
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="eyebrow text-muted-foreground">Add-ons</legend>
                <div className="mt-3 space-y-3">
                  {spaAddOns.map((a) => (
                    <label key={a.id} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addOns.includes(a.id)}
                          onChange={(e) =>
                            setAddOns((prev) =>
                              e.target.checked ? [...prev, a.id] : prev.filter((x) => x !== a.id),
                            )
                          }
                          className="accent-accent"
                        />
                        {a.label}
                      </span>
                      <span className="text-muted-foreground">+${a.price}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 flex items-baseline justify-between border-t border-border pt-5">
                <span className="eyebrow text-muted-foreground">Total</span>
                <span className="display text-3xl">${total}</span>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal"
              >
                Reserve Treatment
              </button>
            </form>
          </div>
        </Shell>
      </section>
    </>
  );
}
