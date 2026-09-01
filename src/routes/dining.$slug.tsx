import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { restaurants } from "@/data/resort";
import { Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/dining/$slug")({
  loader: ({ params }) => {
    const restaurant = restaurants.find((r) => r.slug === params.slug);
    if (!restaurant) throw notFound();
    return { restaurant };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Restaurant not found | SOLARA" }, { name: "robots", content: "noindex" }],
      };
    }
    const { restaurant } = loaderData;
    return {
      meta: [
        { title: `${restaurant.name} — ${restaurant.cuisine} | SOLARA` },
        { name: "description", content: restaurant.description },
        { property: "og:title", content: `${restaurant.name} | SOLARA` },
        { property: "og:description", content: restaurant.summary },
      ],
    };
  },
  component: RestaurantDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="display text-4xl">That kitchen is closed.</p>
    </div>
  ),
});

const slots = [
  { time: "18:30", status: "Available" },
  { time: "19:00", status: "Available" },
  { time: "19:30", status: "Available" },
  { time: "20:00", status: "Limited" },
  { time: "20:30", status: "Available" },
  { time: "21:00", status: "Limited" },
];

const seating = ["No preference", "Ocean edge", "Inside", "Chef's counter", "Private alcove"];
const occasions = ["None", "Birthday", "Anniversary", "Proposal", "Celebration"];

function RestaurantDetail() {
  const { restaurant } = Route.useLoaderData();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:30");
  const [guests, setGuests] = useState(2);
  const [seat, setSeat] = useState(seating[0]!);
  const [occasion, setOccasion] = useState(occasions[0]!);
  const [notes, setNotes] = useState("");

  return (
    <>
      <section className="relative h-[70vh] min-h-[440px] overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-charcoal/20" />
        <Shell className="absolute inset-x-0 bottom-0 pb-14">
          <p className="eyebrow text-primary-foreground/70">{restaurant.cuisine}</p>
          <h1 className="display mt-4 text-6xl tracking-[0.08em] text-primary-foreground md:text-8xl">
            {restaurant.name}
          </h1>
        </Shell>
      </section>

      <section className="py-24">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground">{restaurant.description}</p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                <div className="border-t border-border pt-4">
                  <dt className="eyebrow text-muted-foreground">Hours</dt>
                  <dd className="mt-2 text-sm">{restaurant.hours}</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="eyebrow text-muted-foreground">Location</dt>
                  <dd className="mt-2 text-sm">{restaurant.location}</dd>
                </div>
                <div className="border-t border-border pt-4">
                  <dt className="eyebrow text-muted-foreground">Kitchen</dt>
                  <dd className="mt-2 text-sm">{restaurant.chef}</dd>
                </div>
              </dl>

              <div className="mt-12">
                <p className="eyebrow text-muted-foreground">Signatures</p>
                <ul className="mt-5 space-y-3">
                  {restaurant.signatures.map((s) => (
                    <li key={s} className="display border-b border-border pb-3 text-2xl">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <form
              className="h-fit border border-border bg-card p-8 lg:sticky lg:top-28"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!date) {
                  toast.error("Choose a date for your table.");
                  return;
                }
                const { data: userData } = await supabase.auth.getUser();
                if (!userData.user) {
                  toast.error("Please sign in to request a table.");
                  return;
                }
                const { error } = await supabase.from("dining_requests").insert({
                  user_id: userData.user.id,
                  restaurant_slug: restaurant.slug,
                  restaurant_name: restaurant.name,
                  booking_date: date,
                  booking_time: time,
                  party_size: guests,
                });
                if (error) {
                  toast.error("We couldn't send that request. Please try again.");
                  return;
                }
                toast.success(
                  `Table for ${guests} at ${restaurant.name}, ${date} at ${time}. Your concierge will confirm shortly.`,
                );
              }}
            >
              <p className="eyebrow text-muted-foreground">Reserve a table</p>
              <h2 className="display mt-3 text-3xl">{restaurant.name}</h2>

              <label className="mt-8 block text-sm">
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
                  {slots.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      onClick={() => setTime(slot.time)}
                      className={`border px-2 py-3 text-xs transition-colors ${
                        time === slot.time
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <span className="block">{slot.time}</span>
                      <span className="mt-1 block text-[0.6rem] tracking-[0.14em] uppercase opacity-70">
                        {slot.status}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <label className="mt-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Guests</span>
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                />
              </label>

              <label className="mt-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Seating</span>
                <select
                  value={seat}
                  onChange={(e) => setSeat(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                >
                  {seating.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>

              <label className="mt-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Occasion</span>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                >
                  {occasions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>

              <label className="mt-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Special requests</span>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="mt-8 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal"
              >
                Request Table
              </button>
            </form>
          </div>
        </Shell>
      </section>
    </>
  );
}
