import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as images } from "./router-h4DHMmsX.mjs";
import { n as PageHero, o as Shell, r as Reveal } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sustainability-DqAYgXy6.js
var import_jsx_runtime = require_jsx_runtime();
var stories = [
	{
		title: "Light from the sky",
		body: "A solar field behind the ridge and battery storage under it carry the island through the night. The generators have not run in fourteen months."
	},
	{
		title: "A reef with a boundary",
		body: "Two square kilometres of water around SOLARA are closed to fishing. Our marine team counts it four times a year, and guests are welcome on the count."
	},
	{
		title: "Food that didn't fly",
		body: "The garden covers most of what SOL serves at breakfast. The rest comes from boats that were already going to sea."
	},
	{
		title: "Water in a circle",
		body: "Rain is caught, desalination runs on the solar surplus, and every drop of grey water returns to the gardens."
	},
	{
		title: "The people who were here first",
		body: "Four in five of our team come from the islands within an hour of us. The training academy runs year-round, whether we are hiring or not."
	}
];
function SustainabilityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: images.experienceNature,
		eyebrow: "Sustainability",
		title: "Luxury that leaves a lighter footprint."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-14",
				children: stories.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .06,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl text-foreground md:text-4xl",
						children: s.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-muted-foreground",
						children: s.body
					})]
				}, s.title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8 lg:sticky lg:top-28 lg:h-fit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.experienceOcean,
					alt: "The protected reef around the island",
					loading: "lazy",
					className: "aspect-[4/5] w-full object-cover"
				})
			})]
		}) })
	})] });
}
//#endregion
export { SustainabilityPage as component };
