import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

import { images } from "@/data/resort";
import { PageHero, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/motion/Reveal";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "SOLARA Privé — Private membership | SOLARA" },
      {
        name: "description",
        content:
          "A private membership for frequent guests: priority reservations, villa upgrades, private experiences, transfers and a personal concierge.",
      },
      { property: "og:title", content: "SOLARA Privé" },
      { property: "og:description", content: "A private membership for frequent guests." },
    ],
  }),
  component: MembershipPage,
});

const benefits = [
  "Priority reservations across every season",
  "Villa upgrades whenever the island allows",
  "Private experiences arranged before arrival",
  "Complimentary airport and seaplane transfers",
  "Early access to new villas and retreats",
  "A personal concierge who stays with you",
  "Invitations to members-only island evenings",
];

function MembershipPage() {
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  return (
    <>
      <PageHero
        image={images.villaSunset}
        eyebrow="Membership"
        title="SOLARA Privé."
        intro="For the guests who keep coming back."
      />

      <section className="py-24">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="display text-4xl text-foreground md:text-5xl">
                Membership is by invitation, or by request.
              </h2>
              <ul className="mt-10 space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="border-b border-border pb-3 text-lg text-foreground">
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <form
              className="h-fit border border-border bg-card p-8"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!form.email.includes("@") || form.name.trim().length < 2) {
                  toast.error("Please add your name and an email we can reply to.");
                  return;
                }
                const { error } = await supabase.from("membership_requests").insert({
                  full_name: form.name.trim(),
                  email: form.email.trim(),
                  note: form.note || null,
                });
                if (error) {
                  toast.error("We couldn't send that. Please try again.");
                  return;
                }
                setForm({ name: "", email: "", note: "" });
                toast.success("Request received. Our membership office will be in touch.");
              }}
            >

              <p className="eyebrow text-muted-foreground">Request membership</p>
              <label className="mt-8 block text-sm">
                <span className="eyebrow text-muted-foreground">Name</span>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="mt-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                />
              </label>
              <label className="mt-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Tell us about your travel</span>
                <textarea
                  rows={4}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                />
              </label>
              <button
                type="submit"
                className="mt-8 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal"
              >
                Request Membership
              </button>
            </form>
          </div>
        </Shell>
      </section>
    </>
  );
}
