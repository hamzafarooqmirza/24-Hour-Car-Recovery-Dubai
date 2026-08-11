import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: pageMeta({ title: "Service Areas — 24 Hour Car Recovery Dubai", description: "We cover every district of Dubai — from Deira and Downtown to Jumeirah, Al Quoz and beyond — with recovery available 24/7.", path: "/service-areas", image: IMG.hero }),
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: AreasPage,
});

const areas = ["Downtown Dubai", "Deira", "Bur Dubai", "Jumeirah", "Al Quoz", "Business Bay", "Dubai Marina", "Al Barsha", "Mirdif", "Al Rashidiya", "Sheikh Zayed Road", "Dubai-wide on request"];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Service Areas" title="Covering all of Dubai, day and night" subtitle="Based in Dubai and covering every district of the city, with recovery available 24 hours a day." image={IMG.hero} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl">
              <MapPin className="h-5 w-5 text-primary" /> <span className="font-semibold">{a}</span>
            </div>
          ))}
        </div>
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}
