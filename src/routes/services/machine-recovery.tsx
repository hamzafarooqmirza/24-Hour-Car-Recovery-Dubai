import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services/machine-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Machine Recovery Dubai | 24 Hour Car Recovery Dubai", description: "Recovery and transport for construction and heavy machinery across Dubai, moved safely to your site, depot or workshop.", path: "/services/machine-recovery", image: IMG.machineRecovery }),
    links: [{ rel: "canonical", href: "/services/machine-recovery" }],
  }),
  component: MachineRecovery,
});

function MachineRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Machine Recovery (نقل المعدات الثقيلة)"
        hero={IMG.machineRecovery}
        description="When heavy machinery breaks down or needs relocating, moving it safely takes the right equipment and experience. We recover and transport construction and industrial machines to wherever they're needed across Dubai."
        benefits={["Suited to construction and industrial machinery", "Secure loading and tie-down for the journey", "Available around the clock for site emergencies", "Coordinated delivery to your depot or workshop", "Clear pricing agreed before we begin", "Careful handling to avoid further damage"]}
        why={[
          { title: "Specialist Handling", desc: "Heavy machinery is loaded and secured by an experienced crew." },
          { title: "Site-Ready", desc: "We work with your site team to schedule collection with minimal disruption." },
          { title: "Reliable Transport", desc: "Your machinery reaches its destination safely and on time." },
        ]}
        faqs={[
          { q: "What kind of machinery can you move?", a: "We handle a range of construction and industrial equipment — tell us the make, size and weight when you call and we'll confirm the right vehicle." },
          { q: "Can you collect from a construction site?", a: "Yes, we regularly collect and deliver machinery to and from active sites across Dubai." },
          { q: "Is machine recovery available at short notice?", a: "Yes, our dispatch line is open 24 hours a day for urgent machinery recovery requests." },
        ]}
      />
    </SiteLayout>
  );
}
