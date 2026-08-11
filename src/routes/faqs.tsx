import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

const faqs = [
  { q: "Are you really available 24/7?", a: "Yes — our phone and WhatsApp lines are answered day or night, including weekends and public holidays." },
  { q: "How quickly can you arrive?", a: "Our average response time across Dubai is 20 to 40 minutes, depending on your location and traffic." },
  { q: "How much does recovery cost?", a: "Call us with your location and vehicle details and we'll give you an upfront fixed price — no hidden fees." },
  { q: "What kinds of vehicles do you recover?", a: "Cars, trucks, heavy machinery and bikes, plus battery jump-starts and flat tyre assistance." },
  { q: "Do you accept card payments?", a: "Yes — we accept cash, card and bank transfer on the spot." },
  { q: "Do you cover all of Dubai?", a: "Yes, our recovery vehicles cover every area of Dubai, 24 hours a day." },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: pageMeta({ title: "FAQs — 24 Hour Car Recovery Dubai", description: "Answers to common questions about our 24-hour car, truck, machine and bike recovery services in Dubai.", path: "/faqs", image: IMG.hero }),
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions" image={IMG.hero} />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16"><FAQ items={faqs} /></section>
      <EmergencyCTA />
    </SiteLayout>
  );
}
