import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/flat-tyres")({
  head: () => ({
    meta: pageMeta({ title: "Flat Tyres Dubai | 24 Hour Car Recovery Dubai", description: "Roadside flat tyre assistance across Dubai. Quick tyre changes so you're back on the road with minimal delay.", path: "/services/flat-tyres", image: IMG.flatTyres }),
    links: [{ rel: "canonical", href: "/services/flat-tyres" }],
  }),
  component: FlatTyres,
});

function FlatTyres() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Flat Tyres (إصلاح الإطارات)"
        hero={IMG.flatTyres}
        description="A flat tyre is one of the quickest fixes we handle. Our team comes to your location, fits your spare or a suitable replacement, and has you back on the road with minimal delay."
        benefits={["Fast roadside tyre changes across Dubai", "Suitable for cars, SUVs and light vans", "Available 24 hours a day, including nights and holidays", "No need to drive on a damaged tyre", "Upfront pricing before work starts", "Safe roadside working practices at all times"]}
        why={[
          { title: "Speedy Service", desc: "Most flat tyre call-outs are resolved quickly, right where you've stopped." },
          { title: "Safety First", desc: "Our team works safely at the roadside so you don't have to." },
          { title: "No Guesswork", desc: "You'll know the price before we touch your vehicle." },
        ]}
        faqs={[
          { q: "Do I need to have a spare tyre?", a: "It helps, but if you don't have a usable spare our team can advise on the best next step." },
          { q: "How long does a flat tyre call-out take?", a: "Once our team arrives, most tyre changes are completed within 20 to 30 minutes." },
          { q: "Is flat tyre assistance available at night?", a: "Yes, our team is available 24 hours a day across Dubai." },
        ]}
      />
    </SiteLayout>
  );
}
