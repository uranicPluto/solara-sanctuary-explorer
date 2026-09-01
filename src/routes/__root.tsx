import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-muted-foreground">The tide is changing</p>
        <h1 className="display mt-6 text-5xl text-foreground">This path leads nowhere.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for has drifted. Let us take you back to the island.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex bg-primary px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase"
        >
          Return to SOLARA
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-muted-foreground">A moment of stillness</p>
        <h1 className="display mt-6 text-4xl text-foreground">This page didn't load.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Something interrupted the connection. Try again, or return to the island.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-primary px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] text-primary-foreground uppercase"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-foreground/25 px-8 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] uppercase"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SOLARA — A world away from ordinary" },
      {
        name: "description",
        content:
          "SOLARA is a private tropical sanctuary in the Indian Ocean: 24 villas, seven dining experiences, a wellness island and 40+ experiences.",
      },
      { name: "author", content: "SOLARA" },
      { property: "og:title", content: "SOLARA — A world away from ordinary" },
      {
        property: "og:description",
        content: "A private tropical sanctuary created for extraordinary escapes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300&family=Karla:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
}
