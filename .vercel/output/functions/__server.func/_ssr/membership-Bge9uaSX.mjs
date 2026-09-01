import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { u as images } from "./router-h4DHMmsX.mjs";
import { n as PageHero, o as Shell, r as Reveal } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/membership-Bge9uaSX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	"Priority reservations across every season",
	"Villa upgrades whenever the island allows",
	"Private experiences arranged before arrival",
	"Complimentary airport and seaplane transfers",
	"Early access to new villas and retreats",
	"A personal concierge who stays with you",
	"Invitations to members-only island evenings"
];
function MembershipPage() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		note: ""
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		image: images.villaSunset,
		eyebrow: "Membership",
		title: "SOLARA Privé.",
		intro: "For the guests who keep coming back."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-4xl text-foreground md:text-5xl",
				children: "Membership is by invitation, or by request."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 space-y-4",
				children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-border pb-3 text-lg text-foreground",
					children: b
				}, b))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "h-fit border border-border bg-card p-8",
				onSubmit: async (e) => {
					e.preventDefault();
					if (!form.email.includes("@") || form.name.trim().length < 2) {
						toast.error("Please add your name and an email we can reply to.");
						return;
					}
					const { error } = await supabase.from("membership_requests").insert({
						full_name: form.name.trim(),
						email: form.email.trim(),
						note: form.note || null
					});
					if (error) {
						toast.error("We couldn't send that. Please try again.");
						return;
					}
					setForm({
						name: "",
						email: "",
						note: ""
					});
					toast.success("Request received. Our membership office will be in touch.");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Request membership"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-8 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value: form.email,
							onChange: (e) => setForm({
								...form,
								email: e.target.value
							}),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Tell us about your travel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							value: form.note,
							onChange: (e) => setForm({
								...form,
								note: e.target.value
							}),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-8 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal",
						children: "Request Membership"
					})
				]
			})]
		}) })
	})] });
}
//#endregion
export { MembershipPage as component };
