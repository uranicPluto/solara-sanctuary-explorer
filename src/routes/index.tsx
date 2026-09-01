import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

import heroIsland from "@/assets/hero-island.jpg";
import sunsetCta from "@/assets/sunset-cta.jpg";
import { images, villas, restaurants, stats, dayAtSolara, testimonials, offers } from "@/data/resort";
import { Reveal, RevealWords } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { CtaLink, SectionHeading, Shell } from "@/components/site/Primitives";
import { CustomSections } from "@/components/site/CustomSections";

import { VillaCard } from "@/components/site/VillaCard";
import { IslandMap } from "@/components/site/IslandMap";
import { RitualFinder } from "@/components/site/RitualFinder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOLARA — A world away from ordinary" },
      {
        name: "description",
        content:
          "A private tropical sanctuary in the Indian Ocean. 24 villas, seven dining experiences, a wellness island and more than forty ways to spend a day.",
      },
      { property: "og:title", content: "SOLARA — A world away from ordinary" },
      {
        property: "og:description",
        content: "A private tropical sanctuary created for extraordinary escapes.",
      },
    ],
  }),
  component: Home,
});

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[620px] overflow-hidden">
      <motion.img
        src={heroIsland}
        alt="Aerial view of the SOLARA private island at golden hour"
        width={1920}
        height={1088}
        style={reduced ? {} : { scale }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/20 to-charcoal/80" />

      <motion.div
        style={reduced ? {} : { opacity }}
        className="relative mx-auto flex h-full max-w-[1500px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20"
      >
        <h1 className="display max-w-4xl text-[3rem] leading-[0.98] text-primary-foreground sm:text-7xl md:text-[6.5rem]">
          <RevealWords text="A world away from ordinary." />
        </h1>
        <Reveal delay={0.5} className="mt-8 max-w-xl">
          <p className="text-base text-primary-foreground/80 md:text-lg">
            Welcome to SOLARA — a private tropical sanctuary created for extraordinary escapes.
          </p>
        </Reveal>
        <Reveal delay={0.7} className="mt-10 flex flex-wrap gap-4">
          <CtaLink to="/book">Book Your Stay</CtaLink>
          <CtaLink to="/our-story" variant="light">
            Explore SOLARA
          </CtaLink>
        </Reveal>
        <Reveal
          delay={0.9}
          className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/20 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="eyebrow text-primary-foreground/60">Private Island · Indian Ocean</p>
          <motion.p
            animate={reduced ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="eyebrow text-primary-foreground/60"
          >
            Discover SOLARA ↓
          </motion.p>
        </Reveal>
      </motion.div>
    </section>
  );
}

const sequence = ["Arrive", "Exhale", "Discover", "Remember"];

function Home() {
  return (
    <>
      <Hero />

      {/* Editorial introduction */}
      <section className="bg-background py-28 md:py-40">
        <Shell>
          <Reveal className="max-w-4xl">
            <p className="eyebrow text-muted-foreground">What is SOLARA?</p>
            <h2 className="display mt-8 text-4xl leading-[1.05] text-foreground md:text-7xl">
              Some places are visited.
              <span className="block text-muted-foreground italic">Others are experienced.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <ParallaxImage
              src={images.villaOcean}
              alt="An open-air villa at dawn, looking out to the ocean"
              className="aspect-[5/4]"
              width={1600}
              height={1100}
            />
            <Reveal className="max-w-lg">
              <p className="text-lg leading-relaxed text-foreground">
                SOLARA is built around slowing down. Around reconnecting with something older than
                a schedule. Around extraordinary experiences, and hospitality without compromise.
              </p>
              <p className="mt-6 text-muted-foreground">
                Twenty-four villas on a private island, staffed by people who learn how you take
                your coffee on the first morning and never ask again.
              </p>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
                {sequence.map((word, i) => (
                  <Reveal key={word} delay={i * 0.14}>
                    <span className="display text-3xl text-foreground/25 transition-colors hover:text-accent md:text-4xl">
                      {word}
                    </span>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* Statistics */}
      <section className="border-y border-border bg-sand/30 py-20">
        <Shell>
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-5">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08} className="text-center">
                <p className="display text-5xl text-foreground md:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Stay */}
      <section className="py-28 md:py-36">
        <Shell>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Stay"
              title="Stay somewhere extraordinary."
              intro="Private spaces designed around the rhythm of the island."
            />
            <CtaLink to="/stay" variant="outline">
              All Accommodation
            </CtaLink>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {villas.map((villa, i) => (
              <Reveal key={villa.slug} delay={i * 0.1}>
                <VillaCard villa={villa} />
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Dine */}
      <section className="bg-charcoal py-28 text-primary-foreground md:py-36">
        <Shell>
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-primary-foreground/50">Dine</p>
            <h2 className="display mt-5 text-4xl md:text-6xl">Taste the island.</h2>
            <p className="mt-6 max-w-xl text-primary-foreground/60">
              Seven kitchens, one shoreline, and produce that rarely travels further than the boat.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {restaurants.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <Link to="/dining/$slug" params={{ slug: r.slug }} className="group block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <h3 className="display text-4xl tracking-[0.1em]">{r.name}</h3>
                    <span className="text-[0.65rem] tracking-[0.24em] text-primary-foreground/50 uppercase">
                      {r.cuisine}
                    </span>
                  </div>
                  <p className="mt-3 text-primary-foreground/60">{r.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <CtaLink to="/dining" variant="light">
              Reserve a Table
            </CtaLink>
          </Reveal>
        </Shell>
      </section>

      {/* Wellness / Find your ritual */}
      <section className="py-28 md:py-36">
        <Shell>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Wellness</p>
              <h2 className="display mt-5 text-4xl text-foreground md:text-6xl">
                Return to yourself.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Stone pavilions in a palm grove. Massage, breathwork, movement and long silences —
                sequenced by therapists who ask how you slept before they begin.
              </p>
              <CtaLink to="/wellness" variant="outline" className="mt-10">
                Enter SOLARA Wellness
              </CtaLink>
            </Reveal>
            <ParallaxImage
              src={images.wellnessSpa}
              alt="A stone spa pavilion open to the jungle"
              className="aspect-[4/3]"
              width={1600}
              height={1100}
            />
          </div>

          <div className="mt-28 border-t border-border pt-20">
            <RitualFinder />
          </div>
        </Shell>
      </section>

      {/* A day at SOLARA — horizontal scroll */}
      <section className="border-y border-border bg-sand/25 py-24">
        <Shell>
          <SectionHeading eyebrow="A day at SOLARA" title="From first light to last." />
        </Shell>
        <div className="hide-scrollbar mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-6 md:px-10">
          {dayAtSolara.map((moment, i) => (
            <Reveal
              key={moment.time}
              delay={i * 0.05}
              className="w-[76vw] shrink-0 snap-start sm:w-[44vw] lg:w-[27vw]"
            >
              <div className="h-full border-t border-foreground/25 pt-6">
                <p className="display text-5xl text-accent">{moment.time}</p>
                <h3 className="display mt-5 text-3xl text-foreground">{moment.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{moment.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Explore + map */}
      <section className="py-28 md:py-36">
        <Shell>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              eyebrow="Explore"
              title="The island is yours to discover."
              intro="Reef, ridge, open water and the villages beyond. Forty ways to spend a day, all of them optional."
            />
            <CtaLink to="/experiences" variant="outline">
              All Experiences
            </CtaLink>
          </div>
          <div className="mt-20">
            <IslandMap />
          </div>
        </Shell>
      </section>

      {/* Why SOLARA */}
      <section className="bg-forest py-28 text-primary-foreground md:py-36">
        <Shell>
          <Reveal>
            <p className="eyebrow text-primary-foreground/50">Why SOLARA</p>
            <h2 className="display mt-5 text-4xl md:text-6xl">Not another resort.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-primary-foreground/15 md:grid-cols-2">
            <div className="bg-forest p-10 md:p-14">
              <p className="eyebrow text-primary-foreground/40">Ordinary luxury</p>
              <ul className="mt-8 space-y-5">
                {["Crowded", "Predictable", "One-size-fits-all", "Tourist experiences", "Standard rooms"].map(
                  (item, i) => (
                    <Reveal key={item} delay={i * 0.06}>
                      <li className="display text-3xl text-primary-foreground/30 line-through decoration-1">
                        {item}
                      </li>
                    </Reveal>
                  ),
                )}
              </ul>
            </div>
            <div className="bg-charcoal p-10 md:p-14">
              <p className="eyebrow text-champagne">SOLARA</p>
              <ul className="mt-8 space-y-5">
                {["Private", "Personal", "Curated", "Immersive", "Designed around you"].map(
                  (item, i) => (
                    <Reveal key={item} delay={i * 0.06}>
                      <li className="display text-3xl text-primary-foreground">{item}</li>
                    </Reveal>
                  ),
                )}
              </ul>
            </div>
          </div>
        </Shell>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-36">
        <Shell>
          <SectionHeading eyebrow="Guests" title="The memories speak for themselves." />
          <div className="mt-16 columns-1 gap-8 md:columns-2 lg:columns-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.07} className="mb-8 break-inside-avoid">
                <figure className="border border-border bg-card p-8">
                  <p className="text-[0.7rem] tracking-[0.2em] text-accent">
                    {"★".repeat(t.rating)}
                  </p>
                  <blockquote className="display mt-5 text-2xl leading-snug text-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {t.name} · {t.country} · {t.stay}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Offers */}
      <section className="border-t border-border py-28 md:py-36">
        <Shell>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Offers" title="Curated escapes." />
            <CtaLink to="/offers" variant="outline">
              All Packages
            </CtaLink>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {offers.map((offer, i) => (
              <Reveal key={offer.slug} delay={i * 0.09}>
                <div className="group h-full border border-border bg-card">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="eyebrow text-muted-foreground">{offer.nights} nights</p>
                    <h3 className="display mt-3 text-3xl text-foreground">{offer.name}</h3>
                    <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                      {offer.includes.map((inc) => (
                        <li key={inc}>— {inc}</li>
                      ))}
                    </ul>
                    <CtaLink to="/offers" variant="outline" className="mt-8">
                      Explore Package
                    </CtaLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      <CustomSections />



      {/* Final cinematic CTA */}
      <section className="relative flex h-[86vh] min-h-[520px] items-center justify-center overflow-hidden text-center">
        <img
          src={sunsetCta}
          alt="A yacht on a still ocean at sunset"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/45" />
        <Shell className="relative">
          <Reveal>
            <h2 className="display text-5xl text-primary-foreground md:text-8xl">
              Your island is waiting.
            </h2>
            <p className="mt-6 text-primary-foreground/75">Leave ordinary behind.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CtaLink to="/book">Plan Your Escape</CtaLink>
              <CtaLink to="/our-story" variant="light">
                Explore SOLARA
              </CtaLink>
            </div>
          </Reveal>
        </Shell>
      </section>
    </>
  );
}
