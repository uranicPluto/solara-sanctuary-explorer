import { r as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as mapLocations } from "./router-h4DHMmsX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/IslandMap-BM2pm-Lu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var island_map_default = "/assets/island-map-BSGswZjh.jpg";
function IslandMap() {
	const [active, setActive] = (0, import_react.useState)(mapLocations[0].id);
	const location = mapLocations.find((l) => l.id === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square overflow-hidden bg-sand/40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: island_map_default,
				alt: "Illustrated map of the SOLARA private island",
				loading: "lazy",
				className: "h-full w-full object-cover"
			}), mapLocations.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onMouseEnter: () => setActive(loc.id),
				onFocus: () => setActive(loc.id),
				onClick: () => setActive(loc.id),
				"aria-label": loc.name,
				style: {
					left: `${loc.x}%`,
					top: `${loc.y}%`
				},
				className: `absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500 ${active === loc.id ? "h-4 w-4 border-accent bg-accent" : "h-2.5 w-2.5 border-foreground/50 bg-background/80 hover:h-4 hover:w-4"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: loc.name
				})
			}, loc.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border pt-8 lg:border-none lg:pt-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Explore the resort"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "display mt-4 text-4xl text-foreground",
					children: location.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: location.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: mapLocations.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(loc.id),
						className: `w-full border-b border-border py-2 text-left text-sm transition-colors ${active === loc.id ? "text-accent" : "text-muted-foreground hover:text-foreground"}`,
						children: loc.name
					}) }, loc.id))
				})
			]
		})]
	});
}
//#endregion
export { IslandMap as t };
