import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useContent } from "./use-content-DIKlyNrP.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as experienceCategories, u as images } from "./router-h4DHMmsX.mjs";
import { a as SectionHeading, n as PageHero, o as Shell, r as Reveal } from "./Primitives-DSzuTSi2.mjs";
import { t as IslandMap } from "./IslandMap-BM2pm-Lu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experiences-DFkKO_Hq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tourStops = [
	"Lobby",
	"Villa",
	"Beach",
	"Pool",
	"Restaurant",
	"Spa",
	"Gym",
	"Marina"
];
function ExperiencesPage() {
	const { experiences } = useContent();
	const [category, setCategory] = (0, import_react.useState)("All");
	const filtered = category === "All" ? experiences : experiences.filter((e) => e.category === category);
	const [stop, setStop] = (0, import_react.useState)(tourStops[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: images.experienceOcean,
			eyebrow: "Explore",
			title: "The island is yours to discover.",
			intro: "Reef, ridge, open water and the villages beyond."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-4",
				children: experienceCategories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setCategory(cat.name),
						className: "group block w-full text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[3/4] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cat.image,
									alt: cat.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display mt-5 text-3xl text-foreground group-hover:text-accent",
								children: cat.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1 text-sm text-muted-foreground",
								children: cat.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
							})
						]
					})
				}, cat.name))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Bookable",
					title: "Signature experiences."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						"All",
						"Ocean",
						"Nature",
						"Adventure",
						"Culture"
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setCategory(c),
						className: `border px-5 py-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${category === c ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-foreground/40"}`,
						children: c
					}, c))
				})]
			}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-16 text-muted-foreground",
				children: "Nothing scheduled in this category right now — your concierge can arrange it privately."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/experiences/$slug",
						params: { slug: e.slug },
						className: "group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/3] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: e.image,
									alt: e.name,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-baseline justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display text-3xl text-foreground",
									children: e.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: ["$", e.price]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: e.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
								children: [
									e.duration,
									" · ",
									e.difficulty,
									" · ",
									e.groupSize
								]
							})
						]
					})
				}, e.slug))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-sand/25 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslandMap, {}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal py-24 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary-foreground/50",
						children: "Virtual tour"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-5 text-4xl md:text-6xl",
						children: "See SOLARA before you arrive."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-primary-foreground/60",
						children: "Move through the island one space at a time. Every view is the real thing, photographed at the hour it looks best."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: tourStops.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStop(s),
							className: `border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase transition-colors ${stop === s ? "border-champagne text-champagne" : "border-primary-foreground/30 text-primary-foreground/60 hover:border-primary-foreground/70"}`,
							children: s
						}, s))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[16/10] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: stop === "Spa" ? images.wellnessSpa : stop === "Restaurant" ? images.diningAura : stop === "Marina" ? images.sunsetCta : stop === "Beach" ? images.villaBeach : stop === "Villa" ? images.villaOcean : images.villaResidence,
						alt: `Virtual tour: ${stop}`,
						loading: "lazy",
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute bottom-5 left-5 border border-primary-foreground/50 px-5 py-2 text-[0.62rem] tracking-[0.24em] text-primary-foreground uppercase",
						children: ["Enter Virtual Tour — ", stop]
					})]
				})]
			}) })
		})
	] });
}
//#endregion
export { ExperiencesPage as component };
