import { useState } from "react";
import islandMap from "@/assets/island-map.jpg";
import { mapLocations } from "@/data/resort";

export function IslandMap() {
  const [active, setActive] = useState(mapLocations[0]!.id);
  const location = mapLocations.find((l) => l.id === active)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-center">
      <div className="relative aspect-square overflow-hidden bg-sand/40">
        <img
          src={islandMap}
          alt="Illustrated map of the SOLARA private island"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {mapLocations.map((loc) => (
          <button
            key={loc.id}
            type="button"
            onMouseEnter={() => setActive(loc.id)}
            onFocus={() => setActive(loc.id)}
            onClick={() => setActive(loc.id)}
            aria-label={loc.name}
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500 ${
              active === loc.id
                ? "h-4 w-4 border-accent bg-accent"
                : "h-2.5 w-2.5 border-foreground/50 bg-background/80 hover:h-4 hover:w-4"
            }`}
          >
            <span className="sr-only">{loc.name}</span>
          </button>
        ))}
      </div>

      <div className="border-t border-border pt-8 lg:border-none lg:pt-0">
        <p className="eyebrow text-muted-foreground">Explore the resort</p>
        <h3 className="display mt-4 text-4xl text-foreground">{location.name}</h3>
        <p className="mt-4 text-muted-foreground">{location.blurb}</p>
        <ul className="mt-8 space-y-3">
          {mapLocations.map((loc) => (
            <li key={loc.id}>
              <button
                type="button"
                onClick={() => setActive(loc.id)}
                className={`w-full border-b border-border py-2 text-left text-sm transition-colors ${
                  active === loc.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {loc.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
