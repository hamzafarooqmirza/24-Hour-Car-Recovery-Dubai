import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/battery-jump-start")({
  head: () => ({
    meta: pageMeta({ title: "Battery Jump-Start Dubai | 24 Hour Car Recovery Dubai", description: "On-the-spot battery jump-start service across Dubai. We'll get your engine running again in minutes, wherever you're parked.", path: "/services/battery-jump-start", image: IMG.batteryJumpStart }),
    links: [{ rel: "canonical", href: "/services/battery-jump-start" }],
  }),
  component: BatteryJumpStart,
});

function BatteryJumpStart() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Battery Jump-Start"
        hero={IMG.batteryJumpStart}
        description="A flat battery doesn't need to ruin your day. Our team comes straight to your location with the right equipment to jump-start your car and get you moving again, usually within minutes."
        benefits={["Fast callout for flat and weak batteries", "Suitable for cars, vans and light vehicles", "Available 24 hours a day across Dubai", "No need to wait for a full recovery vehicle", "Clear, upfront pricing before we start", "Advice on whether a battery replacement is needed"]}
        why={[
          { title: "Quick Fix", desc: "Most jump-starts are completed within minutes of arrival." },
          { title: "Comes To You", desc: "No towing needed — we bring the equipment to your location." },
          { title: "Honest Advice", desc: "We'll let you know if your battery needs replacing, no pressure." },
        ]}
        faqs={[
          { q: "How long does a jump-start take?", a: "Once our team arrives, most jump-starts are completed within a few minutes." },
          { q: "What if my car won't start even after a jump-start?", a: "Our team can assess the issue on the spot and arrange recovery to a garage if needed." },
          { q: "Is this service available anywhere in Dubai?", a: "Yes, our battery jump-start service covers Dubai around the clock." },
        ]}
      />
    </SiteLayout>
  );
}
