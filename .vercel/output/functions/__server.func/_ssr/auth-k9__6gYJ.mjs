import { r as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-dm4ECYnf.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { u as images } from "./router-h4DHMmsX.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-k9__6gYJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		...opts,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session) navigate({ to: "/portal" });
		});
	}, [navigate]);
	async function onSubmit(e) {
		e.preventDefault();
		setBusy(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: `${window.location.origin}/portal`,
						data: { full_name: name }
					}
				});
				if (error) throw error;
				toast.success("Account created. Welcome to SOLARA.");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
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
		const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
		if (result.error) {
			toast.error("Google sign-in is unavailable right now.");
			return;
		}
		if (result.redirected) return;
		navigate({ to: "/portal" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative hidden lg:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.villaSunset,
					alt: "A villa terrace at sunset",
					className: "h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display absolute bottom-14 left-12 max-w-sm text-4xl text-primary-foreground",
					children: "Your stay, before you arrive."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center px-6 py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: "Guest portal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-4 text-5xl text-foreground",
						children: mode === "signin" ? "Welcome back." : "Create your account."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onGoogle,
						className: "mt-10 w-full border border-border py-4 text-[0.65rem] tracking-[0.24em] uppercase transition-colors hover:border-foreground/40",
						children: "Continue with Google"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "my-8 flex items-center gap-4 text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
							" or ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						children: [
							mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mb-6 block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: name,
									onChange: (e) => setName(e.target.value),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									required: true,
									value: email,
									onChange: (e) => setEmail(e.target.value),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "mt-6 block text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-muted-foreground",
									children: "Password"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "password",
									required: true,
									minLength: 6,
									value: password,
									onChange: (e) => setPassword(e.target.value),
									className: "mt-2 w-full border-b border-border bg-transparent py-2 focus:border-accent focus:outline-none"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: busy,
								className: "mt-10 w-full bg-primary py-4 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-charcoal disabled:opacity-60",
								children: busy ? "One moment…" : mode === "signin" ? "Sign In" : "Create Account"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(mode === "signin" ? "signup" : "signin"),
						className: "mt-6 text-sm text-muted-foreground underline-offset-4 hover:underline",
						children: mode === "signin" ? "First time with us? Create an account" : "Already a guest? Sign in"
					})
				]
			})
		})]
	});
}
//#endregion
export { AuthPage as component };
