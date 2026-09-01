import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/resort";
import { CtaLink, PageHero, SectionHeading, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import heroIsland from "@/assets/hero-island.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — A private island in the Indian Ocean | SOLARA" },
      {
        name: "description",
        content:
          "How SOLARA was built: one island, twenty-four villas, and a belief that luxury means privacy, nature and being known.",
      },
      { property: "og:title", content: "Our Story | SOLARA" },
      { property: "og:description", content: "A world away from ordinary." },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <PageHero
        image={heroIsland}
        eyebrow="Our story"
        title="A world away from ordinary."
        intro="Where the ocean slows time."
      />

      <section className="py-24 md:py-32">
        <Shell>
          <Reveal className="max-w-3xl">
            <p className="display text-3xl leading-snug text-foreground md:text-4xl">
              SOLARA began with a rule: nothing on the island may be taller than the trees, and
              nothing may be louder than the water.
            </p>
            <p className="mt-8 text-muted-foreground">
              What followed was seven years of slow building. Twenty-four villas placed where they
              would disturb least. A marine reserve drawn around the reef before the first
              foundation was poured. A staff recruited from the islands nearby, most of whom have
              been here since the beginning.
            </p>
            <p className="mt-6 text-muted-foreground">
              We do not measure success in occupancy. We measure it in guests who return, and in a
              reef that is healthier every year we count it.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            <ParallaxImage
              src={images.experienceNature}
              alt="Jungle interior of the island"
              className="aspect-[4/5]"
            />
            <ParallaxImage
              src={images.villaResidence}
              alt="A private residence at dusk"
              className="aspect-[4/5] md:mt-20"
            />
          </div>
        </Shell>
      </section>

      <section className="border-t border-border bg-sand/25 py-24">
        <Shell>
          <SectionHeading
            eyebrow="The four pillars"
            title="Stay. Dine. Wellness. Explore."
            intro="Everything on the island connects to something else. A villa suggests a dinner; a dinner suggests a morning on the reef."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { title: "Stay", body: "Twenty-four private villas, suites and residences." },
              { title: "Dine", body: "Seven kitchens and a private dining team." },
              { title: "Wellness", body: "Twelve signature rituals and daily movement." },
              { title: "Explore", body: "Forty island and ocean experiences." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07} className="border-t border-foreground/20 pt-6">
                <h3 className="display text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <CtaLink to="/book">Plan Your Escape</CtaLink>
          </Reveal>
        </Shell>
      </section>
    </>
  );
}
