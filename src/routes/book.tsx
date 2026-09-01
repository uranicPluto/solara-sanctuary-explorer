import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { villas, bookableExtras, images } from "@/data/resort";
import { Shell } from "@/components/site/Primitives";


export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — Reserve a villa | SOLARA" },
      {
        name: "description",
        content:
          "Choose your dates, villa and experiences, and reserve your stay at SOLARA in a few quiet steps.",
      },
      { property: "og:title", content: "Book Your Stay | SOLARA" },
      { property: "og:description", content: "Choose your dates. We'll do the rest." },
    ],
  }),
  component: BookPage,
});

const steps = ["Dates", "Villa", "Experiences", "Details", "Review"] as const;

function nightsBetween(from: string, to: string) {
  if (!from || !to) return 0;
  const ms = new Date(to).getTime() - new Date(from).getTime();
  return Math.max(0, Math.round(ms / 86_400_000));
}

function BookPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState(2);
  const [villaSlug, setVillaSlug] = useState<string | null>(null);
  const [extras, setExtras] = useState<string[]>([]);
  const [details, setDetails] = useState({ name: "", email: "", requests: "" });
  const [confirmed, setConfirmed] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);


  const nights = nightsBetween(arrival, departure);
  const villa = villas.find((v) => v.slug === villaSlug) ?? null;
  const eligible = useMemo(() => villas.filter((v) => v.guests >= guests), [guests]);

  const extrasTotal = extras.reduce(
    (sum, id) => sum + (bookableExtras.find((e) => e.id === id)?.price ?? 0),
    0,
  );
  const roomTotal = (villa?.price ?? 0) * nights;
  const total = roomTotal + extrasTotal;

  const canContinue = [
    nights > 0,
    Boolean(villa),
    true,
    details.name.trim().length > 1 && details.email.includes("@"),
    true,
  ][step];

  async function submit() {
    if (!villa) return;
    setSaving(true);
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) {
        toast.error("Please sign in to complete your reservation.");
        navigate({ to: "/auth" });
        return;
      }
      const { data, error } = await supabase
        .from("reservations")
        .insert({
          user_id: userData.user.id,
          guest_name: details.name,
          guest_email: details.email,
          villa_slug: villa.slug,
          villa_name: villa.name,
          arrival,
          departure,
          guests,
          extras: extras.map(
            (id) => bookableExtras.find((e) => e.id === id) ?? { id, label: id, price: 0 },
          ),
          requests: details.requests || null,
          total_amount: total,
        })
        .select("confirmation_code")
        .single();
      if (error) throw error;
      setConfirmed(data.confirmation_code);
      toast.success("Reservation requested.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "We couldn't save that reservation.");
    } finally {
      setSaving(false);
    }
  }



  if (confirmed) {
    return (
      <section className="flex min-h-screen items-center justify-center px-6 py-40">
        <div className="max-w-lg text-center">
          <p className="eyebrow text-muted-foreground">Reservation requested</p>
          <h1 className="display mt-5 text-5xl text-foreground md:text-7xl">We'll see you soon.</h1>
          <p className="mt-6 text-muted-foreground">
            Your request for {villa?.name} is with our reservations team. Confirmation number{" "}
            <span className="text-foreground">{confirmed}</span> — a note will reach{" "}
            {details.email} within the hour.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-36 pb-28">
      <Shell>
        <p className="eyebrow text-muted-foreground">Reservations</p>
        <h1 className="display mt-4 text-5xl text-foreground md:text-7xl">Plan your escape.</h1>

        <ol className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-5">
          {steps.map((s, i) => (
            <li
              key={s}
              className={`text-[0.65rem] tracking-[0.24em] uppercase ${
                i === step ? "text-accent" : i < step ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {String(i + 1).padStart(2, "0")} — {s}
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            {step === 0 && (
              <div className="grid gap-8 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Arrival</span>
                  <input
                    type="date"
                    value={arrival}
                    onChange={(e) => setArrival(e.target.value)}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Departure</span>
                  <input
                    type="date"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Guests</span>
                  <input
                    type="number"
                    min={1}
                    max={8}
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                  />
                </label>
                <p className="self-end text-sm text-muted-foreground">
                  {nights > 0 ? `${nights} nights on the island.` : "Minimum stay: two nights."}
                </p>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                {eligible.map((v) => (
                  <button
                    key={v.slug}
                    type="button"
                    onClick={() => setVillaSlug(v.slug)}
                    className={`flex w-full gap-6 border p-4 text-left transition-colors ${
                      villaSlug === v.slug ? "border-accent" : "border-border hover:border-foreground/40"
                    }`}
                  >
                    <img src={v.image} alt={v.name} className="h-28 w-40 shrink-0 object-cover" />
                    <div>
                      <p className="display text-2xl text-foreground">{v.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Sleeps {v.guests} · ${v.price.toLocaleString()} per night
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {bookableExtras.map((x) => {
                  const on = extras.includes(x.id);
                  return (
                    <button
                      key={x.id}
                      type="button"
                      onClick={() =>
                        setExtras(on ? extras.filter((e) => e !== x.id) : [...extras, x.id])
                      }
                      className={`border p-5 text-left transition-colors ${
                        on ? "border-accent" : "border-border hover:border-foreground/40"
                      }`}
                    >
                      <p className="text-foreground">{x.label}</p>
                      <p className="mt-1 text-sm text-muted-foreground">${x.price}</p>
                    </button>
                  );
                })}
              </div>
            )}

            {step === 3 && (
              <div className="max-w-md space-y-6">
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Full name</span>
                  <input
                    value={details.name}
                    onChange={(e) => setDetails({ ...details, name: e.target.value })}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Email</span>
                  <input
                    type="email"
                    value={details.email}
                    onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="block text-sm">
                  <span className="eyebrow text-muted-foreground">Anything we should know</span>
                  <textarea
                    rows={4}
                    value={details.requests}
                    onChange={(e) => setDetails({ ...details, requests: e.target.value })}
                    className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                  />
                </label>
              </div>
            )}

            {step === 4 && (
              <dl className="space-y-4">
                {[
                  ["Dates", `${arrival} → ${departure} (${nights} nights)`],
                  ["Guests", String(guests)],
                  ["Villa", villa?.name ?? "—"],
                  ["Experiences", extras.length ? `${extras.length} added` : "None"],
                  ["Guest", `${details.name} · ${details.email}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border pb-3">
                    <dt className="eyebrow text-muted-foreground">{k}</dt>
                    <dd className="text-sm text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="mt-14 flex gap-3">
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="border border-border px-8 py-4 text-[0.65rem] tracking-[0.24em] uppercase hover:border-foreground/40"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                disabled={!canContinue || saving}
                onClick={() => {
                  if (step === steps.length - 1) {
                    void submit();
                  } else {
                    setStep(step + 1);
                  }
                }}
                className="bg-primary px-10 py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal disabled:opacity-40"
              >
                {step === steps.length - 1
                  ? saving
                    ? "Reserving…"
                    : "Confirm Reservation"
                  : "Continue"}
              </button>

            </div>
          </div>

          <aside className="h-fit border border-border bg-card lg:sticky lg:top-28">
            <img
              src={villa?.image ?? images.villaSunset}
              alt={villa?.name ?? "SOLARA"}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-8">
              <p className="eyebrow text-muted-foreground">Your stay</p>
              <p className="display mt-3 text-3xl">{villa?.name ?? "Choose a villa"}</p>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Nights</dt>
                  <dd>{nights}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Accommodation</dt>
                  <dd>${roomTotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Experiences</dt>
                  <dd>${extrasTotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-base">
                  <dt>Total</dt>
                  <dd>${total.toLocaleString()}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Shell>
    </section>
  );
}
