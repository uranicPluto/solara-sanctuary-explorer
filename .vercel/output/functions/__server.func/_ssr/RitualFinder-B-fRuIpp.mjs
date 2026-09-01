import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as rituals, m as ritualOptions } from "./router-h4DHMmsX.mjs";
import { o as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RitualFinder-B-fRuIpp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RitualFinder() {
	const [intent, setIntent] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-14 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: "Find your ritual"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display mt-5 text-4xl text-foreground md:text-6xl",
				children: "What do you need right now?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: ritualOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setIntent(option),
					className: `border px-7 py-3 text-[0.65rem] tracking-[0.24em] uppercase transition-all duration-500 ${intent === option ? "border-accent bg-accent text-accent-foreground" : "border-foreground/20 text-foreground hover:border-foreground/60"}`,
					children: option
				}, option))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "min-h-[320px] border-t border-border pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				children: intent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -12
					},
					transition: {
						duration: .7,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-accent",
							children: "Your SOLARA ritual"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "display mt-4 text-3xl text-foreground",
							children: [
								"A day designed to ",
								intent.toLowerCase(),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 space-y-0",
							children: rituals[intent].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[80px_1fr] gap-4 border-b border-border py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm tracking-[0.14em] text-muted-foreground",
									children: step.time
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: step.label
								})]
							}, step.time))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/book",
							className: "mt-10",
							children: "Build My Stay"
						})
					]
				}, intent) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					className: "max-w-sm text-muted-foreground",
					children: "Choose a word. We will shape a day around it — treatments, movement, dining and quiet, in the order your body wants them."
				}, "empty")
			})
		})]
	});
}
//#endregion
export { RitualFinder as t };
