import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as images } from "./router-h4DHMmsX.mjs";
import { a as SectionHeading, n as PageHero, o as Shell, r as Reveal, t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
import { n as hero_island_default, t as ParallaxImage } from "./ParallaxImage-CUdQ3jvV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/our-story-gJqNiBv3.js
var import_jsx_runtime = require_jsx_runtime();
function StoryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: hero_island_default,
			eyebrow: "Our story",
			title: "A world away from ordinary.",
			intro: "Where the ocean slows time."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-3xl leading-snug text-foreground md:text-4xl",
						children: "SOLARA began with a rule: nothing on the island may be taller than the trees, and nothing may be louder than the water."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-muted-foreground",
						children: "What followed was seven years of slow building. Twenty-four villas placed where they would disturb least. A marine reserve drawn around the reef before the first foundation was poured. A staff recruited from the islands nearby, most of whom have been here since the beginning."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground",
						children: "We do not measure success in occupancy. We measure it in guests who return, and in a reef that is healthier every year we count it."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
					src: images.experienceNature,
					alt: "Jungle interior of the island",
					className: "aspect-[4/5]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
					src: images.villaResidence,
					alt: "A private residence at dusk",
					className: "aspect-[4/5] md:mt-20"
				})]
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-sand/25 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The four pillars",
					title: "Stay. Dine. Wellness. Explore.",
					intro: "Everything on the island connects to something else. A villa suggests a dinner; a dinner suggests a morning on the reef."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-4",
					children: [
						{
							title: "Stay",
							body: "Twenty-four private villas, suites and residences."
						},
						{
							title: "Dine",
							body: "Seven kitchens and a private dining team."
						},
						{
							title: "Wellness",
							body: "Twelve signature rituals and daily movement."
						},
						{
							title: "Explore",
							body: "Forty island and ocean experiences."
						}
					].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * .07,
						className: "border-t border-foreground/20 pt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display text-3xl",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: p.body
						})]
					}, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/book",
						children: "Plan Your Escape"
					})
				})
			] })
		})
	] });
}
//#endregion
export { StoryPage as component };
