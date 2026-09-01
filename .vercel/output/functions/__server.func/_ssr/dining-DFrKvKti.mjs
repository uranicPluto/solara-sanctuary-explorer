import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useContent } from "./use-content-DIKlyNrP.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as images } from "./router-h4DHMmsX.mjs";
import { a as SectionHeading, n as PageHero, o as Shell, r as Reveal, t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dining-DFrKvKti.js
var import_jsx_runtime = require_jsx_runtime();
var privateDining = [
	"Dinner on the sand, lanterns only",
	"A table set inside your villa",
	"Sunset dining on the west deck",
	"Chef's table beside the pass",
	"A yacht, anchored, for two"
];
function DiningPage() {
	const { restaurants } = useContent();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: images.diningAura,
			eyebrow: "Dine",
			title: "Taste the island.",
			intro: "Produce that rarely travels further than the boat."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24 md:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-24",
				children: restaurants.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: r.image,
							alt: r.name,
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: r.cuisine
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-4 text-5xl tracking-[0.08em] text-foreground",
							children: r.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground",
							children: r.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
									children: "Hours"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-foreground",
									children: r.hours
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-foreground",
									children: r.location
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
									children: "Kitchen"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-sm text-foreground",
									children: r.chef
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/dining/$slug",
								params: { slug: r.slug },
								className: "inline-flex bg-primary px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal",
								children: "Reserve a Table"
							})
						})
					] })]
				}) }, r.slug))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal py-28 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary-foreground/50",
						children: "Private dining"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-5 text-4xl md:text-6xl",
						children: "Dinner, without an audience."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-primary-foreground/60",
						children: "Tell us where and when. We will bring the kitchen, the light and the wine list."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 space-y-4",
						children: privateDining.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-primary-foreground/15 pb-3 text-lg",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/portal",
						variant: "light",
						className: "mt-10",
						children: "Design Your Dinner"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.diningNocturne,
					alt: "A dark timber bar lit with bronze lanterns",
					loading: "lazy",
					className: "aspect-[4/5] w-full object-cover"
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Reservations",
				title: "Book a table before you arrive.",
				intro: "Choose a restaurant to see live availability, seating preferences and occasion notes."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: restaurants.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dining/$slug",
					params: { slug: r.slug },
					className: "border border-border bg-card p-8 transition-colors hover:border-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-3xl tracking-[0.08em] text-foreground",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: r.summary
					})]
				}, r.slug))
			})] })
		})
	] });
}
//#endregion
export { DiningPage as component };
