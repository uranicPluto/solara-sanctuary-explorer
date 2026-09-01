import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as useContent } from "./use-content-DIKlyNrP.mjs";
import { S as villa_ocean_default } from "./router-h4DHMmsX.mjs";
import { n as PageHero, o as Shell, r as Reveal } from "./Primitives-DSzuTSi2.mjs";
import { t as IslandMap } from "./IslandMap-BM2pm-Lu.mjs";
import { t as VillaCard } from "./VillaCard-zhzXIcGO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stay-agt7GRWM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var views = [
	"Any view",
	"Ocean",
	"Beach",
	"Sunset",
	"Jungle"
];
function StayPage() {
	const [guests, setGuests] = (0, import_react.useState)(1);
	const [bedrooms, setBedrooms] = (0, import_react.useState)(0);
	const [maxPrice, setMaxPrice] = (0, import_react.useState)(4e3);
	const [view, setView] = (0, import_react.useState)("Any view");
	const [pool, setPool] = (0, import_react.useState)(false);
	const [beach, setBeach] = (0, import_react.useState)(false);
	const { villas } = useContent();
	const filtered = (0, import_react.useMemo)(() => villas.filter((v) => v.guests >= guests && v.bedrooms >= bedrooms && v.price <= maxPrice && (view === "Any view" || v.view === view) && (!pool || v.privatePool) && (!beach || v.beachAccess)), [
		villas,
		guests,
		bedrooms,
		maxPrice,
		view,
		pool,
		beach
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: villa_ocean_default,
			eyebrow: "Stay",
			title: "Stay somewhere extraordinary.",
			intro: "Private spaces designed around the rhythm of the island."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 border border-border bg-card p-8 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Guests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 1,
							max: 8,
							value: guests,
							onChange: (e) => setGuests(Number(e.target.value)),
							className: "border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Bedrooms"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 0,
							max: 4,
							value: bedrooms,
							onChange: (e) => setBedrooms(Number(e.target.value)),
							className: "border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "View"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: view,
							onChange: (e) => setView(e.target.value),
							className: "border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none",
							children: views.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: v,
								children: v
							}, v))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "eyebrow text-muted-foreground",
							children: [
								"Up to $",
								maxPrice.toLocaleString(),
								" / night"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 1e3,
							max: 4e3,
							step: 50,
							value: maxPrice,
							onChange: (e) => setMaxPrice(Number(e.target.value)),
							className: "accent-accent"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-6 md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: pool,
									onChange: (e) => setPool(e.target.checked),
									className: "accent-accent"
								}), "Private pool"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: beach,
									onChange: (e) => setBeach(e.target.checked),
									className: "accent-accent"
								}), "Beach access"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-auto text-sm text-muted-foreground",
								children: [
									filtered.length,
									" of ",
									villas.length,
									" accommodations"
								]
							})
						]
					})
				]
			}), filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-20 border border-border bg-card p-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-4xl text-foreground",
					children: "The tide is changing."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Nothing matches those preferences right now. Try widening your journey."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((villa, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VillaCard, { villa })
				}, villa.slug))
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslandMap, {}) })
		})
	] });
}
//#endregion
export { StayPage as component };
