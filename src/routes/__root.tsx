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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "24 Hour Car Recovery Dubai — Car, Truck & Bike Recovery" },
      { name: "description", content: "24 Hour Car Recovery Dubai offers round-the-clock car recovery, truck recovery, machine recovery, bike recovery, battery jump-start and flat tyre assistance across Dubai." },
      { name: "theme-color", content: "#0a0a14" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "24 Hour Car Recovery Dubai" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "24 Hour Car Recovery Dubai — Car, Truck & Bike Recovery" },
      { name: "twitter:title", content: "24 Hour Car Recovery Dubai — Car, Truck & Bike Recovery" },
      { property: "og:description", content: "24 Hour Car Recovery Dubai offers round-the-clock car recovery, truck recovery, machine recovery, bike recovery, battery jump-start and flat tyre assistance across Dubai." },
      { name: "twitter:description", content: "24 Hour Car Recovery Dubai offers round-the-clock car recovery, truck recovery, machine recovery, bike recovery, battery jump-start and flat tyre assistance across Dubai." },
      { property: "og:image", content: "/og-image.webp" },
      { name: "twitter:image", content: "/og-image.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/webp", href: "/favicon.webp" },
      { rel: "apple-touch-icon", href: "/favicon.webp" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutomotiveBusiness",
          name: "24 Hour Car Recovery Dubai",
          telephone: "+971562820464",
          email: "sajjadq729@gmail.com",
          areaServed: "Dubai",
          address: { "@type": "PostalAddress", addressCountry: "AE", addressLocality: "Dubai" },
          openingHours: "Mo-Su 00:00-23:59",
        }),
      },
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
