import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useScroll, n as useReducedMotion, r as useTransform } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ParallaxImage-CUdQ3jvV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_island_default = "/assets/hero-island-FVbdc1lf.jpg";
function ParallaxImage({ src, alt, className, imgClassName, distance = 60, priority = false, width, height }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `overflow-hidden ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
			src,
			alt,
			width,
			height,
			loading: priority ? "eager" : "lazy",
			style: reduced ? {} : { y },
			className: `h-full w-full scale-110 object-cover ${imgClassName ?? ""}`
		})
	});
}
//#endregion
export { hero_island_default as n, ParallaxImage as t };
