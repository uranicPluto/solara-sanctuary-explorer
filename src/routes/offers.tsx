import { createFileRoute } from "@tanstack/react-router";
import { offers, images } from "@/data/resort";
import { CtaLink, PageHero, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Packages — Curated escapes | SOLARA" },
      {
        name: "description",
        content:
          "The Romantic Escape, The Wellness Retreat and The Explorer: multi-night packages combining villas, spa rituals, dining and island experiences.",
      },
      { property: "og:title", content: "Curated escapes | SOLARA" },
      { property: "og:description", content: "Three-, five- and seven-night island journeys." },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <>
      <PageHero
        image={images.villaSunset}
        eyebrow="Offers"
        title="Curated escapes."
        intro="Journeys shaped around a single intention."
      />

      <section className="py-24">
        <Shell>
          <div className="space-y-20">
            {offers.map((offer, i) => (
              <Reveal key={offer.slug}>
                <div
                  className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="eyebrow text-muted-foreground">{offer.nights} nights</p>
                    <h2 className="display mt-4 text-4xl text-foreground md:text-6xl">
                      {offer.name}
                    </h2>
                    <ul className="mt-8 space-y-3">
                      {offer.includes.map((inc) => (
                        <li key={inc} className="border-b border-border pb-3 text-lg text-foreground">
                          {inc}
                        </li>
                      ))}
                    </ul>
                    <CtaLink to="/book" className="mt-10">
                      Explore Package
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>
    </>
  );
}
