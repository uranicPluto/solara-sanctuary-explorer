import { t as supabase } from "./client-dm4ECYnf.mjs";
import { t as useQuery } from "../_libs/react+tanstack__react-query.mjs";
import { C as villas, f as offers, l as experiences, p as restaurants, u as images } from "./router-h4DHMmsX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-content-DIKlyNrP.js
async function fetchOverrides() {
	const [content, media] = await Promise.all([supabase.from("content_items").select("*").order("sort_order"), supabase.from("site_media").select("*")]);
	return {
		content: content.data ?? [],
		media: media.data ?? []
	};
}
function useOverrides() {
	return useQuery({
		queryKey: ["site-overrides"],
		queryFn: fetchOverrides,
		staleTime: 6e4
	});
}
/**
* Merges the built-in resort data with admin-managed rows:
* existing slugs are patched, brand-new slugs are appended.
*/
function apply(items, rows, kind) {
	const kindRows = rows.filter((r) => r.kind === kind);
	const bySlug = new Map(kindRows.map((r) => [r.slug, r]));
	const known = new Set(items.map((i) => i.slug));
	const merged = items.filter((item) => bySlug.get(item.slug)?.published !== false).map((item) => {
		const row = bySlug.get(item.slug);
		if (!row) return item;
		return {
			...item,
			...row.data,
			image: row.image_url || item.image
		};
	});
	const added = kindRows.filter((r) => !known.has(r.slug) && r.published).map((r) => ({
		...items[0] ? { ...items[0] } : {},
		...r.data,
		slug: r.slug,
		image: r.image_url || items[0]?.image || ""
	}));
	return [...merged, ...added];
}
function toSections(rows) {
	return rows.filter((r) => r.kind === "section" && r.published).sort((a, b) => a.sort_order - b.sort_order).map((r) => {
		const d = r.data;
		return {
			slug: r.slug,
			eyebrow: d.eyebrow ?? "",
			title: d.title ?? "",
			body: d.body ?? "",
			image: r.image_url,
			ctaLabel: d.ctaLabel ?? "",
			ctaHref: d.ctaHref ?? "",
			layout: d.layout ?? "image-right",
			theme: d.theme ?? "light"
		};
	});
}
/** Static resort data merged with any admin overrides stored in the database. */
function useContent() {
	const { data } = useOverrides();
	const rows = data?.content ?? [];
	const media = data?.media ?? [];
	const image = (key) => media.find((m) => m.media_key === key)?.url || images[key];
	return {
		villas: apply(villas, rows, "villa"),
		restaurants: apply(restaurants, rows, "restaurant"),
		experiences: apply(experiences, rows, "experience"),
		offers: apply(offers, rows, "offer"),
		sections: toSections(rows),
		image,
		mediaOverrides: media
	};
}
//#endregion
export { useOverrides as n, useContent as t };
