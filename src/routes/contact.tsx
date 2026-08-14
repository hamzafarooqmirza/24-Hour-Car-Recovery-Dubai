import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { IMG, PHONE, PHONE_DISPLAY, WHATSAPP, EMAIL, ADDRESS } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({ title: "Contact Us — 24 Hour Car Recovery Dubai", description: "Call, WhatsApp or message 24 Hour Car Recovery Dubai 24/7 for car, truck, machine and bike recovery across Dubai.", path: "/contact", image: IMG.hero }),
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Get help, 24/7" subtitle="Pick up the phone or message us — we'll dispatch the nearest available vehicle straight away." image={IMG.hero} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="grid gap-4">
            {[
              { i: Phone, t: "Phone (24/7)", v: PHONE_DISPLAY, href: `tel:${PHONE}` },
              { i: MessageCircle, t: "WhatsApp", v: "Message us instantly", href: WHATSAPP },
              { i: Mail, t: "Email", v: EMAIL, href: `mailto:${EMAIL}` },
              { i: MapPin, t: "Location", v: ADDRESS, href: "https://www.google.com/maps/search/?api=1&query=25.1972,55.2744" },
            ].map((c) => (
              <a key={c.t} href={c.href} className="flex items-start gap-4 rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl hover:border-primary/50 transition">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary shrink-0"><c.i className="h-6 w-6" /></span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.t}</span>
                  <span className="mt-1 block text-lg font-bold">{c.v}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border aspect-[4/3]">
            <iframe title="Our location in Dubai" src="https://www.openstreetmap.org/export/embed.html?bbox=55.2544%2C25.1772%2C55.2944%2C25.2172&layer=mapnik&marker=25.1972%2C55.2744" className="h-full w-full" loading="lazy" />
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteLayout>
  );
}
