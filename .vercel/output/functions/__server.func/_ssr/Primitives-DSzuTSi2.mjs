import { i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as cn } from "./router-h4DHMmsX.mjs";
import { n as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Primitives-DSzuTSi2.js
var import_jsx_runtime = require_jsx_runtime();
/** Slow, cinematic fade-and-rise as content enters the viewport. */
function Reveal({ children, delay = 0, y = 28, className, once = true }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once,
			amount: .25
		},
		transition: {
			duration: 1.1,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
/** Word-by-word text reveal for editorial headlines. */
function RevealWords({ text, className, delay = 0 }) {
	const reduced = useReducedMotion();
	const words = text.split(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		children: words.map((word, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "inline-block",
				initial: reduced ? false : {
					y: "110%",
					opacity: 0
				},
				whileInView: {
					y: "0%",
					opacity: 1
				},
				viewport: {
					once: true,
					amount: .4
				},
				transition: {
					duration: 1.05,
					delay: delay + i * .055,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				children: [word, i < words.length - 1 ? "\xA0" : ""]
			})
		}, `${word}-${i}`))
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("eyebrow text-muted-foreground", className),
		children
	});
}
function SectionHeading({ eyebrow, title, intro, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: eyebrow }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display mt-5 text-4xl text-foreground md:text-6xl",
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground",
				children: intro
			}) : null
		]
	});
}
var buttonBase = "inline-flex items-center justify-center px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-all duration-500";
function CtaLink({ to, children, variant = "solid", className, params }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		params,
		className: cn(buttonBase, variant === "solid" && "bg-primary text-primary-foreground hover:bg-charcoal", variant === "outline" && "border border-foreground/25 text-foreground hover:bg-foreground hover:text-background", variant === "light" && "border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground", className),
		children
	});
}
function PageHero({ image, eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex h-[68vh] min-h-[440px] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				"aria-hidden": true,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1500px] px-5 pb-16 md:px-10 md:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-primary-foreground/70",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-5 max-w-3xl text-5xl text-primary-foreground md:text-7xl",
						children: title
					}),
					intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base text-primary-foreground/75",
						children: intro
					}) : null
				]
			})
		]
	});
}
function Shell({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-[1500px] px-5 md:px-10", className),
		children
	});
}
//#endregion
export { SectionHeading as a, RevealWords as i, PageHero as n, Shell as o, Reveal as r, CtaLink as t };
