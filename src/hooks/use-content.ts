import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  villas as staticVillas,
  restaurants as staticRestaurants,
  experiences as staticExperiences,
  offers as staticOffers,
  images as staticImages,
} from "@/data/resort";

export type ContentRow = {
  id: string;
  kind: string;
  slug: string;
  data: Record<string, unknown>;
  image_url: string | null;
  sort_order: number;
  published: boolean;
};

export type MediaRow = { id: string; media_key: string; url: string; alt: string | null };

export type SiteSection = {
  slug: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string | null;
  ctaLabel: string;
  ctaHref: string;
  layout: "image-left" | "image-right" | "banner" | "text";
  theme: "light" | "sand" | "dark";
};

async function fetchOverrides() {
  const [content, media] = await Promise.all([
    supabase.from("content_items").select("*").order("sort_order"),
    supabase.from("site_media").select("*"),
  ]);
  return {
    content: (content.data ?? []) as unknown as ContentRow[],
    media: (media.data ?? []) as unknown as MediaRow[],
  };
}

export function useOverrides() {
  return useQuery({
    queryKey: ["site-overrides"],
    queryFn: fetchOverrides,
    staleTime: 60_000,
  });
}

/**
 * Merges the built-in resort data with admin-managed rows:
 * existing slugs are patched, brand-new slugs are appended.
 */
function apply<T extends { slug: string; image: string }>(
  items: T[],
  rows: ContentRow[],
  kind: string,
): T[] {
  const kindRows = rows.filter((r) => r.kind === kind);
  const bySlug = new Map(kindRows.map((r) => [r.slug, r]));
  const known = new Set(items.map((i) => i.slug));

  const merged = items
    .filter((item) => bySlug.get(item.slug)?.published !== false)
    .map((item) => {
      const row = bySlug.get(item.slug);
      if (!row) return item;
      return {
        ...item,
        ...(row.data as Partial<T>),
        image: row.image_url || item.image,
      };
    });

  const added = kindRows
    .filter((r) => !known.has(r.slug) && r.published)
    .map(
      (r) =>
        ({
          ...(items[0] ? { ...items[0] } : {}),
          ...(r.data as Partial<T>),
          slug: r.slug,
          image: r.image_url || items[0]?.image || "",
        }) as T,
    );

  return [...merged, ...added];
}

function toSections(rows: ContentRow[]): SiteSection[] {
  return rows
    .filter((r) => r.kind === "section" && r.published)
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((r) => {
      const d = r.data as Partial<SiteSection>;
      return {
        slug: r.slug,
        eyebrow: d.eyebrow ?? "",
        title: d.title ?? "",
        body: d.body ?? "",
        image: r.image_url,
        ctaLabel: d.ctaLabel ?? "",
        ctaHref: d.ctaHref ?? "",
        layout: d.layout ?? "image-right",
        theme: d.theme ?? "light",
      };
    });
}

/** Static resort data merged with any admin overrides stored in the database. */
export function useContent() {
  const { data } = useOverrides();
  const rows = data?.content ?? [];
  const media = data?.media ?? [];

  const image = (key: keyof typeof staticImages) =>
    media.find((m) => m.media_key === key)?.url || staticImages[key];

  return {
    villas: apply(staticVillas, rows, "villa"),
    restaurants: apply(staticRestaurants, rows, "restaurant"),
    experiences: apply(staticExperiences, rows, "experience"),
    offers: apply(staticOffers, rows, "offer"),
    sections: toSections(rows),
    image,
    mediaOverrides: media,
  };
}
