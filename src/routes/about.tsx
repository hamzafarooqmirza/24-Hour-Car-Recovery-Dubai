import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({ title: "About Us — 24 Hour Car Recovery Dubai", description: "Learn about 24 Hour Car Recovery Dubai, a Dubai-based recovery team covering cars, trucks, machinery and bikes around the clock.", path: "/about", image: IMG.hero }),
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Dubai's round-the-clock recovery team" subtitle="24 Hour Car Recovery Dubai was built around one idea — when your vehicle lets you down, help should arrive fast, at any hour." image={IMG.hero} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
          <img src={IMG.carRecovery} alt="24 Hour Car Recovery Dubai vehicle on a recovery job" className="h-full w-full object-cover aspect-[4/3]" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black">Our Story</h2>
          <p className="mt-4 text-muted-foreground">We started with a simple goal: give Dubai drivers a recovery service they can rely on at any hour, without surprises on price or waiting times. Today we cover cars, trucks, heavy machinery and bikes, plus quick fixes like jump-starts and flat tyres.</p>
          <p className="mt-4 text-muted-foreground">Every job, big or small, gets the same level of care — from a flat tyre on the school run to recovering a truck from a busy site.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-3">
        {[
          { t: "Our Mission", d: "Deliver fast, honest, professional recovery help to every driver in Dubai." },
          { t: "Our Promise", d: "Transparent pricing, no hidden fees, and a real person on every call." },
          { t: "Our Team", d: "Trained operators who treat your vehicle like their own." },
        ].map((b) => (
          <div key={b.t} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-primary">{b.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}
