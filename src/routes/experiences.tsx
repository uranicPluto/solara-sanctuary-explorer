import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { experienceCategories, images } from "@/data/resort";
import { useContent } from "@/hooks/use-content";
import { PageHero, SectionHeading, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { IslandMap } from "@/components/site/IslandMap";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Ocean, Nature, Adventure & Culture | SOLARA" },
      {
        name: "description",
        content:
          "Reef diving, sunset sailing, jungle expeditions, island cooking and more than forty ways to spend a day at SOLARA.",
      },
      { property: "og:title", content: "The island is yours to discover | SOLARA" },
      {
        property: "og:description",
        content: "Forty ways to spend a day, all of them optional.",
      },
    ],
  }),
  component: ExperiencesPage,
});

const tourStops = ["Lobby", "Villa", "Beach", "Pool", "Restaurant", "Spa", "Gym", "Marina"];

function ExperiencesPage() {
  const { experiences } = useContent();
  const [category, setCategory] = useState<string>("All");
  const filtered =
    category === "All" ? experiences : experiences.filter((e) => e.category === category);
  const [stop, setStop] = useState(tourStops[0]!);

  return (
    <>
      <PageHero
        image={images.experienceOcean}
        eyebrow="Explore"
        title="The island is yours to discover."
        intro="Reef, ridge, open water and the villages beyond."
      />

      <section className="py-24">
        <Shell>
          <div className="grid gap-6 md:grid-cols-4">
            {experienceCategories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.07}>
                <button
                  type="button"
                  onClick={() => setCategory(cat.name)}
                  className="group block w-full text-left"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                    />
                  </div>
                  <h2 className="display mt-5 text-3xl text-foreground group-hover:text-accent">
                    {cat.name}
                  </h2>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </button>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      <section className="border-t border-border py-24">
        <Shell>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Bookable" title="Signature experiences." />
            <div className="flex flex-wrap gap-2">
              {["All", "Ocean", "Nature", "Adventure", "Culture"].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`border px-5 py-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${
                    category === c
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border hover:border-foreground/40"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-muted-foreground">
              Nothing scheduled in this category right now — your concierge can arrange it privately.
            </p>
          ) : (
            <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((e, i) => (
                <Reveal key={e.slug} delay={i * 0.08}>
                  <Link to="/experiences/$slug" params={{ slug: e.slug }} className="group block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={e.image}
                        alt={e.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-5 flex items-baseline justify-between">
                      <h3 className="display text-3xl text-foreground">{e.name}</h3>
                      <span className="text-sm text-muted-foreground">${e.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{e.summary}</p>
                    <p className="mt-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {e.duration} · {e.difficulty} · {e.groupSize}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Shell>
      </section>

      <section className="border-t border-border bg-sand/25 py-24">
        <Shell>
          <IslandMap />
        </Shell>
      </section>

      <section className="bg-charcoal py-24 text-primary-foreground">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/50">Virtual tour</p>
              <h2 className="display mt-5 text-4xl md:text-6xl">See SOLARA before you arrive.</h2>
              <p className="mt-6 max-w-md text-primary-foreground/60">
                Move through the island one space at a time. Every view is the real thing,
                photographed at the hour it looks best.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {tourStops.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStop(s)}
                    className={`border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase transition-colors ${
                      stop === s
                        ? "border-champagne text-champagne"
                        : "border-primary-foreground/30 text-primary-foreground/60 hover:border-primary-foreground/70"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={
                  stop === "Spa"
                    ? images.wellnessSpa
                    : stop === "Restaurant"
                      ? images.diningAura
                      : stop === "Marina"
                        ? images.sunsetCta
                        : stop === "Beach"
                          ? images.villaBeach
                          : stop === "Villa"
                            ? images.villaOcean
                            : images.villaResidence
                }
                alt={`Virtual tour: ${stop}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-5 left-5 border border-primary-foreground/50 px-5 py-2 text-[0.62rem] tracking-[0.24em] text-primary-foreground uppercase">
                Enter Virtual Tour — {stop}
              </span>
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}
