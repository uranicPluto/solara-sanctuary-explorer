import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Shell } from "@/components/site/Primitives";
import { villas, restaurants, experiences, images } from "@/data/resort";
import { useOverrides, type ContentRow } from "@/hooks/use-content";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Resort management | SOLARA" },
      { name: "description", content: "Manage reservations, bookings, content and imagery." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

const tabs = ["Reservations", "Spa", "Dining", "Membership", "Content", "Images"] as const;
type Tab = (typeof tabs)[number];

function useIsStaff() {
  const [state, setState] = useState<"loading" | "yes" | "no">("loading");
  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return setState("no");
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userData.user.id);
      const staff = (data ?? []).some((r) => r.role === "admin" || r.role === "staff");
      setState(staff ? "yes" : "no");
    })();
  }, []);
  return state;
}

function AdminPage() {
  const staff = useIsStaff();
  const [tab, setTab] = useState<Tab>("Reservations");

  if (staff === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center text-muted-foreground">
        Checking your access…
      </div>
    );
  }

  if (staff === "no") {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-md">
          <p className="eyebrow text-muted-foreground">Restricted</p>
          <h1 className="display mt-4 text-5xl">Staff only.</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            This area is reserved for the SOLARA team. Ask an administrator to grant your account
            the staff or admin role.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-36 pb-28">
      <Shell>
        <p className="eyebrow text-muted-foreground">Resort management</p>
        <h1 className="display mt-4 text-5xl text-foreground md:text-7xl">Admin.</h1>

        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-5">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`border px-5 py-2 text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${
                tab === t
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border hover:border-foreground/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12">
          {tab === "Reservations" && <ReservationsPanel />}
          {tab === "Spa" && (
            <BookingsPanel
              table="spa_bookings"
              columns={["treatment_name", "therapist", "booking_date", "booking_time"]}
            />
          )}
          {tab === "Dining" && (
            <BookingsPanel
              table="dining_requests"
              columns={["restaurant_name", "booking_date", "booking_time", "party_size"]}
            />
          )}
          {tab === "Membership" && <MembershipPanel />}
          {tab === "Content" && <ContentPanel />}
          {tab === "Images" && <ImagesPanel />}
        </div>
      </Shell>
    </section>
  );
}

const statuses = ["requested", "confirmed", "completed", "cancelled"];

function StatusSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void | Promise<void>;
}) {
  return (
    <select
      value={value}
      onChange={(e) => void onChange(e.target.value)}
      className="border border-border bg-transparent px-3 py-2 text-xs tracking-[0.16em] uppercase"
    >
      {statuses.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}

function ReservationsPanel() {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "reservations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reservations")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  async function setStatus(id: string, status: string) {
    const { error } = await supabase.from("reservations").update({ status }).eq("id", id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Reservation updated.");
    qc.invalidateQueries({ queryKey: ["admin", "reservations"] });
  }

  if (isLoading) return <p className="text-muted-foreground">Loading…</p>;
  if (!data?.length) return <p className="text-muted-foreground">No reservations yet.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {["Code", "Guest", "Villa", "Dates", "Guests", "Total", "Status"].map((h) => (
              <th key={h} className="eyebrow py-3 text-muted-foreground">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((r) => (
            <tr key={r.id} className="border-b border-border/60">
              <td className="py-4">{r.confirmation_code}</td>
              <td className="py-4">
                {r.guest_name}
                <span className="block text-xs text-muted-foreground">{r.guest_email}</span>
              </td>
              <td className="py-4">{r.villa_name}</td>
              <td className="py-4">
                {r.arrival} → {r.departure}
              </td>
              <td className="py-4">{r.guests}</td>
              <td className="py-4">${Number(r.total_amount).toLocaleString()}</td>
              <td className="py-4">
                <StatusSelect value={r.status} onChange={(v) => setStatus(r.id, v)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BookingsPanel({
  table,
  columns,
}: {
  table: "spa_bookings" | "dining_requests";
  columns: string[];
}) {
  const qc = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["admin", table],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(table)
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as unknown as Record<string, unknown>[];
    },
  });

  async function setStatus(id: string, status: string) {
    const { error } = await supabase.from(table).update({ status }).eq("id", id);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Updated.");
    qc.invalidateQueries({ queryKey: ["admin", table] });
  }

  if (isLoading) return <p className="text-muted-foreground">Loading…</p>;
  if (!data?.length) return <p className="text-muted-foreground">Nothing booked yet.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {[...columns, "status"].map((h) => (
              <th key={h} className="eyebrow py-3 text-muted-foreground">
                {h.replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={String(row["id"])} className="border-b border-border/60">
              {columns.map((c) => (
                <td key={c} className="py-4">
                  {String(row[c] ?? "—")}
                </td>
              ))}
              <td className="py-4">
                <StatusSelect
                  value={String(row["status"])}
                  onChange={(v) => setStatus(String(row["id"]), v)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MembershipPanel() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin", "membership_requests"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("membership_requests")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) return <p className="text-muted-foreground">Loading…</p>;
  if (!data?.length) return <p className="text-muted-foreground">No requests yet.</p>;

  return (
    <ul className="space-y-5">
      {data.map((m) => (
        <li key={m.id} className="border border-border p-6">
          <p className="display text-2xl">{m.full_name}</p>
          <p className="text-sm text-muted-foreground">{m.email}</p>
          {m.note && <p className="mt-3 text-sm text-foreground">{m.note}</p>}
        </li>
      ))}
    </ul>
  );
}

type EditableKind = "villa" | "restaurant" | "experience" | "offer";

type Field = {
  key: string;
  label: string;
  type: "text" | "textarea" | "number" | "list";
};

const kindFields: Record<EditableKind, Field[]> = {
  villa: [
    { key: "name", label: "Name", type: "text" },
    { key: "category", label: "Category", type: "text" },
    { key: "tagline", label: "Tagline", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "price", label: "Price per night", type: "number" },
    { key: "guests", label: "Guests", type: "number" },
    { key: "bedrooms", label: "Bedrooms", type: "number" },
    { key: "size", label: "Size (sqm)", type: "number" },
    { key: "view", label: "View", type: "text" },
    { key: "amenities", label: "Amenities (one per line)", type: "list" },
    { key: "distanceToBeach", label: "Distance to beach", type: "text" },
    { key: "distanceToDining", label: "Distance to dining", type: "text" },
  ],
  restaurant: [
    { key: "name", label: "Name", type: "text" },
    { key: "cuisine", label: "Cuisine", type: "text" },
    { key: "summary", label: "Summary", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "hours", label: "Hours", type: "text" },
    { key: "location", label: "Location", type: "text" },
    { key: "chef", label: "Chef", type: "text" },
    { key: "signatures", label: "Signature dishes (one per line)", type: "list" },
  ],
  experience: [
    { key: "name", label: "Name", type: "text" },
    { key: "category", label: "Category", type: "text" },
    { key: "summary", label: "Summary", type: "text" },
    { key: "description", label: "Description", type: "textarea" },
    { key: "duration", label: "Duration", type: "text" },
    { key: "difficulty", label: "Difficulty", type: "text" },
    { key: "price", label: "Price", type: "number" },
    { key: "groupSize", label: "Group size", type: "text" },
    { key: "location", label: "Location", type: "text" },
    { key: "bring", label: "What to bring (one per line)", type: "list" },
  ],
  offer: [
    { key: "name", label: "Name", type: "text" },
    { key: "nights", label: "Nights", type: "number" },
    { key: "includes", label: "Includes (one per line)", type: "list" },
  ],
};

const kindSources: Record<EditableKind, Record<string, unknown>[]> = {
  villa: villas as unknown as Record<string, unknown>[],
  restaurant: restaurants as unknown as Record<string, unknown>[],
  experience: experiences as unknown as Record<string, unknown>[],
  offer: offers as unknown as Record<string, unknown>[],
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function ImageField({
  value,
  onChange,
  label = "Image",
}: {
  value: string;
  onChange: (v: string) => void;
  label?: string;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <div>
      <span className="eyebrow text-muted-foreground">{label}</span>
      <div className="mt-2 flex items-start gap-4">
        {value && <img src={value} alt="" className="h-20 w-28 shrink-0 object-cover" />}
        <div className="flex-1">
          <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste an image URL, or upload below"
            className="w-full border-b border-border bg-transparent py-2 text-sm focus:border-accent focus:outline-none"
          />
          <input
            type="file"
            accept="image/*"
            disabled={busy}
            className="mt-3 block w-full text-xs text-muted-foreground file:mr-3 file:border file:border-border file:bg-transparent file:px-3 file:py-1.5 file:text-[0.6rem] file:tracking-[0.2em] file:uppercase"
            onChange={async (e) => {
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
            }}
          />
        </div>
      </div>
    </div>
  );
}

function FieldInput({
  field,
  value,
  onChange,
  placeholder,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const base =
    "mt-2 w-full border-b border-border bg-transparent py-2 text-sm focus:border-accent focus:outline-none";
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{field.label}</span>
      {field.type === "textarea" || field.type === "list" ? (
        <textarea
          rows={field.type === "list" ? 4 : 3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      ) : (
        <input
          type={field.type === "number" ? "number" : "text"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </label>
  );
}

function toFormValue(field: Field, raw: unknown): string {
  if (raw === undefined || raw === null) return "";
  if (field.type === "list") return Array.isArray(raw) ? raw.join("\n") : String(raw);
  return String(raw);
}

function fromFormValue(field: Field, value: string): unknown | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (field.type === "number") return Number(trimmed);
  if (field.type === "list")
    return trimmed
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  return trimmed;
}

function ItemEditor({
  kind,
  slug,
  base,
  row,
  onSave,
  onDelete,
}: {
  kind: EditableKind;
  slug: string;
  base: Record<string, unknown> | undefined;
  row: ContentRow | undefined;
  onSave: (slug: string, patch: Partial<ContentRow>) => Promise<void>;
  onDelete?: (slug: string) => Promise<void>;
}) {
  const fields = kindFields[kind];
  const data = (row?.data ?? {}) as Record<string, unknown>;
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.key, toFormValue(f, data[f.key])])),
  );
  const [image, setImage] = useState(row?.image_url ?? "");
  const [open, setOpen] = useState(false);

  const title =
    (data["name"] as string) || (base?.["name"] as string) || slug.replace(/-/g, " ");

  return (
    <div className="border border-border">
      <div className="flex flex-wrap items-center justify-between gap-4 p-5">
        <div className="flex items-center gap-4">
          {(image || (base?.["image"] as string)) && (
            <img
              src={image || (base?.["image"] as string)}
              alt=""
              className="h-14 w-20 object-cover"
            />
          )}
          <div>
            <p className="display text-xl capitalize">{title}</p>
            <p className="text-xs text-muted-foreground">
              /{slug}
              {row?.published === false && " · hidden"}
              {!base && " · custom"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="border border-border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase"
          >
            {open ? "Close" : "Edit"}
          </button>
          <button
            type="button"
            onClick={() => void onSave(slug, { published: !(row?.published ?? true) })}
            className="border border-border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase"
          >
            {row?.published === false ? "Show" : "Hide"}
          </button>
          {onDelete && (
            <button
              type="button"
              onClick={() => void onDelete(slug)}
              className="border border-destructive/50 px-4 py-2 text-[0.62rem] tracking-[0.2em] text-destructive uppercase"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      {open && (
        <form
          className="grid gap-6 border-t border-border p-6 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const nextData: Record<string, unknown> = {};
            for (const f of fields) {
              const parsed = fromFormValue(f, values[f.key] ?? "");
              if (parsed !== undefined) nextData[f.key] = parsed;
            }
            void onSave(slug, { data: nextData, image_url: image || null });
          }}
        >
          {fields.map((f) => (
            <div key={f.key} className={f.type === "textarea" ? "md:col-span-2" : ""}>
              <FieldInput
                field={f}
                value={values[f.key] ?? ""}
                placeholder={toFormValue(f, base?.[f.key]) || undefined}
                onChange={(v) => setValues((s) => ({ ...s, [f.key]: v }))}
              />
            </div>
          ))}
          <div className="md:col-span-2">
            <ImageField value={image} onChange={setImage} />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-primary px-8 py-3 text-[0.62rem] tracking-[0.2em] text-primary-foreground uppercase"
            >
              Save changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function ContentPanel() {
  const qc = useQueryClient();
  const { data } = useOverrides();
  const rows = data?.content ?? [];
  const [kind, setKind] = useState<EditableKind>("villa");
  const [newName, setNewName] = useState("");

  const kindRows = rows.filter((r) => r.kind === kind);
  const baseItems = kindSources[kind];
  const baseSlugs = new Set(baseItems.map((i) => String(i["slug"])));
  const customRows = kindRows.filter((r) => !baseSlugs.has(r.slug));

  function rowFor(slug: string) {
    return kindRows.find((r) => r.slug === slug);
  }

  async function save(slug: string, patch: Partial<ContentRow>) {
    const existing = rowFor(slug);
    const payload = {
      kind,
      slug,
      data: (patch.data ?? existing?.data ?? {}) as never,
      image_url: patch.image_url !== undefined ? patch.image_url : (existing?.image_url ?? null),
      published: patch.published ?? existing?.published ?? true,
      sort_order: existing?.sort_order ?? 0,
    };
    const { error } = await supabase
      .from("content_items")
      .upsert(payload, { onConflict: "kind,slug" });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Saved.");
    qc.invalidateQueries({ queryKey: ["site-overrides"] });
  }

  async function remove(slug: string) {
    const { error } = await supabase
      .from("content_items")
      .delete()
      .eq("kind", kind)
      .eq("slug", slug);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Removed.");
    qc.invalidateQueries({ queryKey: ["site-overrides"] });
  }

  async function addItem(e: React.FormEvent) {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;
    const slug = slugify(name);
    if (baseSlugs.has(slug) || kindRows.some((r) => r.slug === slug)) {
      toast.error("That name already exists.");
      return;
    }
    await save(slug, { data: { name }, image_url: null, published: true });
    setNewName("");
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {(["villa", "restaurant", "experience", "offer"] as EditableKind[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKind(k)}
            className={`border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase ${
              kind === k ? "border-foreground" : "border-border text-muted-foreground"
            }`}
          >
            {k}s
          </button>
        ))}
      </div>

      <form onSubmit={(e) => void addItem(e)} className="mt-8 flex flex-wrap items-end gap-4">
        <label className="min-w-[240px] flex-1">
          <span className="eyebrow text-muted-foreground">Add a new {kind}</span>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder={`New ${kind} name`}
            className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="border border-foreground px-6 py-3 text-[0.62rem] tracking-[0.2em] uppercase"
        >
          Add
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {baseItems.map((item) => {
          const slug = String(item["slug"]);
          return (
            <ItemEditor
              key={`${kind}-${slug}`}
              kind={kind}
              slug={slug}
              base={item}
              row={rowFor(slug)}
              onSave={save}
            />
          );
        })}
        {customRows.map((row) => (
          <ItemEditor
            key={`${kind}-${row.slug}`}
            kind={kind}
            slug={row.slug}
            base={undefined}
            row={row}
            onSave={save}
            onDelete={remove}
          />
        ))}
      </div>
    </div>
  );
}

const sectionLayouts = ["image-right", "image-left", "banner", "text"] as const;
const sectionThemes = ["light", "sand", "dark"] as const;

function SectionsPanel() {
  const qc = useQueryClient();
  const { data } = useOverrides();
  const rows = (data?.content ?? [])
    .filter((r) => r.kind === "section")
    .sort((a, b) => a.sort_order - b.sort_order);
  const [newTitle, setNewTitle] = useState("");

  async function save(slug: string, patch: Partial<ContentRow>) {
    const existing = rows.find((r) => r.slug === slug);
    const { error } = await supabase.from("content_items").upsert(
      {
        kind: "section",
        slug,
        data: (patch.data ?? existing?.data ?? {}) as never,
        image_url: patch.image_url !== undefined ? patch.image_url : (existing?.image_url ?? null),
        published: patch.published ?? existing?.published ?? true,
        sort_order: patch.sort_order ?? existing?.sort_order ?? rows.length,
      },
      { onConflict: "kind,slug" },
    );
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Section saved.");
    qc.invalidateQueries({ queryKey: ["site-overrides"] });
  }

  async function remove(slug: string) {
    const { error } = await supabase
      .from("content_items")
      .delete()
      .eq("kind", "section")
      .eq("slug", slug);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Section removed.");
    qc.invalidateQueries({ queryKey: ["site-overrides"] });
  }

  async function move(slug: string, direction: -1 | 1) {
    const index = rows.findIndex((r) => r.slug === slug);
    const swap = rows[index + direction];
    const current = rows[index];
    if (!swap || !current) return;
    await Promise.all([
      supabase.from("content_items").update({ sort_order: swap.sort_order }).eq("id", current.id),
      supabase.from("content_items").update({ sort_order: current.sort_order }).eq("id", swap.id),
    ]);
    qc.invalidateQueries({ queryKey: ["site-overrides"] });
  }

  return (
    <div>
      <p className="max-w-2xl text-sm text-muted-foreground">
        Sections you add here appear on the homepage, in this order, just above the closing image.
      </p>

      <form
        className="mt-8 flex flex-wrap items-end gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const title = newTitle.trim();
          if (!title) return;
          const slug = slugify(title);
          if (rows.some((r) => r.slug === slug)) {
            toast.error("A section with that title exists.");
            return;
          }
          void save(slug, {
            data: { title, layout: "image-right", theme: "light" },
            sort_order: rows.length,
          });
          setNewTitle("");
        }}
      >
        <label className="min-w-[240px] flex-1">
          <span className="eyebrow text-muted-foreground">Add a homepage section</span>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Section title"
            className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="border border-foreground px-6 py-3 text-[0.62rem] tracking-[0.2em] uppercase"
        >
          Add section
        </button>
      </form>

      <div className="mt-8 space-y-4">
        {rows.length === 0 && (
          <p className="text-muted-foreground">No custom sections yet.</p>
        )}
        {rows.map((row, i) => (
          <SectionEditor
            key={row.id}
            row={row}
            onSave={save}
            onDelete={remove}
            onMove={move}
            canMoveUp={i > 0}
            canMoveDown={i < rows.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function SectionEditor({
  row,
  onSave,
  onDelete,
  onMove,
  canMoveUp,
  canMoveDown,
}: {
  row: ContentRow;
  onSave: (slug: string, patch: Partial<ContentRow>) => Promise<void>;
  onDelete: (slug: string) => Promise<void>;
  onMove: (slug: string, dir: -1 | 1) => Promise<void>;
  canMoveUp: boolean;
  canMoveDown: boolean;
}) {
  const d = row.data as Record<string, string | undefined>;
  const [form, setForm] = useState({
    eyebrow: d["eyebrow"] ?? "",
    title: d["title"] ?? "",
    body: d["body"] ?? "",
    ctaLabel: d["ctaLabel"] ?? "",
    ctaHref: d["ctaHref"] ?? "",
    layout: d["layout"] ?? "image-right",
    theme: d["theme"] ?? "light",
  });
  const [image, setImage] = useState(row.image_url ?? "");

  const set = (k: keyof typeof form, v: string) => setForm((s) => ({ ...s, [k]: v }));
  const input =
    "mt-2 w-full border-b border-border bg-transparent py-2 text-sm focus:border-accent focus:outline-none";

  return (
    <form
      className="grid gap-6 border border-border p-6 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        void onSave(row.slug, { data: { ...form }, image_url: image || null });
      }}
    >
      <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
        <p className="display text-xl">{form.title || row.slug}</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!canMoveUp}
            onClick={() => void onMove(row.slug, -1)}
            className="border border-border px-3 py-2 text-[0.62rem] uppercase disabled:opacity-30"
          >
            ↑
          </button>
          <button
            type="button"
            disabled={!canMoveDown}
            onClick={() => void onMove(row.slug, 1)}
            className="border border-border px-3 py-2 text-[0.62rem] uppercase disabled:opacity-30"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={() => void onSave(row.slug, { published: !row.published })}
            className="border border-border px-4 py-2 text-[0.62rem] tracking-[0.2em] uppercase"
          >
            {row.published ? "Hide" : "Show"}
          </button>
          <button
            type="button"
            onClick={() => void onDelete(row.slug)}
            className="border border-destructive/50 px-4 py-2 text-[0.62rem] tracking-[0.2em] text-destructive uppercase"
          >
            Delete
          </button>
        </div>
      </div>

      <label>
        <span className="eyebrow text-muted-foreground">Eyebrow</span>
        <input value={form.eyebrow} onChange={(e) => set("eyebrow", e.target.value)} className={input} />
      </label>
      <label>
        <span className="eyebrow text-muted-foreground">Title</span>
        <input value={form.title} onChange={(e) => set("title", e.target.value)} className={input} />
      </label>
      <label className="md:col-span-2">
        <span className="eyebrow text-muted-foreground">Body</span>
        <textarea
          rows={4}
          value={form.body}
          onChange={(e) => set("body", e.target.value)}
          className={input}
        />
      </label>
      <label>
        <span className="eyebrow text-muted-foreground">Button label</span>
        <input value={form.ctaLabel} onChange={(e) => set("ctaLabel", e.target.value)} className={input} />
      </label>
      <label>
        <span className="eyebrow text-muted-foreground">Button link (e.g. /stay)</span>
        <input value={form.ctaHref} onChange={(e) => set("ctaHref", e.target.value)} className={input} />
      </label>
      <label>
        <span className="eyebrow text-muted-foreground">Layout</span>
        <select
          value={form.layout}
          onChange={(e) => set("layout", e.target.value)}
          className={input}
        >
          {sectionLayouts.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="eyebrow text-muted-foreground">Theme</span>
        <select value={form.theme} onChange={(e) => set("theme", e.target.value)} className={input}>
          {sectionThemes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      <div className="md:col-span-2">
        <ImageField value={image} onChange={setImage} />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="bg-primary px-8 py-3 text-[0.62rem] tracking-[0.2em] text-primary-foreground uppercase"
        >
          Save section
        </button>
      </div>
    </form>
  );
}

function ImagesPanel() {
  const qc = useQueryClient();
  const { data } = useOverrides();
  const media = data?.media ?? [];
  const [newKey, setNewKey] = useState("");

  async function save(key: string, url: string) {
    if (!url) {
      const { error } = await supabase.from("site_media").delete().eq("media_key", key);
      if (error) {
        toast.error(error.message);
        return;
      }
    } else {
      const { error } = await supabase
        .from("site_media")
        .upsert({ media_key: key, url }, { onConflict: "media_key" });
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

  return (
    <div>
      <p className="max-w-2xl text-sm text-muted-foreground">
        Replace any photograph on the site — paste a URL or upload a file. Clear the field and save
        to restore the original.
      </p>

      <form
        className="mt-8 flex flex-wrap items-end gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const key = slugify(newKey);
          if (!key) return;
          void save(key, "https://placehold.co/1200x800?text=New+image");
          setNewKey("");
        }}
      >
        <label className="min-w-[240px] flex-1">
          <span className="eyebrow text-muted-foreground">Add an image slot</span>
          <input
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            placeholder="e.g. lobby-lounge"
            className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="border border-foreground px-6 py-3 text-[0.62rem] tracking-[0.2em] uppercase"
        >
          Add slot
        </button>
      </form>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {[...builtInKeys, ...extraKeys].map((key) => {
          const current = media.find((m) => m.media_key === key);
          const fallback = images[key as keyof typeof images] ?? "";
          return (
            <MediaEditor
              key={key}
              mediaKey={key}
              value={current?.url ?? ""}
              fallback={fallback}
              onSave={save}
            />
          );
        })}
      </div>
    </div>
  );
}

function MediaEditor({
  mediaKey,
  value,
  fallback,
  onSave,
}: {
  mediaKey: string;
  value: string;
  fallback: string;
  onSave: (key: string, url: string) => Promise<void>;
}) {
  const [url, setUrl] = useState(value);
  return (
    <form
      className="border border-border p-5"
      onSubmit={(e) => {
        e.preventDefault();
        void onSave(mediaKey, url.trim());
      }}
    >
      <p className="eyebrow text-muted-foreground">{mediaKey}</p>
      <div className="mt-4">
        <ImageField value={url || fallback ? url : ""} onChange={setUrl} label="Image" />
      </div>
      {!url && fallback && (
        <img src={fallback} alt={mediaKey} className="mt-3 h-24 w-32 object-cover opacity-70" />
      )}
      <button
        type="submit"
        className="mt-4 border border-border px-5 py-2 text-[0.62rem] tracking-[0.2em] uppercase hover:border-foreground/40"
      >
        Save
      </button>
    </form>
  );
}

