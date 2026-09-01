import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/resort";
import { PageHero, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Luxury with a lighter footprint | SOLARA" },
      {
        name: "description",
        content:
          "Solar and storage, a protected reef, island-grown food, closed-loop water and a staff drawn from the islands nearby.",
      },
      { property: "og:title", content: "Luxury that leaves a lighter footprint | SOLARA" },
      { property: "og:description", content: "A reef that is healthier every year we count it." },
    ],
  }),
  component: SustainabilityPage,
});

const stories = [
  {
    title: "Light from the sky",
    body: "A solar field behind the ridge and battery storage under it carry the island through the night. The generators have not run in fourteen months.",
  },
  {
    title: "A reef with a boundary",
    body: "Two square kilometres of water around SOLARA are closed to fishing. Our marine team counts it four times a year, and guests are welcome on the count.",
  },
  {
    title: "Food that didn't fly",
    body: "The garden covers most of what SOL serves at breakfast. The rest comes from boats that were already going to sea.",
  },
  {
    title: "Water in a circle",
    body: "Rain is caught, desalination runs on the solar surplus, and every drop of grey water returns to the gardens.",
  },
  {
    title: "The people who were here first",
    body: "Four in five of our team come from the islands within an hour of us. The training academy runs year-round, whether we are hiring or not.",
  },
];

function SustainabilityPage() {
  return (
    <>
      <PageHero
        image={images.experienceNature}
        eyebrow="Sustainability"
        title="Luxury that leaves a lighter footprint."
      />
      <section className="py-24">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-14">
              {stories.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <h2 className="display text-3xl text-foreground md:text-4xl">{s.title}</h2>
                  <p className="mt-4 max-w-lg text-muted-foreground">{s.body}</p>
                </Reveal>
              ))}
            </div>
            <div className="space-y-8 lg:sticky lg:top-28 lg:h-fit">
              <img
                src={images.experienceOcean}
                alt="The protected reef around the island"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}
