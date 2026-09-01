import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime, r as useQueryClient, t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { n as useOverrides } from "./use-content-DIKlyNrP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { C as villas, l as experiences, p as restaurants, u as images } from "./router-h4DHMmsX.mjs";
import { o as Shell } from "./Primitives-DSzuTSi2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-q6hdcIEM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tabs = [
	"Reservations",
	"Spa",
	"Dining",
	"Membership",
	"Content",
	"Images"
];
function useIsStaff() {
	const [state, setState] = (0, import_react.useState)("loading");
	(0, import_react.useEffect)(() => {
		(async () => {
			const { data: userData } = await supabase.auth.getUser();
			if (!userData.user) return setState("no");
			const { data } = await supabase.from("user_roles").select("role").eq("user_id", userData.user.id);
			const staff = (data ?? []).some((r) => r.role === "admin" || r.role === "staff");
			setState(staff ? "yes" : "no");
		})();
	}, []);
	return state;
}
function AdminPage() {
	const staff = useIsStaff();
	const [tab, setTab] = (0, import_react.useState)("Reservations");
	if (staff === "loading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center text-muted-foreground",
		children: "Checking your access…"
	});
	if (staff === "no") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-6 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Restricted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-4 text-5xl",
					children: "Staff only."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "This area is reserved for the SOLARA team. Ask an administrator to grant your account the staff or admin role."
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-36 pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: "Resort management"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display mt-4 text-5xl text-foreground md:text-7xl",
				children: "Admin."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap gap-2 border-b border-border pb-5",
				children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(t),
					className: `border px-5 py-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${tab === t ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-foreground/40"}`,
					children: t
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [
					tab === "Reservations" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReservationsPanel, {}),
					tab === "Spa" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingsPanel, {
						table: "spa_bookings",
						columns: [
							"treatment_name",
							"therapist",
							"booking_date",
							"booking_time"
						]
					}),
					tab === "Dining" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingsPanel, {
						table: "dining_requests",
						columns: [
							"restaurant_name",
							"booking_date",
							"booking_time",
							"party_size"
						]
					}),
					tab === "Membership" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembershipPanel, {}),
					tab === "Content" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPanel, {}),
					tab === "Images" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagesPanel, {})
				]
			})
		] })
	});
}
var statuses = [
	"requested",
	"confirmed",
	"completed",
	"cancelled"
];
function StatusSelect({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => void onChange(e.target.value),
		className: "border border-border bg-transparent px-3 py-2 text-xs tracking-[0.16em] uppercase",
		children: statuses.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: s,
			children: s
		}, s))
	});
}
function ReservationsPanel() {
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["admin", "reservations"],
		queryFn: async () => {
			const { data, error } = await supabase.from("reservations").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	async function setStatus(id, status) {
		const { error } = await supabase.from("reservations").update({ status }).eq("id", id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Reservation updated.");
		qc.invalidateQueries({ queryKey: ["admin", "reservations"] });
	}
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "Loading…"
	});
	if (!data?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "No reservations yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[820px] text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-border text-left",
				children: [
					"Code",
					"Guest",
					"Villa",
					"Dates",
					"Guests",
					"Total",
					"Status"
				].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "eyebrow py-3 text-muted-foreground",
					children: h
				}, h))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-4",
						children: r.confirmation_code
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "py-4",
						children: [r.guest_name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted-foreground",
							children: r.guest_email
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-4",
						children: r.villa_name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "py-4",
						children: [
							r.arrival,
							" → ",
							r.departure
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-4",
						children: r.guests
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "py-4",
						children: ["$", Number(r.total_amount).toLocaleString()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "py-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusSelect, {
							value: r.status,
							onChange: (v) => setStatus(r.id, v)
						})
					})
				]
			}, r.id)) })]
		})
	});
}
function BookingsPanel({ table, columns }) {
	const qc = useQueryClient();
	const { data, isLoading } = useQuery({
		queryKey: ["admin", table],
		queryFn: async () => {
			const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	async function setStatus(id, status) {
		const { error } = await supabase.from(table).update({ status }).eq("id", id);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Updated.");
		qc.invalidateQueries({ queryKey: ["admin", table] });
	}
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "Loading…"
	});
	if (!data?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "Nothing booked yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[720px] text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-b border-border text-left",
				children: [...columns, "status"].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
					className: "eyebrow py-3 text-muted-foreground",
					children: h.replace(/_/g, " ")
				}, h))
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border/60",
				children: [columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-4",
					children: String(row[c] ?? "—")
				}, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "py-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusSelect, {
						value: String(row["status"]),
						onChange: (v) => setStatus(String(row["id"]), v)
					})
				})]
			}, String(row["id"]))) })]
		})
	});
}
function MembershipPanel() {
	const { data, isLoading } = useQuery({
		queryKey: ["admin", "membership_requests"],
		queryFn: async () => {
			const { data, error } = await supabase.from("membership_requests").select("*").order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "Loading…"
	});
	if (!data?.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted-foreground",
		children: "No requests yet."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-5",
		children: data.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "border border-border p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display text-2xl",
					children: m.full_name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: m.email
				}),
				m.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-foreground",
					children: m.note
				})
			]
		}, m.id))
	});
}
var kindFields = {
	villa: [
		{
			key: "name",
			label: "Name",
			type: "text"
		},
		{
			key: "category",
			label: "Category",
			type: "text"
		},
		{
			key: "tagline",
			label: "Tagline",
			type: "text"
		},
		{
			key: "description",
			label: "Description",
			type: "textarea"
		},
		{
			key: "price",
			label: "Price per night",
			type: "number"
		},
		{
			key: "guests",
			label: "Guests",
			type: "number"
		},
		{
			key: "bedrooms",
			label: "Bedrooms",
			type: "number"
		},
		{
			key: "size",
			label: "Size (sqm)",
			type: "number"
		},
		{
			key: "view",
			label: "View",
			type: "text"
		},
		{
			key: "amenities",
			label: "Amenities (one per line)",
			type: "list"
		},
		{
			key: "distanceToBeach",
			label: "Distance to beach",
			type: "text"
		},
		{
			key: "distanceToDining",
			label: "Distance to dining",
			type: "text"
		}
	],
	restaurant: [
		{
			key: "name",
			label: "Name",
			type: "text"
		},
		{
			key: "cuisine",
			label: "Cuisine",
			type: "text"
		},
		{
			key: "summary",
			label: "Summary",
			type: "text"
		},
		{
			key: "description",
			label: "Description",
			type: "textarea"
		},
		{
			key: "hours",
			label: "Hours",
			type: "text"
		},
		{
			key: "location",
			label: "Location",
			type: "text"
		},
		{
			key: "chef",
			label: "Chef",
			type: "text"
		},
		{
			key: "signatures",
			label: "Signature dishes (one per line)",
			type: "list"
		}
	],
	experience: [
		{
			key: "name",
			label: "Name",
			type: "text"
		},
		{
			key: "category",
			label: "Category",
			type: "text"
		},
		{
			key: "summary",
			label: "Summary",
			type: "text"
		},
		{
			key: "description",
			label: "Description",
			type: "textarea"
		},
		{
			key: "duration",
			label: "Duration",
			type: "text"
		},
		{
			key: "difficulty",
			label: "Difficulty",
			type: "text"
		},
		{
			key: "price",
			label: "Price",
			type: "number"
		},
		{
			key: "groupSize",
			label: "Group size",
			type: "text"
		},
		{
			key: "location",
			label: "Location",
			type: "text"
		},
		{
			key: "bring",
			label: "What to bring (one per line)",
			type: "list"
		}
	],
	offer: [
		{
			key: "name",
			label: "Name",
			type: "text"
		},
		{
			key: "nights",
			label: "Nights",
			type: "number"
		},
		{
			key: "includes",
			label: "Includes (one per line)",
			type: "list"
		}
	]
};
var kindSources = {
	villa: villas,
	restaurant: restaurants,
	experience: experiences,
	offer: offers
};
function slugify(value) {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function ImageField({ value, onChange, label = "Image" }) {
	const [busy, setBusy] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "eyebrow text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex items-start gap-4",
		children: [value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: value,
			alt: "",
			className: "h-20 w-28 shrink-0 object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder: "Paste an image URL, or upload below",
				className: "w-full border-b border-border bg-transparent py-2 text-sm focus:border-accent focus:outline-none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "file",
				accept: "image/*",
				disabled: busy,
				className: "mt-3 block w-full text-xs text-muted-foreground file:mr-3 file:border file:border-border file:bg-transparent file:px-3 file:py-1.5 file:text-[0.6rem] file:tracking-[0.2em] file:uppercase",
				onChange: async (e) => {
					const file = e.target.files?.[0];
					if (!file) return;
					setBusy(true);
					try {
						onChange(await fileToOptimisedDataUrl(file));
						toast.success("Image ready — remember to save.");
					} catch (err) {
						toast.error(err instanceof Error ? err.message : "Upload failed.");
					} finally {
						setBusy(false);
						e.target.value = "";
					}
				}
			})]
		})]
	})] });
}
function FieldInput({ field, value, onChange, placeholder }) {
	const base = "mt-2 w-full border-b border-border bg-transparent py-2 text-sm focus:border-accent focus:outline-none";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow text-muted-foreground",
			children: field.label
		}), field.type === "textarea" || field.type === "list" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			rows: field.type === "list" ? 4 : 3,
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value),
			className: base
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: field.type === "number" ? "number" : "text",
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value),
			className: base
		})]
	});
}
function toFormValue(field, raw) {
	if (raw === void 0 || raw === null) return "";
	if (field.type === "list") return Array.isArray(raw) ? raw.join("\n") : String(raw);
	return String(raw);
}
function fromFormValue(field, value) {
	const trimmed = value.trim();
	if (!trimmed) return void 0;
	if (field.type === "number") return Number(trimmed);
	if (field.type === "list") return trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
	return trimmed;
}
function ItemEditor({ kind, slug, base, row, onSave, onDelete }) {
	const fields = kindFields[kind];
	const data = row?.data ?? {};
	const [values, setValues] = (0, import_react.useState)(() => Object.fromEntries(fields.map((f) => [f.key, toFormValue(f, data[f.key])])));
	const [image, setImage] = (0, import_react.useState)(row?.image_url ?? "");
	const [open, setOpen] = (0, import_react.useState)(false);
	const title = data["name"] || base?.["name"] || slug.replace(/-/g, " ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [(image || base?.["image"]) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image || base?.["image"],
					alt: "",
					className: "h-14 w-20 object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display text-xl capitalize",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"/",
						slug,
						row?.published === false && " · hidden",
						!base && " · custom"
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((o) => !o),
						className: "border border-border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase",
						children: open ? "Close" : "Edit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void onSave(slug, { published: !(row?.published ?? true) }),
						className: "border border-border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase",
						children: row?.published === false ? "Show" : "Hide"
					}),
					onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => void onDelete(slug),
						className: "border border-destructive/50 px-4 py-2 text-[0.62rem] tracking-[0.2em] text-destructive uppercase",
						children: "Delete"
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "grid gap-6 border-t border-border p-6 md:grid-cols-2",
			onSubmit: (e) => {
				e.preventDefault();
				const nextData = {};
				for (const f of fields) {
					const parsed = fromFormValue(f, values[f.key] ?? "");
					if (parsed !== void 0) nextData[f.key] = parsed;
				}
				onSave(slug, {
					data: nextData,
					image_url: image || null
				});
			},
			children: [
				fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: f.type === "textarea" ? "md:col-span-2" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInput, {
						field: f,
						value: values[f.key] ?? "",
						placeholder: toFormValue(f, base?.[f.key]) || void 0,
						onChange: (v) => setValues((s) => ({
							...s,
							[f.key]: v
						}))
					})
				}, f.key)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
						value: image,
						onChange: setImage
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "bg-primary px-8 py-3 text-[0.62rem] tracking-[0.2em] text-primary-foreground uppercase",
						children: "Save changes"
					})
				})
			]
		})]
	});
}
function ContentPanel() {
	const qc = useQueryClient();
	const { data } = useOverrides();
	const rows = data?.content ?? [];
	const [kind, setKind] = (0, import_react.useState)("villa");
	const [newName, setNewName] = (0, import_react.useState)("");
	const kindRows = rows.filter((r) => r.kind === kind);
	const baseItems = kindSources[kind];
	const baseSlugs = new Set(baseItems.map((i) => String(i["slug"])));
	const customRows = kindRows.filter((r) => !baseSlugs.has(r.slug));
	function rowFor(slug) {
		return kindRows.find((r) => r.slug === slug);
	}
	async function save(slug, patch) {
		const existing = rowFor(slug);
		const payload = {
			kind,
			slug,
			data: patch.data ?? existing?.data ?? {},
			image_url: patch.image_url !== void 0 ? patch.image_url : existing?.image_url ?? null,
			published: patch.published ?? existing?.published ?? true,
			sort_order: existing?.sort_order ?? 0
		};
		const { error } = await supabase.from("content_items").upsert(payload, { onConflict: "kind,slug" });
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Saved.");
		qc.invalidateQueries({ queryKey: ["site-overrides"] });
	}
	async function remove(slug) {
		const { error } = await supabase.from("content_items").delete().eq("kind", kind).eq("slug", slug);
		if (error) {
			toast.error(error.message);
			return;
		}
		toast.success("Removed.");
		qc.invalidateQueries({ queryKey: ["site-overrides"] });
	}
	async function addItem(e) {
		e.preventDefault();
		const name = newName.trim();
		if (!name) return;
		const slug = slugify(name);
		if (baseSlugs.has(slug) || kindRows.some((r) => r.slug === slug)) {
			toast.error("That name already exists.");
			return;
		}
		await save(slug, {
			data: { name },
			image_url: null,
			published: true
		});
		setNewName("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: [
				"villa",
				"restaurant",
				"experience",
				"offer"
			].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setKind(k),
				className: `border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase ${kind === k ? "border-foreground" : "border-border text-muted-foreground"}`,
				children: [k, "s"]
			}, k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => void addItem(e),
			className: "mt-8 flex flex-wrap items-end gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "min-w-[240px] flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "eyebrow text-muted-foreground",
					children: ["Add a new ", kind]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: newName,
					onChange: (e) => setNewName(e.target.value),
					placeholder: `New ${kind} name`,
					className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "border border-foreground px-6 py-3 text-[0.62rem] tracking-[0.2em] uppercase",
				children: "Add"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 space-y-4",
			children: [baseItems.map((item) => {
				const slug = String(item["slug"]);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemEditor, {
					kind,
					slug,
					base: item,
					row: rowFor(slug),
					onSave: save
				}, `${kind}-${slug}`);
			}), customRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemEditor, {
				kind,
				slug: row.slug,
				base: void 0,
				row,
				onSave: save,
				onDelete: remove
			}, `${kind}-${row.slug}`))]
		})
	] });
}
function ImagesPanel() {
	const qc = useQueryClient();
	const { data } = useOverrides();
	const media = data?.media ?? [];
	const [newKey, setNewKey] = (0, import_react.useState)("");
	async function save(key, url) {
		if (!url) {
			const { error } = await supabase.from("site_media").delete().eq("media_key", key);
			if (error) {
				toast.error(error.message);
				return;
			}
		} else {
			const { error } = await supabase.from("site_media").upsert({
				media_key: key,
				url
			}, { onConflict: "media_key" });
			if (error) {
				toast.error(error.message);
				return;
			}
		}
		toast.success("Image updated.");
		qc.invalidateQueries({ queryKey: ["site-overrides"] });
	}
	const builtInKeys = Object.keys(images);
	const extraKeys = media.map((m) => m.media_key).filter((k) => !builtInKeys.includes(k));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "max-w-2xl text-sm text-muted-foreground",
			children: "Replace any photograph on the site — paste a URL or upload a file. Clear the field and save to restore the original."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-8 flex flex-wrap items-end gap-4",
			onSubmit: (e) => {
				e.preventDefault();
				const key = slugify(newKey);
				if (!key) return;
				save(key, "https://placehold.co/1200x800?text=New+image");
				setNewKey("");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "min-w-[240px] flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow text-muted-foreground",
					children: "Add an image slot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: newKey,
					onChange: (e) => setNewKey(e.target.value),
					placeholder: "e.g. lobby-lounge",
					className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "border border-foreground px-6 py-3 text-[0.62rem] tracking-[0.2em] uppercase",
				children: "Add slot"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-2",
			children: [...builtInKeys, ...extraKeys].map((key) => {
				const current = media.find((m) => m.media_key === key);
				const fallback = images[key] ?? "";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaEditor, {
					mediaKey: key,
					value: current?.url ?? "",
					fallback,
					onSave: save
				}, key);
			})
		})
	] });
}
function MediaEditor({ mediaKey, value, fallback, onSave }) {
	const [url, setUrl] = (0, import_react.useState)(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "border border-border p-5",
		onSubmit: (e) => {
			e.preventDefault();
			onSave(mediaKey, url.trim());
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: mediaKey
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageField, {
					value: url || fallback ? url : "",
					onChange: setUrl,
					label: "Image"
				})
			}),
			!url && fallback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: fallback,
				alt: mediaKey,
				className: "mt-3 h-24 w-32 object-cover opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "mt-4 border border-border px-5 py-2 text-[0.62rem] tracking-[0.2em] uppercase hover:border-foreground/40",
				children: "Save"
			})
		]
	});
}
//#endregion
export { AdminPage as component };
