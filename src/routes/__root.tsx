import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { MouseSpot } from "@/components/mouse-spot";
import { ScrollProgress } from "@/components/scroll-progress";
import { SkyLayer } from "@/components/sky-layer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--paper)] px-4">
      <div className="max-w-md text-center rounded-2xl border border-[var(--line)] bg-[var(--paper-deep)] p-8" style={{ boxShadow: "0 4px 16px rgba(14,26,58,0.1)" }}>
        <h1 className="font-display text-7xl font-bold text-[var(--ink)]">404</h1>
        <h2 className="mt-4 font-display text-xl font-bold text-[var(--ink)]">Page not found</h2>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          The page you're looking for doesn't exist or has wandered off into the clouds.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Go home →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--paper)] px-4">
      <div className="max-w-md text-center rounded-2xl border border-[var(--line)] bg-[var(--paper-deep)] p-8" style={{ boxShadow: "0 4px 16px rgba(14,26,58,0.1)" }}>
        <h1 className="font-display text-xl font-bold tracking-tight text-[var(--ink)]">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          Something went sideways. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary px-4 py-2 text-sm"
          >
            Try again
          </button>
          <a
            href="/"
            className="btn-secondary px-4 py-2 text-sm"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SkyLayer />
      <MouseSpot />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10 grid-bg">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
