import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: pageMeta({ title: "Gallery — 24 Hour Car Recovery Dubai", description: "Photos of our recovery fleet and roadside assistance work across Dubai.", path: "/gallery", image: IMG.fleet }),
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const images = [
    IMG.hero, IMG.carRecovery, IMG.truckRecovery, IMG.machineRecovery,
    IMG.bikeRecovery, IMG.bikeRecoveryAlt, IMG.batteryJumpStart, IMG.flatTyres, IMG.fleet, IMG.commercialFleet,
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Our work, on the road" subtitle="A look at our fleet and the jobs we handle every day across Dubai." image={IMG.fleet} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-3xl border border-border shadow-xl aspect-[4/3]">
              <img src={src} alt={`24 Hour Car Recovery Dubai work photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
