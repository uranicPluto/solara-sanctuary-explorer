import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as images } from "./router-h4DHMmsX.mjs";
import { n as PageHero, o as Shell, r as Reveal } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destination-guide-CAmXk9bx.js
var import_jsx_runtime = require_jsx_runtime();
var articles = [
	{
		category: "Beaches",
		title: "The sandbar that appears at low tide",
		image: images.villaBeach,
		travel: "12 minutes by boat",
		best: "May to October",
		body: "For four hours a day there is an island here. It has no name, no shade and no one else on it. We will leave you with an umbrella and come back when you wave."
	},
	{
		category: "Culture",
		title: "Morning at the fish market",
		image: images.diningTide,
		travel: "35 minutes by boat",
		best: "Year round, before 08:00",
		body: "The mainland market has been in the same place for two hundred years. Go with one of our chefs, and go early."
	},
	{
		category: "Nature",
		title: "The ridge before the rain",
		image: images.experienceNature,
		travel: "On the island",
		best: "November to February",
		body: "When the monsoon builds, the interior turns a green that photographs badly and stays with you anyway."
	},
	{
		category: "Food",
		title: "Where the island eats",
		image: images.diningSol,
		travel: "40 minutes by boat",
		best: "Year round",
		body: "Three tables, one grill, no menu. Ask for whatever the boats brought and trust the answer."
	}
];
function GuidePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: images.experienceOcean,
		eyebrow: "Island guide",
		title: "Beyond the resort.",
		intro: "The archipelago, its people, and the hours worth leaving the island for."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-20",
			children: articles.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: a.image,
					alt: a.title,
					loading: "lazy",
					className: "aspect-[4/3] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: a.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-4 text-4xl text-foreground md:text-5xl",
						children: a.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: a.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-8 flex flex-wrap gap-10 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow text-muted-foreground",
							children: "Travel time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: a.travel
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow text-muted-foreground",
							children: "Best time"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: a.best
						})] })]
					})
				] })]
			}) }, a.title))
		}) })
	})] });
}
//#endregion
export { GuidePage as component };
