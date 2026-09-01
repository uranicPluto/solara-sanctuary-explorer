import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as villas, l as experiences, n as Route, x as treatments } from "./router-h4DHMmsX.mjs";
import { o as Shell, r as Reveal, t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/villas._slug-G0hfTUC4.js
var import_jsx_runtime = require_jsx_runtime();
function VillaDetail() {
	const { villa } = Route.useLoaderData();
	const others = villas.filter((v) => v.slug !== villa.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[82vh] min-h-[520px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: villa.image,
				alt: villa.name,
				className: "h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "absolute inset-x-0 bottom-0 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary-foreground/70",
						children: villa.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-4 text-5xl text-primary-foreground md:text-8xl",
						children: villa.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-primary-foreground/80",
						children: [
							villa.guests,
							" Guests · ",
							villa.bedrooms,
							" Bedroom",
							villa.bedrooms > 1 ? "s" : "",
							" ·",
							" ",
							villa.privatePool ? "Private Pool · " : "",
							villa.view,
							" View"
						]
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-16 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-4xl text-foreground md:text-5xl",
						children: villa.tagline
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-lg leading-relaxed text-muted-foreground",
						children: villa.description
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "mt-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: "Amenities"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid gap-y-3 sm:grid-cols-2",
							children: villa.amenities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-border py-2 text-sm text-foreground",
								children: a
							}, a))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-14 grid gap-6 sm:grid-cols-3",
						children: [
							{
								label: "Villa size",
								value: `${villa.size} m²`
							},
							{
								label: "To the beach",
								value: villa.distanceToBeach
							},
							{
								label: "To dining",
								value: villa.distanceToDining
							},
							{
								label: "Check-in",
								value: "From 14:00"
							},
							{
								label: "Check-out",
								value: "Until 12:00"
							},
							{
								label: "Availability",
								value: "Selected dates"
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
								children: item.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-foreground",
								children: item.value
							})]
						}, item.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "mt-16 grid gap-4 sm:grid-cols-2",
						children: villas.filter((v) => v.slug !== villa.slug).slice(0, 2).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: v.image,
							alt: `${villa.name} gallery`,
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover"
						}, v.slug))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit border border-border bg-card p-8 lg:sticky lg:top-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: "From"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "display mt-2 text-5xl text-foreground",
							children: ["$", villa.price.toLocaleString()]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "per night, taxes excluded"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/book",
								children: "Reserve This Villa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
								to: "/experiences",
								variant: "outline",
								children: "Take a Virtual Tour"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-2 border-t border-border pt-6 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Best rate guaranteed" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Flexible cancellation up to 14 days" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "24/7 personal concierge" })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-28 border-t border-border pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Recommended for your stay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-3",
					children: [[experiences[1], experiences[0]].map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/experiences/$slug",
						params: { slug: e.slug },
						className: "group border-t border-foreground/20 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display text-2xl text-foreground group-hover:text-accent",
							children: e.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: e.summary
						})]
					}, e.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wellness",
						className: "group border-t border-foreground/20 pt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display text-2xl text-foreground group-hover:text-accent",
							children: treatments[0].name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: treatments[0].description
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Other accommodation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-3",
					children: others.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/villas/$slug",
						params: { slug: v.slug },
						className: "group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[3/2] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: v.image,
								alt: v.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display mt-4 text-2xl text-foreground",
							children: v.name
						})]
					}, v.slug))
				})]
			})
		] })
	})] });
}
//#endregion
export { VillaDetail as component };
