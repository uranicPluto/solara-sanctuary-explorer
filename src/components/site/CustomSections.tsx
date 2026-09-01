import { Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";
import { useContent, type SiteSection } from "@/hooks/use-content";

const themeClass: Record<SiteSection["theme"], string> = {
  light: "bg-background text-foreground",
  sand: "bg-sand/30 text-foreground border-y border-border",
  dark: "bg-charcoal text-primary-foreground",
};

function Cta({ label, href }: { label: string; href: string }) {
  if (!label) return null;
  const className =
    "mt-8 inline-block border-b border-current pb-1 text-[0.68rem] tracking-[0.24em] uppercase";
  if (href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href || "/"} className={className}>
      {label}
    </Link>
  );
}

function SectionBlock({ section }: { section: SiteSection }) {
  const text = (
    <div>
      {section.eyebrow && <p className="eyebrow opacity-70">{section.eyebrow}</p>}
      {section.title && <h2 className="display mt-4 text-4xl md:text-5xl">{section.title}</h2>}
      {section.body && (
        <p className="mt-6 max-w-xl text-base leading-relaxed opacity-80 whitespace-pre-line">
          {section.body}
        </p>
      )}
      <Cta label={section.ctaLabel} href={section.ctaHref} />
    </div>
  );

  if (section.layout === "banner" && section.image) {
    return (
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center">
        <img src={section.image} alt={section.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/45" />
        <Shell>
          <div className="relative mx-auto max-w-2xl text-primary-foreground">{text}</div>
        </Shell>
      </section>
    );
  }

  if (section.layout === "text" || !section.image) {
    return (
      <section className={`py-24 md:py-32 ${themeClass[section.theme]}`}>
        <Shell>
          <Reveal>
            <div className="max-w-3xl">{text}</div>
          </Reveal>
        </Shell>
      </section>
    );
  }

  const imageFirst = section.layout === "image-left";
  return (
    <section className={`py-24 md:py-32 ${themeClass[section.theme]}`}>
      <Shell>
        <Reveal>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className={imageFirst ? "md:order-1" : "md:order-2"}>
              <img
                src={section.image}
                alt={section.title}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className={imageFirst ? "md:order-2" : "md:order-1"}>{text}</div>
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}

/** Renders every admin-created section, in order. */
export function CustomSections() {
  const { sections } = useContent();
  if (!sections.length) return null;
  return (
    <>
      {sections.map((s) => (
        <SectionBlock key={s.slug} section={s} />
      ))}
    </>
  );
}
