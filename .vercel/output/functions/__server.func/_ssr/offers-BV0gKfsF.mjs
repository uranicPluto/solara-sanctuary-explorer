import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as offers, u as images } from "./router-h4DHMmsX.mjs";
import { n as PageHero, o as Shell, r as Reveal, t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offers-BV0gKfsF.js
var import_jsx_runtime = require_jsx_runtime();
function OffersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: images.villaSunset,
		eyebrow: "Offers",
		title: "Curated escapes.",
		intro: "Journeys shaped around a single intention."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-20",
			children: offers.map((offer, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: offer.image,
						alt: offer.name,
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow text-muted-foreground",
						children: [offer.nights, " nights"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-4 text-4xl text-foreground md:text-6xl",
						children: offer.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-3",
						children: offer.includes.map((inc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-b border-border pb-3 text-lg text-foreground",
							children: inc
						}, inc))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/book",
						className: "mt-10",
						children: "Explore Package"
					})
				] })]
			}) }, offer.slug))
		}) })
	})] });
}
//#endregion
export { OffersPage as component };
