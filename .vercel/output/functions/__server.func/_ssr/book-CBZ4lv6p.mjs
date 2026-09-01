import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as villas, o as bookableExtras, u as images } from "./router-h4DHMmsX.mjs";
import { o as Shell } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-CBZ4lv6p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	"Dates",
	"Villa",
	"Experiences",
	"Details",
	"Review"
];
function nightsBetween(from, to) {
	if (!from || !to) return 0;
	const ms = new Date(to).getTime() - new Date(from).getTime();
	return Math.max(0, Math.round(ms / 864e5));
}
function BookPage() {
	const navigate = useNavigate();
	const [step, setStep] = (0, import_react.useState)(0);
	const [arrival, setArrival] = (0, import_react.useState)("");
	const [departure, setDeparture] = (0, import_react.useState)("");
	const [guests, setGuests] = (0, import_react.useState)(2);
	const [villaSlug, setVillaSlug] = (0, import_react.useState)(null);
	const [extras, setExtras] = (0, import_react.useState)([]);
	const [details, setDetails] = (0, import_react.useState)({
		name: "",
		email: "",
		requests: ""
	});
	const [confirmed, setConfirmed] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const nights = nightsBetween(arrival, departure);
	const villa = villas.find((v) => v.slug === villaSlug) ?? null;
	const eligible = (0, import_react.useMemo)(() => villas.filter((v) => v.guests >= guests), [guests]);
	const extrasTotal = extras.reduce((sum, id) => sum + (bookableExtras.find((e) => e.id === id)?.price ?? 0), 0);
	const roomTotal = (villa?.price ?? 0) * nights;
	const total = roomTotal + extrasTotal;
	const canContinue = [
		nights > 0,
		Boolean(villa),
		true,
		details.name.trim().length > 1 && details.email.includes("@"),
		true
	][step];
	async function submit() {
		if (!villa) return;
		setSaving(true);
		try {
			const { data: userData } = await supabase.auth.getUser();
			if (!userData.user) {
				toast.error("Please sign in to complete your reservation.");
				navigate({ to: "/auth" });
				return;
			}
			const { data, error } = await supabase.from("reservations").insert({
				user_id: userData.user.id,
				guest_name: details.name,
				guest_email: details.email,
				villa_slug: villa.slug,
				villa_name: villa.name,
				arrival,
				departure,
				guests,
				extras: extras.map((id) => bookableExtras.find((e) => e.id === id) ?? {
					id,
					label: id,
					price: 0
				}),
				requests: details.requests || null,
				total_amount: total
			}).select("confirmation_code").single();
			if (error) throw error;
			setConfirmed(data.confirmation_code);
			toast.success("Reservation requested.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "We couldn't save that reservation.");
		} finally {
			setSaving(false);
		}
	}
	if (confirmed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-screen items-center justify-center px-6 py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-lg text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Reservation requested"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-5 text-5xl text-foreground md:text-7xl",
					children: "We'll see you soon."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-muted-foreground",
					children: [
						"Your request for ",
						villa?.name,
						" is with our reservations team. Confirmation number",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: confirmed
						}),
						" — a note will reach",
						" ",
						details.email,
						" within the hour."
					]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-36 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: "Reservations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-4 text-5xl text-foreground md:text-7xl",
				children: "Plan your escape."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-5",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `text-[0.65rem] tracking-[0.24em] uppercase ${i === step ? "text-accent" : i < step ? "text-foreground" : "text-muted-foreground"}`,
					children: [
						String(i + 1).padStart(2, "0"),
						" — ",
						s
					]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-16 lg:grid-cols-[1.5fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Arrival"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: arrival,
									onChange: (e) => setArrival(e.target.value),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Departure"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									value: departure,
									onChange: (e) => setDeparture(e.target.value),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Guests"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									min: 1,
									max: 8,
									value: guests,
									onChange: (e) => setGuests(Number(e.target.value)),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "self-end text-sm text-muted-foreground",
								children: nights > 0 ? `${nights} nights on the island.` : "Minimum stay: two nights."
							})
						]
					}),
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-5",
						children: eligible.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setVillaSlug(v.slug),
							className: `flex w-full gap-6 border p-4 text-left transition-colors ${villaSlug === v.slug ? "border-accent" : "border-border hover:border-foreground/40"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: v.image,
								alt: v.name,
								className: "h-28 w-40 shrink-0 object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display text-2xl text-foreground",
								children: v.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									"Sleeps ",
									v.guests,
									" · $",
									v.price.toLocaleString(),
									" per night"
								]
							})] })]
						}, v.slug))
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: bookableExtras.map((x) => {
							const on = extras.includes(x.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setExtras(on ? extras.filter((e) => e !== x.id) : [...extras, x.id]),
								className: `border p-5 text-left transition-colors ${on ? "border-accent" : "border-border hover:border-foreground/40"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground",
									children: x.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: ["$", x.price]
								})]
							}, x.id);
						})
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-md space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: details.name,
									onChange: (e) => setDetails({
										...details,
										name: e.target.value
									}),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: details.email,
									onChange: (e) => setDetails({
										...details,
										email: e.target.value
									}),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Anything we should know"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									rows: 4,
									value: details.requests,
									onChange: (e) => setDetails({
										...details,
										requests: e.target.value
									}),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							})
						]
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "space-y-4",
						children: [
							["Dates", `${arrival} → ${departure} (${nights} nights)`],
							["Guests", String(guests)],
							["Villa", villa?.name ?? "—"],
							["Experiences", extras.length ? `${extras.length} added` : "None"],
							["Guest", `${details.name} · ${details.email}`]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-b border-border pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-muted-foreground",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-sm text-foreground",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 flex gap-3",
						children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep(step - 1),
							className: "border border-border px-8 py-4 text-[0.65rem] tracking-[0.24em] uppercase hover:border-foreground/40",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: !canContinue || saving,
							onClick: () => {
								if (step === steps.length - 1) submit();
								else setStep(step + 1);
							},
							className: "bg-primary px-10 py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal disabled:opacity-40",
							children: step === steps.length - 1 ? saving ? "Reserving…" : "Confirm Reservation" : "Continue"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit border border-border bg-card lg:sticky lg:top-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: villa?.image ?? images.villaSunset,
						alt: villa?.name ?? "SOLARA",
						className: "aspect-[4/3] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-muted-foreground",
								children: "Your stay"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display mt-3 text-3xl",
								children: villa?.name ?? "Choose a villa"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Nights"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: nights })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Accommodation"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["$", roomTotal.toLocaleString()] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Experiences"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["$", extrasTotal.toLocaleString()] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between border-t border-border pt-3 text-base",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: ["$", total.toLocaleString()] })]
									})
								]
							})
						]
					})]
				})]
			})
		] })
	});
}
//#endregion
export { BookPage as component };
