import { createFileRoute, notFound } from "@tanstack/react-router";
import { toast } from "sonner";
import { experiences } from "@/data/resort";
import { CtaLink, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/experiences/$slug")({
  loader: ({ params }) => {
    const experience = experiences.find((e) => e.slug === params.slug);
    if (!experience) throw notFound();
    return { experience };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Experience not found | SOLARA" }, { name: "robots", content: "noindex" }],
      };
    }
    const { experience } = loaderData;
    return {
      meta: [
        { title: `${experience.name} — ${experience.duration} | SOLARA` },
        { name: "description", content: experience.summary },
        { property: "og:title", content: `${experience.name} | SOLARA` },
        { property: "og:description", content: experience.summary },
      ],
    };
  },
  component: ExperienceDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="display text-4xl">That experience isn't running.</p>
    </div>
  ),
});

function ExperienceDetail() {
  const { experience } = Route.useLoaderData();

  return (
    <>
      <section className="relative h-[76vh] min-h-[460px] overflow-hidden">
        <img src={experience.image} alt={experience.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-charcoal/20" />
        <Shell className="absolute inset-x-0 bottom-0 pb-14">
          <p className="eyebrow text-primary-foreground/70">{experience.category}</p>
          <h1 className="display mt-4 text-5xl text-primary-foreground md:text-8xl">
            {experience.name}
          </h1>
        </Shell>
      </section>

      <section className="py-24">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground">{experience.description}</p>
              <dl className="mt-12 grid gap-6 sm:grid-cols-3">
                {[
                  ["Duration", experience.duration],
                  ["Difficulty", experience.difficulty],
                  ["Group size", experience.groupSize],
                  ["Location", experience.location],
                  ["Price", `$${experience.price} per guest`],
                  ["Availability", "Daily, weather permitting"],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-border pt-4">
                    <dt className="eyebrow text-muted-foreground">{label}</dt>
                    <dd className="mt-2 text-sm text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-12">
                <p className="eyebrow text-muted-foreground">What to bring</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {experience.bring.map((b) => (
                    <li key={b}>— {b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <aside className="h-fit border border-border bg-card p-8 lg:sticky lg:top-28">
              <p className="eyebrow text-muted-foreground">From</p>
              <p className="display mt-2 text-5xl">${experience.price}</p>
              <p className="text-sm text-muted-foreground">per guest</p>
              <button
                type="button"
                onClick={() => toast.success(`${experience.name} added to your stay.`)}
                className="mt-8 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal"
              >
                Add to My Stay
              </button>
              <CtaLink to="/book" variant="outline" className="mt-3 w-full">
                Book with a Villa
              </CtaLink>
            </aside>
          </div>
        </Shell>
      </section>
    </>
  );
}
