import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { b as therapists, g as spaAddOns, u as images, x as treatments } from "./router-h4DHMmsX.mjs";
import { a as SectionHeading, n as PageHero, o as Shell, r as Reveal } from "./Primitives-DSzuTSi2.mjs";
import { t as RitualFinder } from "./RitualFinder-B-fRuIpp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wellness-Bihrw3ac.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pillars = [
	{
		name: "Spa",
		note: "Six treatment pavilions, one couples suite."
	},
	{
		name: "Movement",
		note: "Yoga, mat pilates, strength and ocean swimming."
	},
	{
		name: "Stillness",
		note: "Meditation, breathwork and guided sleep."
	},
	{
		name: "Retreats",
		note: "Three, five and seven-night wellness journeys."
	}
];
function WellnessPage() {
	const [treatment, setTreatment] = (0, import_react.useState)(treatments[0].slug);
	const [therapist, setTherapist] = (0, import_react.useState)(therapists[0]);
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("11:00");
	const [addOns, setAddOns] = (0, import_react.useState)([]);
	const selected = treatments.find((t) => t.slug === treatment);
	const total = selected.price + spaAddOns.filter((a) => addOns.includes(a.id)).reduce((s, a) => s + a.price, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			image: images.wellnessSpa,
			eyebrow: "Wellness",
			title: "Return to yourself.",
			intro: "Stone pavilions in a palm grove, and nothing at all to be on time for."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-4",
				children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .07,
					className: "border-t border-foreground/20 pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl text-foreground",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: p.note
					})]
				}, p.name))
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-sand/25 py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RitualFinder, {}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Spa booking",
				title: "Reserve a treatment.",
				intro: "Choose a ritual, a therapist and a time. Availability shown is live for the coming week."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: treatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTreatment(t.slug),
						className: `w-full border p-6 text-left transition-colors ${treatment === t.slug ? "border-accent bg-card" : "border-border hover:border-foreground/40"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display text-2xl text-foreground",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									t.duration,
									" min · $",
									t.price
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: t.description
						})]
					}, t.slug))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "h-fit border border-border bg-card p-8 lg:sticky lg:top-28",
					onSubmit: async (e) => {
						e.preventDefault();
						if (!date) {
							toast.error("Choose a date for your treatment.");
							return;
						}
						const { data: userData } = await supabase.auth.getUser();
						if (!userData.user) {
							toast.error("Please sign in to reserve a treatment.");
							return;
						}
						const addOnItems = addOns.map((id) => spaAddOns.find((a) => a.id === id) ?? {
							id,
							label: id,
							price: 0
						});
						const { error } = await supabase.from("spa_bookings").insert({
							user_id: userData.user.id,
							treatment_slug: selected.slug,
							treatment_name: selected.name,
							therapist,
							booking_date: date,
							booking_time: time,
							add_ons: addOnItems,
							total_amount: selected.price + addOnItems.reduce((sum, a) => sum + (a.price ?? 0), 0)
						});
						if (error) {
							toast.error("We couldn't save that booking. Please try again.");
							return;
						}
						toast.success(`${selected.name} reserved for ${date} at ${time}.`);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: "Your treatment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "display mt-3 text-3xl",
							children: selected.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-8 block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Therapist"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: therapist,
								onChange: (e) => setTherapist(e.target.value),
								className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none",
								children: therapists.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t }, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-6 block text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: date,
								onChange: (e) => setDate(e.target.value),
								className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Time"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid grid-cols-3 gap-2",
								children: [
									"09:00",
									"11:00",
									"13:30",
									"15:00",
									"16:30",
									"18:00"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setTime(t),
									className: `border px-2 py-3 text-xs transition-colors ${time === t ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-foreground/40"}`,
									children: t
								}, t))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: "eyebrow text-muted-foreground",
								children: "Add-ons"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 space-y-3",
								children: spaAddOns.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: addOns.includes(a.id),
											onChange: (e) => setAddOns((prev) => e.target.checked ? [...prev, a.id] : prev.filter((x) => x !== a.id)),
											className: "accent-accent"
										}), a.label]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: ["+$", a.price]
									})]
								}, a.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-baseline justify-between border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow text-muted-foreground",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "display text-3xl",
								children: ["$", total]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-6 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal",
							children: "Reserve Treatment"
						})
					]
				})]
			})] })
		})
	] });
}
//#endregion
export { WellnessPage as component };
