import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: pageMeta({ title: "Privacy Policy — 24 Hour Car Recovery Dubai", description: "How 24 Hour Car Recovery Dubai collects, uses and protects your personal information.", path: "/privacy-policy" }),
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" image={IMG.hero} />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 text-muted-foreground space-y-4">
        <p>We respect your privacy. This policy explains what data we collect when you contact 24 Hour Car Recovery Dubai and how we use it.</p>
        <h2 className="text-2xl font-bold text-foreground">What we collect</h2>
        <p>When you call, message or submit our contact form, we may collect your name, phone number, location and details of your request — used only to dispatch help and follow up about the job.</p>
        <h2 className="text-2xl font-bold text-foreground">How we use it</h2>
        <p>We use your information solely to provide our recovery and roadside assistance services. We never sell or share your data with third parties.</p>
        <h2 className="text-2xl font-bold text-foreground">Your rights</h2>
        <p>In accordance with UAE data protection law, you may request access to, correction of, or deletion of your personal data at any time by contacting us at sajjadq729@gmail.com.</p>
      </article>
    </SiteLayout>
  );
}
