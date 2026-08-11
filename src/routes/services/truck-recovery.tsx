import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/truck-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Truck Recovery Dubai | 24 Hour Car Recovery Dubai", description: "Heavy-duty truck and commercial vehicle recovery across Dubai, available around the clock with equipment rated for larger vehicles.", path: "/services/truck-recovery", image: IMG.truckRecovery }),
    links: [{ rel: "canonical", href: "/services/truck-recovery" }],
  }),
  component: TruckRecovery,
});

function TruckRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Truck Recovery (سحب الشاحنات)"
        hero={IMG.truckRecovery}
        description="Trucks, lorries and commercial vehicles need recovery equipment built for the job. Our crews carry rated gear and know how to move heavier vehicles safely across Dubai, day or night."
        benefits={["Recovery equipment rated for trucks and heavier vehicles", "Experienced crews trained on commercial vehicle handling", "Available 24 hours a day for breakdowns and accidents", "Careful coordination for fleet and business vehicles", "Fixed pricing agreed before recovery begins", "Safe transport to your depot, garage or workshop"]}
        why={[
          { title: "Right Equipment", desc: "Trucks and commercial vehicles need heavier-rated gear — we carry it." },
          { title: "Business-Ready", desc: "We work around your fleet's schedule to minimise downtime." },
          { title: "Experienced Crews", desc: "Our team is trained specifically in truck and heavy vehicle recovery." },
        ]}
        faqs={[
          { q: "What size of truck can you recover?", a: "We handle a wide range of trucks and commercial vehicles — call with your vehicle details and location and we'll confirm straight away." },
          { q: "Can you recover a truck with a full load?", a: "In most cases yes. Let our dispatcher know the load details when you call so we can send the right equipment." },
          { q: "Do you work with businesses and fleets?", a: "Yes, we regularly support fleet operators across Dubai with breakdown and accident recovery." },
        ]}
      />
    </SiteLayout>
  );
}
