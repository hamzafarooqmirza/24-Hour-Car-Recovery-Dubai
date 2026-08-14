import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/car-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Car Recovery Dubai | 24 Hour Car Recovery Dubai", description: "24-hour car recovery across Dubai. Breakdowns, flat batteries and non-drivable cars collected and moved safely, any time of day or night.", path: "/services/car-recovery", image: IMG.carRecovery }),
    links: [{ rel: "canonical", href: "/services/car-recovery" }],
  }),
  component: CarRecovery,
});

function CarRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Car Recovery (سحب السيارات)"
        hero={IMG.carRecovery}
        description="Whether your car has broken down, won't start, or simply needs moving from one place to another, our Dubai recovery team can be with you fast. We handle saloons, hatchbacks, SUVs and family cars with equal care."
        benefits={["Dispatch available 24 hours a day, every day of the year", "Typical arrival time of 20-40 minutes across Dubai", "Drivers track your exact location by GPS", "Suitable for breakdowns, flat batteries and non-starters", "Upfront pricing agreed before we set off", "Careful loading and secure transport every time"]}
        why={[
          { title: "Always Available", desc: "Call any hour of the day or night — our line never closes." },
          { title: "Quick to Arrive", desc: "The closest available recovery vehicle is sent as soon as you call." },
          { title: "Fair Pricing", desc: "You'll know the cost before any work begins, with nothing hidden." },
        ]}
        faqs={[
          { q: "Can you recover my car in the middle of the night?", a: "Yes, our car recovery service in Dubai runs 24 hours a day, including nights, weekends and public holidays." },
          { q: "How long will I wait for a recovery vehicle?", a: "Most customers in Dubai are seen within 20 to 40 minutes, depending on traffic and your exact location." },
          { q: "Do you recover cars that won't start at all?", a: "Yes — whether it's a flat battery, mechanical fault or accident damage, we can load and transport your car safely." },
        ]}
      />
    </SiteLayout>
  );
}
