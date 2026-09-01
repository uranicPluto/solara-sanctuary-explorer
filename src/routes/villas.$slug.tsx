import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { villas, experiences, treatments } from "@/data/resort";
import { CtaLink, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/villas/$slug")({
  loader: ({ params }) => {
    const villa = villas.find((v) => v.slug === params.slug);
    if (!villa) throw notFound();
    return { villa };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Villa not found | SOLARA" }, { name: "robots", content: "noindex" }] };
    }
    const { villa } = loaderData;
    return {
      meta: [
        { title: `${villa.name} — from $${villa.price} per night | SOLARA` },
        { name: "description", content: villa.tagline },
        { property: "og:title", content: `${villa.name} | SOLARA` },
        { property: "og:description", content: villa.tagline },
      ],
    };
  },
  component: VillaDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center">
      <p className="display text-4xl">This villa is no longer on the island.</p>
    </div>
  ),
});

function VillaDetail() {
  const { villa } = Route.useLoaderData();
  const others = villas.filter((v) => v.slug !== villa.slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[82vh] min-h-[520px] overflow-hidden">
        <img src={villa.image} alt={villa.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/25" />
        <Shell className="absolute inset-x-0 bottom-0 pb-16">
          <p className="eyebrow text-primary-foreground/70">{villa.category}</p>
          <h1 className="display mt-4 text-5xl text-primary-foreground md:text-8xl">{villa.name}</h1>
          <p className="mt-5 text-primary-foreground/80">
            {villa.guests} Guests · {villa.bedrooms} Bedroom{villa.bedrooms > 1 ? "s" : ""} ·{" "}
            {villa.privatePool ? "Private Pool · " : ""}
            {villa.view} View
          </p>
        </Shell>
      </section>

      <section className="py-24">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                <h2 className="display text-4xl text-foreground md:text-5xl">{villa.tagline}</h2>
                <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                  {villa.description}
                </p>
              </Reveal>

              <Reveal className="mt-14">
                <p className="eyebrow text-muted-foreground">Amenities</p>
                <ul className="mt-6 grid gap-y-3 sm:grid-cols-2">
                  {villa.amenities.map((a) => (
                    <li key={a} className="border-b border-border py-2 text-sm text-foreground">
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-14 grid gap-6 sm:grid-cols-3">
                {[
                  { label: "Villa size", value: `${villa.size} m²` },
                  { label: "To the beach", value: villa.distanceToBeach },
                  { label: "To dining", value: villa.distanceToDining },
                  { label: "Check-in", value: "From 14:00" },
                  { label: "Check-out", value: "Until 12:00" },
                  { label: "Availability", value: "Selected dates" },
                ].map((item) => (
                  <div key={item.label} className="border-t border-border pt-4">
                    <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {item.label}
                    </p>
                    <p className="mt-2 text-foreground">{item.value}</p>
                  </div>
                ))}
              </Reveal>

              <Reveal className="mt-16 grid gap-4 sm:grid-cols-2">
                {villas
                  .filter((v) => v.slug !== villa.slug)
                  .slice(0, 2)
                  .map((v) => (
                    <img
                      key={v.slug}
                      src={v.image}
                      alt={`${villa.name} gallery`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ))}
              </Reveal>
            </div>

            <aside className="h-fit border border-border bg-card p-8 lg:sticky lg:top-28">
              <p className="eyebrow text-muted-foreground">From</p>
              <p className="display mt-2 text-5xl text-foreground">
                ${villa.price.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">per night, taxes excluded</p>
              <div className="mt-8 flex flex-col gap-3">
                <CtaLink to="/book">Reserve This Villa</CtaLink>
                <CtaLink to="/experiences" variant="outline">
                  Take a Virtual Tour
                </CtaLink>
              </div>
              <div className="mt-8 space-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
                <p>Best rate guaranteed</p>
                <p>Flexible cancellation up to 14 days</p>
                <p>24/7 personal concierge</p>
              </div>
            </aside>
          </div>

          <div className="mt-28 border-t border-border pt-16">
            <p className="eyebrow text-muted-foreground">Recommended for your stay</p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[experiences[1]!, experiences[0]!].map((e) => (
                <Link
                  key={e.slug}
                  to="/experiences/$slug"
                  params={{ slug: e.slug }}
                  className="group border-t border-foreground/20 pt-5"
                >
                  <p className="display text-2xl text-foreground group-hover:text-accent">
                    {e.name}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.summary}</p>
                </Link>
              ))}
              <Link to="/wellness" className="group border-t border-foreground/20 pt-5">
                <p className="display text-2xl text-foreground group-hover:text-accent">
                  {treatments[0]!.name}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{treatments[0]!.description}</p>
              </Link>
            </div>
          </div>

          <div className="mt-24">
            <p className="eyebrow text-muted-foreground">Other accommodation</p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {others.map((v) => (
                <Link key={v.slug} to="/villas/$slug" params={{ slug: v.slug }} className="group">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                    />
                  </div>
                  <p className="display mt-4 text-2xl text-foreground">{v.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}
