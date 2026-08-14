import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/bike-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Bike Recovery Dubai | 24 Hour Car Recovery Dubai", description: "Motorbike recovery across Dubai after a breakdown, accident or flat battery, with secure loading for the ride home.", path: "/services/bike-recovery", image: IMG.bikeRecovery }),
    links: [{ rel: "canonical", href: "/services/bike-recovery" }],
  }),
  component: BikeRecovery,
});

function BikeRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Bike Recovery (سحب الدراجات النارية)"
        hero={IMG.bikeRecovery}
        description="Motorbikes need a gentler approach to recovery. Our team secures your bike properly before transport, so it arrives at the garage or your home in the same condition it left the roadside."
        benefits={["Secure strapping designed to protect the bike's frame and bodywork", "Available 24 hours a day across Dubai", "Suitable for breakdowns, flat batteries and accidents", "Transport to a garage, workshop or home address", "Upfront pricing before we dispatch a vehicle", "Careful, experienced loading every time"]}
        why={[
          { title: "Gentle Handling", desc: "Bikes are secured with care to avoid scratches or frame damage." },
          { title: "Fast Response", desc: "We know a bike stranded roadside needs quick, safe attention." },
          { title: "Flexible Drop-Off", desc: "We'll take your bike to a garage, workshop or your home." },
        ]}
        faqs={[
          { q: "Will my bike be damaged during transport?", a: "No — we use secure straps and correct loading technique designed specifically for motorbikes." },
          { q: "Can you recover a bike after an accident?", a: "Yes, we recover bikes following breakdowns, flat batteries and accidents across Dubai." },
          { q: "Is bike recovery available at night?", a: "Yes, our line and recovery vehicles operate 24 hours a day, every day." },
        ]}
      />
    </SiteLayout>
  );
}
