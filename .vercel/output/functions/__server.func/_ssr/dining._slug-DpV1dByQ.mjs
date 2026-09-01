import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as Route$2 } from "./router-h4DHMmsX.mjs";
import { o as Shell, r as Reveal } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dining._slug-DpV1dByQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slots = [
	{
		time: "18:30",
		status: "Available"
	},
	{
		time: "19:00",
		status: "Available"
	},
	{
		time: "19:30",
		status: "Available"
	},
	{
		time: "20:00",
		status: "Limited"
	},
	{
		time: "20:30",
		status: "Available"
	},
	{
		time: "21:00",
		status: "Limited"
	}
];
var seating = [
	"No preference",
	"Ocean edge",
	"Inside",
	"Chef's counter",
	"Private alcove"
];
var occasions = [
	"None",
	"Birthday",
	"Anniversary",
	"Proposal",
	"Celebration"
];
function RestaurantDetail() {
	const { restaurant } = Route$2.useLoaderData();
	const [date, setDate] = (0, import_react.useState)("");
	const [time, setTime] = (0, import_react.useState)("19:30");
	const [guests, setGuests] = (0, import_react.useState)(2);
	const [seat, setSeat] = (0, import_react.useState)(seating[0]);
	const [occasion, setOccasion] = (0, import_react.useState)(occasions[0]);
	const [notes, setNotes] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[70vh] min-h-[440px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: restaurant.image,
				alt: restaurant.name,
				className: "h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/85 to-charcoal/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
				className: "absolute inset-x-0 bottom-0 pb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary-foreground/70",
					children: restaurant.cuisine
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-4 text-6xl tracking-[0.08em] text-primary-foreground md:text-8xl",
					children: restaurant.name
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-16 lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-foreground",
					children: restaurant.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-10 grid gap-6 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-muted-foreground",
								children: "Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm",
								children: restaurant.hours
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-muted-foreground",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm",
								children: restaurant.location
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-muted-foreground",
								children: "Kitchen"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm",
								children: restaurant.chef
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Signatures"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: restaurant.signatures.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "display border-b border-border pb-3 text-2xl",
							children: s
						}, s))
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "h-fit border border-border bg-card p-8 lg:sticky lg:top-28",
				onSubmit: async (e) => {
					e.preventDefault();
					if (!date) {
						toast.error("Choose a date for your table.");
						return;
					}
					const { data: userData } = await supabase.auth.getUser();
					if (!userData.user) {
						toast.error("Please sign in to request a table.");
						return;
					}
					const { error } = await supabase.from("dining_requests").insert({
						user_id: userData.user.id,
						restaurant_slug: restaurant.slug,
						restaurant_name: restaurant.name,
						booking_date: date,
						booking_time: time,
						party_size: guests
					});
					if (error) {
						toast.error("We couldn't send that request. Please try again.");
						return;
					}
					toast.success(`Table for ${guests} at ${restaurant.name}, ${date} at ${time}. Your concierge will confirm shortly.`);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Reserve a table"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display mt-3 text-3xl",
						children: restaurant.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-8 block text-sm",
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
							children: slots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setTime(slot.time),
								className: `border px-2 py-3 text-xs transition-colors ${time === slot.time ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-foreground/40"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: slot.time
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-[0.6rem] tracking-[0.14em] uppercase opacity-70",
									children: slot.status
								})]
							}, slot.time))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Guests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 1,
							max: 12,
							value: guests,
							onChange: (e) => setGuests(Number(e.target.value)),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Seating"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: seat,
							onChange: (e) => setSeat(e.target.value),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none",
							children: seating.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Occasion"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: occasion,
							onChange: (e) => setOccasion(e.target.value),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none",
							children: occasions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: o }, o))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-6 block text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-muted-foreground",
							children: "Special requests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							value: notes,
							onChange: (e) => setNotes(e.target.value),
							className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-8 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal",
						children: "Request Table"
					})
				]
			})]
		}) })
	})] });
}
//#endregion
export { RestaurantDetail as component };
