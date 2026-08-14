import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { ContactForm } from "@/components/site/ContactForm";
import { SERVICES } from "@/lib/services";
import { IMG, PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { Phone, MessageCircle, Clock, Zap, Users, Banknote, ShieldCheck, Star, PhoneCall, Truck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "24 Hour Car Recovery Dubai — Car, Truck, Machine & Bike Recovery",
      description: "Dubai's round-the-clock recovery team for cars, trucks, machinery and bikes, plus battery jump-starts and flat tyre help. Fast response, fair prices.",
      path: "/",
      image: IMG.hero,
    }),
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="24 Hour Car Recovery Dubai tow truck recovering a vehicle" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Available 24/7 · All of Dubai
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
            24 Hour<br />
            <span className="bg-gradient-to-r from-primary to-green-200 bg-clip-text text-transparent">Car Recovery</span><br />
            Dubai
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Stuck on the road anywhere in Dubai? Our team is on call day and night for cars, trucks, machinery and bikes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/40 hover:scale-[1.02] transition">
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.02] transition">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: "24/7", v: "Always Open" },
              { k: "20-40min", v: "Avg Response" },
              { k: "Dubai-Wide", v: "Coverage" },
              { k: "5★", v: "Customer Rated" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/60 px-4 py-3 backdrop-blur-xl">
                <div className="text-2xl font-black text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Our Services</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">View all services →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} to={s.slug} image={s.image} title={s.title} titleAr={s.titleAr} desc={s.desc} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">Why Choose Us</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Straightforward pricing, dependable crews, and a team that treats every vehicle with care.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Clock, t: "Available 24/7", d: "Day or night, weekend or holiday — we're always one call away." },
            { i: Zap, t: "Fast Response", d: "Average 20-40min arrival anywhere across Dubai." },
            { i: Users, t: "Experienced Team", d: "Trained operators who handle your vehicle with the utmost care." },
            { i: Banknote, t: "Affordable Prices", d: "Fair, transparent pricing with no hidden fees, ever." },
            { i: ShieldCheck, t: "Reliable Service", d: "Well-equipped vehicles and a track record you can trust." },
            { i: Star, t: "Customer Satisfaction", d: "Consistently high ratings from drivers across Dubai." },
          ].map((w) => (
            <div key={w.t} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl transition hover:border-primary/50">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary"><w.i className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-bold">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">How It Works</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", i: PhoneCall, t: "Call Us", d: "Phone or WhatsApp our 24/7 line and tell us your location." },
            { n: "02", i: Truck, t: "We Dispatch", d: "Our nearest available vehicle is sent out within minutes." },
            { n: "03", i: CheckCircle2, t: "Problem Solved", d: "We get you back on the road or move your vehicle safely." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl">
              <div className="absolute -top-4 right-6 text-5xl font-black text-primary/30">{s.n}</div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><s.i className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <EmergencyCTA />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">What Our Customers Say</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Ahmed Al Suwaidi", l: "Deira, Dubai", t: "Car wouldn't start late at night near Deira — they arrived quickly and got me home safely. Really professional team." },
            { n: "Priya Nair", l: "Jumeirah, Dubai", t: "Flat tyre on Sheikh Zayed Road and they had me sorted in no time. Fair price, friendly driver." },
            { n: "Hassan Ali", l: "Al Quoz, Dubai", t: "Needed a truck recovered from a site in Al Quoz — smooth job from start to finish. Would call again." },
          ].map((r) => (
            <div key={r.n} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl">
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-sm text-muted-foreground">"{r.t}"</p>
              <div className="mt-5 text-sm font-semibold">{r.n}<span className="text-muted-foreground"> · {r.l}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">Our Fleet in Action</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[IMG.hero, IMG.carRecovery, IMG.truckRecovery, IMG.fleet, IMG.batteryJumpStart, IMG.flatTyres].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border aspect-square">
              <img src={src} alt={`24 Hour Car Recovery Dubai fleet photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition hover:scale-105 duration-700" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary">View full gallery</Link>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">Need help right now?</h2>
          <p className="mt-4 text-muted-foreground">Send us a message or call directly. Our dispatchers are standing by 24/7.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border aspect-[4/3]">
            <iframe title="Our location in Dubai" src="https://www.openstreetmap.org/export/embed.html?bbox=55.2544%2C25.1772%2C55.2944%2C25.2172&layer=mapnik&marker=25.1972%2C55.2744" className="h-full w-full" loading="lazy" />
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteLayout>
  );
}
