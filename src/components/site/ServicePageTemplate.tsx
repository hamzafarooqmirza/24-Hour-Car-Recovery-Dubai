import { PageHero } from "./PageHero";
import { ContactForm } from "./ContactForm";
import { FAQ } from "./FAQ";
import { EmergencyCTA } from "./EmergencyCTA";
import { Check } from "lucide-react";

export function ServicePageTemplate({
  title, eyebrow, hero, description, benefits, why, faqs,
}: {
  title: string; eyebrow: string; hero: string; description: string;
  benefits: string[]; why: { title: string; desc: string }[]; faqs: { q: string; a: string }[];
}) {
  return (
    <>
      <PageHero title={title} eyebrow={eyebrow} subtitle={description} image={hero} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
          <img src={hero} alt={title} className="h-full w-full object-cover aspect-[4/3]" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black">Professional {title}</h2>
          <p className="mt-4 text-muted-foreground">{description}</p>
          <ul className="mt-6 grid gap-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary"><Check className="h-4 w-4" /></span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <h2 className="text-3xl md:text-4xl font-black text-center">Why Choose Us</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w) => (
            <div key={w.title} className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-primary">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <EmergencyCTA />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-black text-center">Frequently Asked Questions</h2>
        <div className="mt-10"><FAQ items={faqs} /></div>
      </section>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-black text-center">Request This Service</h2>
        <p className="mt-3 text-center text-muted-foreground">Tell us where you are — we'll be there fast.</p>
        <div className="mt-8"><ContactForm defaultService={title} /></div>
      </section>
    </>
  );
}