import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VillaCard-zhzXIcGO.js
var import_jsx_runtime = require_jsx_runtime();
function VillaCard({ villa }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/villas/$slug",
		params: { slug: villa.slug },
		className: "group block",
		"aria-label": `Explore ${villa.name}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden bg-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: villa.image,
					alt: villa.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-primary-foreground/70",
							children: villa.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display mt-2 text-3xl text-primary-foreground",
							children: villa.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-32 group-hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary-foreground/80",
								children: villa.tagline
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-4 inline-block border-b border-champagne pb-1 text-[0.65rem] tracking-[0.24em] text-champagne uppercase",
								children: "Explore Villa"
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-baseline justify-between border-t border-border pt-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-muted-foreground",
				children: [
					villa.guests,
					" guests · ",
					villa.bedrooms,
					" bed · ",
					villa.view,
					" view"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-foreground",
				children: [
					"from $",
					villa.price.toLocaleString(),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: " / night"
					})
				]
			})]
		})]
	});
}
//#endregion
export { VillaCard as t };
