import { Link } from "@tanstack/react-router";
import type { Villa } from "@/data/resort";

export function VillaCard({ villa }: { villa: Villa }) {
  return (
    <Link
      to="/villas/$slug"
      params={{ slug: villa.slug }}
      className="group block"
      aria-label={`Explore ${villa.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={villa.image}
          alt={villa.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="eyebrow text-primary-foreground/70">{villa.category}</p>
          <h3 className="display mt-2 text-3xl text-primary-foreground">{villa.name}</h3>
          <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-32 group-hover:opacity-100">
            <p className="text-sm text-primary-foreground/80">{villa.tagline}</p>
            <span className="mt-4 inline-block border-b border-champagne pb-1 text-[0.65rem] tracking-[0.24em] text-champagne uppercase">
              Explore Villa
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4 text-sm">
        <span className="text-muted-foreground">
          {villa.guests} guests · {villa.bedrooms} bed · {villa.view} view
        </span>
        <span className="text-foreground">
          from ${villa.price.toLocaleString()}
          <span className="text-muted-foreground"> / night</span>
        </span>
      </div>
    </Link>
  );
}
