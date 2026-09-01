import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { images } from "@/data/resort";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign in — Guest Portal | SOLARA" },
      {
        name: "description",
        content:
          "Sign in to your SOLARA guest portal to view reservations, itineraries and concierge messages.",
      },
      { property: "og:title", content: "Guest Portal | SOLARA" },
      { property: "og:description", content: "Your stay, before you arrive." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/portal" });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/portal`,
            data: { full_name: name },
          },
        });
        if (error) throw error;
        toast.success("Account created. Welcome to SOLARA.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
      const { data } = await supabase.auth.getSession();
      if (data.session) navigate({ to: "/portal" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  }

  async function onGoogle() {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error("Google sign-in is unavailable right now.");
      return;
    }
    if (result.redirected) return;
    navigate({ to: "/portal" });
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img
          src={images.villaSunset}
          alt="A villa terrace at sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/25" />
        <p className="display absolute bottom-14 left-12 max-w-sm text-4xl text-primary-foreground">
          Your stay, before you arrive.
        </p>
      </div>

      <div className="flex items-center justify-center px-6 py-28">
        <div className="w-full max-w-sm">
          <p className="eyebrow text-muted-foreground">Guest portal</p>
          <h1 className="display mt-4 text-5xl text-foreground">
            {mode === "signin" ? "Welcome back." : "Create your account."}
          </h1>

          <button
            type="button"
            onClick={onGoogle}
            className="mt-10 w-full border border-border py-4 text-[0.65rem] tracking-[0.24em] uppercase transition-colors hover:border-foreground/40"
          >
            Continue with Google
          </button>

          <div className="my-8 flex items-center gap-4 text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
            <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={onSubmit}>
            {mode === "signup" && (
              <label className="mb-6 block text-sm">
                <span className="eyebrow text-muted-foreground">Full name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
                />
              </label>
            )}
            <label className="block text-sm">
              <span className="eyebrow text-muted-foreground">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
              />
            </label>
            <label className="mt-6 block text-sm">
              <span className="eyebrow text-muted-foreground">Password</span>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
              />
            </label>
            <button
              type="submit"
              disabled={busy}
              className="mt-10 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal disabled:opacity-60"
            >
              {busy ? "One moment…" : mode === "signin" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-6 text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            {mode === "signin"
              ? "First time with us? Create an account"
              : "Already a guest? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
