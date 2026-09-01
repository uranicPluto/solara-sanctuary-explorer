import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as villas, h as rituals, l as experiences } from "./router-h4DHMmsX.mjs";
import { o as Shell, r as Reveal, t as CtaLink } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portal-C-WwD9S-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PortalPage() {
	const navigate = useNavigate();
	const qc = useQueryClient();
	const [email, setEmail] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [isStaff, setIsStaff] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(async ({ data }) => {
			setEmail(data.user?.email ?? "");
			const meta = data.user?.user_metadata;
			setName(meta?.full_name ?? meta?.name ?? "");
			if (data.user) {
				const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", data.user.id);
				setIsStaff((roles ?? []).some((r) => r.role === "admin" || r.role === "staff"));
			}
		});
	}, []);
	const { data: reservations } = useQuery({
		queryKey: ["portal", "reservations"],
		queryFn: async () => {
			const { data, error } = await supabase.from("reservations").select("*").order("arrival", { ascending: true });
			if (error) throw error;
			return data;
		}
	});
	const { data: spa } = useQuery({
		queryKey: ["portal", "spa"],
		queryFn: async () => {
			const { data, error } = await supabase.from("spa_bookings").select("*").order("booking_date");
			if (error) throw error;
			return data;
		}
	});
	const itinerary = rituals["Restore"] ?? [];
	const saved = villas.slice(0, 2);
	const suggested = experiences.slice(0, 3);
	async function cancelReservation(id) {
		await supabase.from("reservations").update({ status: "cancelled" }).eq("id", id);
		qc.invalidateQueries({ queryKey: ["portal", "reservations"] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Guest portal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-4 text-5xl text-foreground md:text-7xl",
					children: name ? `Welcome, ${name.split(" ")[0]}.` : "Welcome back."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: email
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [isStaff && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin",
					className: "border border-border px-6 py-3 text-[0.65rem] tracking-[0.24em] uppercase transition-colors hover:border-foreground/40",
					children: "Admin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: async () => {
						await qc.cancelQueries();
						qc.clear();
						await supabase.auth.signOut();
						navigate({
							to: "/",
							replace: true
						});
					},
					className: "border border-border px-6 py-3 text-[0.65rem] tracking-[0.24em] uppercase transition-colors hover:border-foreground/40",
					children: "Sign Out"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl text-foreground",
						children: "Your reservations"
					}), reservations?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: reservations.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border border-border bg-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "display text-2xl",
										children: r.villa_name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase",
										children: r.status
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: [
										r.arrival,
										" → ",
										r.departure,
										" · ",
										r.guests,
										" guests ·",
										" ",
										r.confirmation_code
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm",
									children: ["$", Number(r.total_amount).toLocaleString()]
								}),
								r.status !== "cancelled" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => void cancelReservation(r.id),
									className: "mt-4 text-xs tracking-[0.2em] text-muted-foreground uppercase underline-offset-4 hover:underline",
									children: "Cancel"
								})
							]
						}, r.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 border border-border bg-card p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "You have no reservation yet. When you book, your villa, transfers and itinerary will appear here."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
							to: "/book",
							className: "mt-8",
							children: "Plan Your Escape"
						})]
					})] }),
					spa && spa.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl text-foreground",
						children: "Spa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: spa.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between border-b border-border pb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.treatment_name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm text-muted-foreground",
								children: [
									s.booking_date,
									" · ",
									s.booking_time
								]
							})]
						}, s.id))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl text-foreground",
						children: "A suggested day"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 space-y-4",
						children: itinerary.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-8 border-b border-border pb-4 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-16 text-sm text-muted-foreground",
								children: item.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })]
						}, item.time))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl text-foreground",
						children: "Chosen for you"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-6 sm:grid-cols-3",
						children: suggested.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: e.image,
								alt: e.name,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display mt-3 text-2xl",
								children: e.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"$",
									e.price,
									" per guest"
								]
							})
						] }, e.slug))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-card p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Saved villas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-4",
						children: saved.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: v.image,
								alt: v.name,
								className: "h-16 w-20 object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground",
								children: v.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"$",
									v.price.toLocaleString(),
									" / night"
								]
							})] })]
						}, v.slug))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-sand/40 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: "Your concierge"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "display mt-3 text-3xl",
							children: "Amara"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "Available around the clock, on the island and before you arrive."
						})
					]
				})]
			})]
		})] })
	});
}
//#endregion
export { PortalPage as component };
