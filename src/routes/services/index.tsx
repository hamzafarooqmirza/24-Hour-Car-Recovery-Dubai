import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ServiceCard } from "@/components/site/ServiceCard";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { SERVICES } from "@/lib/services";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: pageMeta({ title: "Our Services — 24 Hour Car Recovery Dubai", description: "Car recovery, truck recovery, machine recovery, bike recovery, battery jump-start and flat tyre assistance, available across Dubai around the clock.", path: "/services", image: IMG.hero }),
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Services" title="Every kind of recovery, one call away" subtitle="From everyday cars to trucks and heavy machinery, our Dubai-based team is equipped and ready around the clock." image={IMG.hero} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.slug} to={s.slug} image={s.image} title={s.title} titleAr={s.titleAr} desc={s.desc} />)}
        </div>
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}
