import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

const columns = [
  {
    title: "Stay",
    links: [
      { label: "Villas", to: "/stay" as const },
      { label: "Suites", to: "/stay" as const },
      { label: "Residences", to: "/stay" as const },
      { label: "Offers", to: "/offers" as const },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "Dining", to: "/dining" as const },
      { label: "Wellness", to: "/wellness" as const },
      { label: "Experiences", to: "/experiences" as const },
      { label: "Destination Guide", to: "/destination-guide" as const },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", to: "/our-story" as const },
      { label: "Sustainability", to: "/sustainability" as const },
      { label: "SOLARA Privé", to: "/membership" as const },
      { label: "Press", to: "/our-story" as const },
    ],
  },
  {
    title: "Guest Services",
    links: [
      { label: "Concierge", to: "/portal" as const },
      { label: "Guest Portal", to: "/portal" as const },
      { label: "Travel Information", to: "/destination-guide" as const },
      { label: "Sign In", to: "/auth" as const },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="display text-3xl tracking-[0.42em]">SOLARA</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              A private tropical sanctuary in the Indian Ocean, created for extraordinary escapes.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex border border-primary-foreground/40 px-8 py-3 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-colors hover:bg-primary-foreground hover:text-charcoal"
            >
              Book Your Stay
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow text-primary-foreground/50">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-primary-foreground/80 transition-colors hover:text-champagne"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-primary-foreground/15 pt-14 lg:grid-cols-2">
          <div>
            <h2 className="display text-4xl">Stay close to the sun.</h2>
            <p className="mt-4 max-w-md text-sm text-primary-foreground/60">
              Private offers, island stories, new experiences and inspiration from SOLARA.
            </p>
          </div>
          <form
            className="flex flex-col gap-4 self-end sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.includes("@")) {
                toast.error("Please enter a valid email address.");
                return;
              }
              setEmail("");
              toast.success("Welcome to SOLARA. Watch your inbox for island stories.");
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 border-b border-primary-foreground/30 bg-transparent py-3 text-sm placeholder:text-primary-foreground/40 focus:border-champagne focus:outline-none"
            />
            <button
              type="submit"
              className="border border-primary-foreground/40 px-8 py-3 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-colors hover:bg-champagne hover:text-charcoal"
            >
              Join SOLARA
            </button>
          </form>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-[0.7rem] tracking-[0.14em] text-primary-foreground/40 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>Private Island · Indian Ocean</p>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>YouTube</span>
          </div>
          <p>© {new Date().getFullYear()} SOLARA</p>
        </div>
      </div>
    </footer>
  );
}
