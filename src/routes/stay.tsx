import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useContent } from "@/hooks/use-content";
import { VillaCard } from "@/components/site/VillaCard";
import { PageHero, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { IslandMap } from "@/components/site/IslandMap";
import heroImage from "@/assets/villa-ocean.jpg";

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "Stay — Villas, Suites & Residences | SOLARA" },
      {
        name: "description",
        content:
          "Twenty-four private villas, suites and residences on a private island: ocean villas, beach residences, sunset suites and staffed private houses.",
      },
      { property: "og:title", content: "Stay somewhere extraordinary | SOLARA" },
      {
        property: "og:description",
        content: "Private spaces designed around the rhythm of the island.",
      },
    ],
  }),
  component: StayPage,
});

const views = ["Any view", "Ocean", "Beach", "Sunset", "Jungle"] as const;

function StayPage() {
  const [guests, setGuests] = useState(1);
  const [bedrooms, setBedrooms] = useState(0);
  const [maxPrice, setMaxPrice] = useState(4000);
  const [view, setView] = useState<(typeof views)[number]>("Any view");
  const [pool, setPool] = useState(false);
  const [beach, setBeach] = useState(false);

  const { villas } = useContent();

  const filtered = useMemo(
    () =>
      villas.filter(
        (v) =>
          v.guests >= guests &&
          v.bedrooms >= bedrooms &&
          v.price <= maxPrice &&
          (view === "Any view" || v.view === view) &&
          (!pool || v.privatePool) &&
          (!beach || v.beachAccess),
      ),
    [villas, guests, bedrooms, maxPrice, view, pool, beach],
  );

  return (
    <>
      <PageHero
        image={heroImage}
        eyebrow="Stay"
        title="Stay somewhere extraordinary."
        intro="Private spaces designed around the rhythm of the island."
      />

      <section className="py-20 md:py-28">
        <Shell>
          <div className="grid gap-8 border border-border bg-card p-8 md:grid-cols-4">
            <label className="flex flex-col gap-2 text-sm">
              <span className="eyebrow text-muted-foreground">Guests</span>
              <input
                type="number"
                min={1}
                max={8}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="eyebrow text-muted-foreground">Bedrooms</span>
              <input
                type="number"
                min={0}
                max={4}
                value={bedrooms}
                onChange={(e) => setBedrooms(Number(e.target.value))}
                className="border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="eyebrow text-muted-foreground">View</span>
              <select
                value={view}
                onChange={(e) => setView(e.target.value as (typeof views)[number])}
                className="border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
              >
                {views.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="eyebrow text-muted-foreground">
                Up to ${maxPrice.toLocaleString()} / night
              </span>
              <input
                type="range"
                min={1000}
                max={4000}
                step={50}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="accent-accent"
              />
            </label>
            <div className="flex flex-wrap gap-6 md:col-span-4">
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={pool}
                  onChange={(e) => setPool(e.target.checked)}
                  className="accent-accent"
                />
                Private pool
              </label>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={beach}
                  onChange={(e) => setBeach(e.target.checked)}
                  className="accent-accent"
                />
                Beach access
              </label>
              <span className="ml-auto text-sm text-muted-foreground">
                {filtered.length} of {villas.length} accommodations
              </span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-20 border border-border bg-card p-16 text-center">
              <h2 className="display text-4xl text-foreground">The tide is changing.</h2>
              <p className="mt-4 text-muted-foreground">
                Nothing matches those preferences right now. Try widening your journey.
              </p>
            </div>
          ) : (
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((villa, i) => (
                <Reveal key={villa.slug} delay={i * 0.08}>
                  <VillaCard villa={villa} />
                </Reveal>
              ))}
            </div>
          )}
        </Shell>
      </section>

      <section className="border-t border-border py-24">
        <Shell>
          <IslandMap />
        </Shell>
      </section>
    </>
  );
}
