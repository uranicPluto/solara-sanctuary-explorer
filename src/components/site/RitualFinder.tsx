import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ritualOptions, rituals, type RitualIntent } from "@/data/resort";
import { CtaLink } from "@/components/site/Primitives";

export function RitualFinder() {
  const [intent, setIntent] = useState<RitualIntent | null>(null);

  return (
    <div className="grid gap-14 lg:grid-cols-2">
      <div>
        <p className="eyebrow text-muted-foreground">Find your ritual</p>
        <h2 className="display mt-5 text-4xl text-foreground md:text-6xl">
          What do you need right now?
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {ritualOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setIntent(option)}
              className={`border px-7 py-3 text-[0.65rem] tracking-[0.24em] uppercase transition-all duration-500 ${
                intent === option
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-foreground/20 text-foreground hover:border-foreground/60"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[320px] border-t border-border pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
        <AnimatePresence mode="wait">
          {intent ? (
            <motion.div
              key={intent}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow text-accent">Your SOLARA ritual</p>
              <h3 className="display mt-4 text-3xl text-foreground">A day designed to {intent.toLowerCase()}.</h3>
              <ul className="mt-8 space-y-0">
                {rituals[intent].map((step) => (
                  <li
                    key={step.time}
                    className="grid grid-cols-[80px_1fr] gap-4 border-b border-border py-4"
                  >
                    <span className="text-sm tracking-[0.14em] text-muted-foreground">
                      {step.time}
                    </span>
                    <span className="text-foreground">{step.label}</span>
                  </li>
                ))}
              </ul>
              <CtaLink to="/book" className="mt-10">
                Build My Stay
              </CtaLink>
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-sm text-muted-foreground"
            >
              Choose a word. We will shape a day around it — treatments, movement, dining and quiet,
              in the order your body wants them.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
