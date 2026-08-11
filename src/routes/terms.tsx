import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: pageMeta({ title: "Terms & Conditions — 24 Hour Car Recovery Dubai", description: "The terms governing the use of 24 Hour Car Recovery Dubai services.", path: "/terms" }),
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" image={IMG.carRecovery} />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-muted-foreground space-y-4">
        <p>By booking or using our services, you agree to the following terms.</p>
        <h2 className="text-2xl font-bold text-foreground">Service</h2>
        <p>We provide car recovery, truck recovery, machine recovery, bike recovery, battery jump-start and flat tyre assistance across Dubai. Pricing is confirmed before dispatch.</p>
        <h2 className="text-2xl font-bold text-foreground">Payment</h2>
        <p>Payment is due on completion via cash, card or bank transfer unless otherwise agreed.</p>
        <h2 className="text-2xl font-bold text-foreground">Liability</h2>
        <p>We take reasonable care with every vehicle we handle. Any pre-existing damage should be noted at the time of pickup.</p>
      </article>
    </SiteLayout>
  );
}
