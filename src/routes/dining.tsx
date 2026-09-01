import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/resort";
import { useContent } from "@/hooks/use-content";
import { PageHero, SectionHeading, Shell, CtaLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — AURA, TIDE, SOL & NOCTURNE | SOLARA" },
      {
        name: "description",
        content:
          "Four island kitchens and a private dining team: contemporary fine dining, coastal seafood, Mediterranean all-day dining and a late-night bar.",
      },
      { property: "og:title", content: "Taste the island | SOLARA" },
      {
        property: "og:description",
        content: "Seven kitchens, one shoreline, produce that rarely travels further than the boat.",
      },
    ],
  }),
  component: DiningPage,
});

const privateDining = [
  "Dinner on the sand, lanterns only",
  "A table set inside your villa",
  "Sunset dining on the west deck",
  "Chef's table beside the pass",
  "A yacht, anchored, for two",
];

function DiningPage() {
  const { restaurants } = useContent();
  return (
    <>
      <PageHero
        image={images.diningAura}
        eyebrow="Dine"
        title="Taste the island."
        intro="Produce that rarely travels further than the boat."
      />

      <section className="py-24 md:py-32">
        <Shell>
          <div className="space-y-24">
            {restaurants.map((r, i) => (
              <Reveal key={r.slug}>
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="eyebrow text-muted-foreground">{r.cuisine}</p>
                    <h2 className="display mt-4 text-5xl tracking-[0.08em] text-foreground">
                      {r.name}
                    </h2>
                    <p className="mt-5 text-muted-foreground">{r.description}</p>
                    <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                      <div>
                        <dt className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Hours
                        </dt>
                        <dd className="mt-1 text-sm text-foreground">{r.hours}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Location
                        </dt>
                        <dd className="mt-1 text-sm text-foreground">{r.location}</dd>
                      </div>
                      <div>
                        <dt className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                          Kitchen
                        </dt>
                        <dd className="mt-1 text-sm text-foreground">{r.chef}</dd>
                      </div>
                    </dl>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <Link
                        to="/dining/$slug"
                        params={{ slug: r.slug }}
                        className="inline-flex bg-primary px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal"
                      >
                        Reserve a Table
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      <section className="bg-charcoal py-28 text-primary-foreground">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/50">Private dining</p>
              <h2 className="display mt-5 text-4xl md:text-6xl">Dinner, without an audience.</h2>
              <p className="mt-6 max-w-md text-primary-foreground/60">
                Tell us where and when. We will bring the kitchen, the light and the wine list.
              </p>
              <ul className="mt-10 space-y-4">
                {privateDining.map((item) => (
                  <li key={item} className="border-b border-primary-foreground/15 pb-3 text-lg">
                    {item}
                  </li>
                ))}
              </ul>
              <CtaLink to="/portal" variant="light" className="mt-10">
                Design Your Dinner
              </CtaLink>
            </div>
            <img
              src={images.diningNocturne}
              alt="A dark timber bar lit with bronze lanterns"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Shell>
      </section>

      <section className="py-24">
        <Shell>
          <SectionHeading
            eyebrow="Reservations"
            title="Book a table before you arrive."
            intro="Choose a restaurant to see live availability, seating preferences and occasion notes."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {restaurants.map((r) => (
              <Link
                key={r.slug}
                to="/dining/$slug"
                params={{ slug: r.slug }}
                className="border border-border bg-card p-8 transition-colors hover:border-accent"
              >
                <p className="display text-3xl tracking-[0.08em] text-foreground">{r.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{r.summary}</p>
              </Link>
            ))}
          </div>
        </Shell>
      </section>
    </>
  );
}
