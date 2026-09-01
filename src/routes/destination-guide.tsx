import { createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/resort";
import { PageHero, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/destination-guide")({
  head: () => ({
    meta: [
      { title: "Destination Guide — Beyond the resort | SOLARA" },
      {
        name: "description",
        content:
          "Beaches, culture, food, adventure, nature and nightlife beyond the island, with travel times and the best months to go.",
      },
      { property: "og:title", content: "Beyond the resort | SOLARA" },
      { property: "og:description", content: "An editorial guide to the archipelago." },
    ],
  }),
  component: GuidePage,
});

const articles = [
  {
    category: "Beaches",
    title: "The sandbar that appears at low tide",
    image: images.villaBeach,
    travel: "12 minutes by boat",
    best: "May to October",
    body: "For four hours a day there is an island here. It has no name, no shade and no one else on it. We will leave you with an umbrella and come back when you wave.",
  },
  {
    category: "Culture",
    title: "Morning at the fish market",
    image: images.diningTide,
    travel: "35 minutes by boat",
    best: "Year round, before 08:00",
    body: "The mainland market has been in the same place for two hundred years. Go with one of our chefs, and go early.",
  },
  {
    category: "Nature",
    title: "The ridge before the rain",
    image: images.experienceNature,
    travel: "On the island",
    best: "November to February",
    body: "When the monsoon builds, the interior turns a green that photographs badly and stays with you anyway.",
  },
  {
    category: "Food",
    title: "Where the island eats",
    image: images.diningSol,
    travel: "40 minutes by boat",
    best: "Year round",
    body: "Three tables, one grill, no menu. Ask for whatever the boats brought and trust the answer.",
  },
];

function GuidePage() {
  return (
    <>
      <PageHero
        image={images.experienceOcean}
        eyebrow="Island guide"
        title="Beyond the resort."
        intro="The archipelago, its people, and the hours worth leaving the island for."
      />
      <section className="py-24">
        <Shell>
          <div className="space-y-20">
            {articles.map((a, i) => (
              <Reveal key={a.title}>
                <article
                  className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div>
                    <p className="eyebrow text-muted-foreground">{a.category}</p>
                    <h2 className="display mt-4 text-4xl text-foreground md:text-5xl">{a.title}</h2>
                    <p className="mt-5 text-muted-foreground">{a.body}</p>
                    <dl className="mt-8 flex flex-wrap gap-10 text-sm">
                      <div>
                        <dt className="eyebrow text-muted-foreground">Travel time</dt>
                        <dd className="mt-1">{a.travel}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow text-muted-foreground">Best time</dt>
                        <dd className="mt-1">{a.best}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>
    </>
  );
}
