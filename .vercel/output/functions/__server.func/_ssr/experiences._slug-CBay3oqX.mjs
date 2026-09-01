import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as Route$1 } from "./router-h4DHMmsX.mjs";
import { o as Shell, r as Reveal, t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experiences._slug-CBay3oqX.js
var import_jsx_runtime = require_jsx_runtime();
function ExperienceDetail() {
	const { experience } = Route$1.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[76vh] min-h-[460px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: experience.image,
				alt: experience.name,
				className: "h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/85 to-charcoal/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "absolute inset-x-0 bottom-0 pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary-foreground/70",
					children: experience.category
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-4 text-5xl text-primary-foreground md:text-8xl",
					children: experience.name
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-[1.3fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-foreground",
					children: experience.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-12 grid gap-6 sm:grid-cols-3",
					children: [
						["Duration", experience.duration],
						["Difficulty", experience.difficulty],
						["Group size", experience.groupSize],
						["Location", experience.location],
						["Price", `$${experience.price} per guest`],
						["Availability", "Daily, weather permitting"]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow text-muted-foreground",
							children: label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-2 text-sm text-foreground",
							children: value
						})]
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "What to bring"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-muted-foreground",
						children: experience.bring.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", b] }, b))
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit border border-border bg-card p-8 lg:sticky lg:top-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "From"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "display mt-2 text-5xl",
						children: ["$", experience.price]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "per guest"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toast.success(`${experience.name} added to your stay.`),
						className: "mt-8 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal",
						children: "Add to My Stay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/book",
						variant: "outline",
						className: "mt-3 w-full",
						children: "Book with a Villa"
					})
				]
			})]
		}) })
	})] });
}
//#endregion
export { ExperienceDetail as component };
