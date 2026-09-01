import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, Shield, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";

function useIsStaff() {
  const [staff, setStaff] = useState(false);
  useEffect(() => {
    let active = true;
    const check = async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        if (active) setStaff(false);
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userData.user.id);
      if (active)
        setStaff((data ?? []).some((r) => r.role === "admin" || r.role === "staff"));
    };
    void check();
    const { data: sub } = supabase.auth.onAuthStateChange(() => void check());
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);
  return staff;
}

const megaMenu = [
  {
    label: "Stay",
    to: "/stay" as const,
    columns: [
      { title: "Villas", to: "/stay" as const },
      { title: "Suites", to: "/stay" as const },
      { title: "Residences", to: "/stay" as const },
      { title: "Private Island", to: "/our-story" as const },
      { title: "Offers", to: "/offers" as const },
    ],
  },
  {
    label: "Dine",
    to: "/dining" as const,
    columns: [
      { title: "Restaurants", to: "/dining" as const },
      { title: "Bars", to: "/dining" as const },
      { title: "Private Dining", to: "/dining" as const },
      { title: "Wine & Spirits", to: "/dining" as const },
    ],
  },
  {
    label: "Wellness",
    to: "/wellness" as const,
    columns: [
      { title: "Spa", to: "/wellness" as const },
      { title: "Treatments", to: "/wellness" as const },
      { title: "Yoga", to: "/wellness" as const },
      { title: "Fitness", to: "/wellness" as const },
      { title: "Wellness Retreats", to: "/offers" as const },
    ],
  },
  {
    label: "Explore",
    to: "/experiences" as const,
    columns: [
      { title: "Experiences", to: "/experiences" as const },
      { title: "Diving", to: "/experiences" as const },
      { title: "Sailing", to: "/experiences" as const },
      { title: "Nature", to: "/experiences" as const },
      { title: "Island Guide", to: "/destination-guide" as const },
    ],
  },

  {
    label: "Our Story",
    to: "/our-story" as const,
    columns: [
      { title: "The Island", to: "/our-story" as const },
      { title: "Sustainability", to: "/sustainability" as const },
      { title: "SOLARA Privé", to: "/membership" as const },
    ],
  },
];

export function Nav() {
  const isStaff = useIsStaff();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "border-b border-border/60 bg-background/80 py-3 shadow-[0_10px_40px_-30px_oklch(0.25_0.01_60)] backdrop-blur-xl"
          : "py-6",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 md:px-10">
        <Link
          to="/"
          className={cn(
            "display text-2xl tracking-[0.42em] transition-colors duration-500 md:text-[1.6rem]",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
          aria-label="SOLARA home"
        >
          SOLARA
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-9 lg:flex",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
          aria-label="Primary"
        >
          {megaMenu.map((item) => (
            <div key={item.label} onMouseEnter={() => setOpen(item.label)} className="py-2">
              <Link
                to={item.to}
                className="text-[0.68rem] font-medium tracking-[0.22em] uppercase transition-opacity hover:opacity-60"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div
          className={cn(
            "flex items-center gap-3 md:gap-5",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          <Link
            to="/book"
            className={cn(
              "hidden border px-6 py-2.5 text-[0.65rem] font-medium tracking-[0.22em] uppercase transition-colors duration-500 md:inline-flex",
              scrolled
                ? "border-foreground/25 hover:bg-foreground hover:text-background"
                : "border-primary-foreground/50 hover:bg-primary-foreground hover:text-foreground",
            )}
          >
            Book Your Stay
          </Link>
          <Link to="/experiences" aria-label="Search the island" className="hover:opacity-60">
            <Search className="h-4 w-4" strokeWidth={1.4} />
          </Link>
          <Link to="/portal" aria-label="Your account" className="hover:opacity-60">
            <User className="h-4 w-4" strokeWidth={1.4} />
          </Link>
          {isStaff && (
            <Link to="/admin" aria-label="Admin panel" className="hover:opacity-60">
              <Shield className="h-4 w-4" strokeWidth={1.4} />
            </Link>
          )}
          <button
            type="button"
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      {/* Mega menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-full hidden overflow-hidden border-b border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:block",
          open ? "max-h-[420px] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-[1fr_2fr] gap-16 px-10 py-14">
          <div>
            <p className="eyebrow text-muted-foreground">{open}</p>
            <p className="display mt-4 text-3xl text-foreground">
              {open === "Stay" && "Private spaces, island rhythm."}
              {open === "Dine" && "Seven ways to end a day."}
              {open === "Wellness" && "Return to yourself."}
              {open === "Explore" && "The island is yours."}
              {open === "Our Story" && "A world away from ordinary."}
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-x-10 gap-y-4">
            {megaMenu
              .find((m) => m.label === open)
              ?.columns.map((col) => (
                <li key={col.title}>
                  <Link
                    to={col.to}
                    onClick={() => setOpen(null)}
                    className="group flex items-center justify-between border-b border-border/60 py-3 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {col.title}
                    <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="display text-xl tracking-[0.42em] text-foreground">SOLARA</span>
            <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-1" aria-label="Mobile">
            {megaMenu.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="display border-b border-border py-5 text-4xl text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/book"
            onClick={() => setMobileOpen(false)}
            className="mt-auto bg-primary py-4 text-center text-[0.7rem] font-medium tracking-[0.24em] text-primary-foreground uppercase"
          >
            Book Your Stay
          </Link>
        </div>
      )}
    </header>
  );
}
