import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow text-muted-foreground", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="display mt-5 text-4xl text-foreground md:text-6xl">{title}</h2>
      {intro ? (
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </Reveal>
  );
}

const buttonBase =
  "inline-flex items-center justify-center px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-all duration-500";

export function CtaLink({
  to,
  children,
  variant = "solid",
  className,
  params,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  params?: Record<string, string>;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      params={params as any}
      className={cn(
        buttonBase,
        variant === "solid" && "bg-primary text-primary-foreground hover:bg-charcoal",
        variant === "outline" &&
          "border border-foreground/25 text-foreground hover:bg-foreground hover:text-background",
        variant === "light" &&
          "border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground hover:text-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  image,
  eyebrow,
  title,
  intro,
}: {
  image: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative flex h-[68vh] min-h-[440px] items-end overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/45" />
      <div className="relative mx-auto w-full max-w-[1500px] px-5 pb-16 md:px-10 md:pb-24">
        <p className="eyebrow text-primary-foreground/70">{eyebrow}</p>
        <h1 className="display mt-5 max-w-3xl text-5xl text-primary-foreground md:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-xl text-base text-primary-foreground/75">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}

export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1500px] px-5 md:px-10", className)}>{children}</div>
  );
}
