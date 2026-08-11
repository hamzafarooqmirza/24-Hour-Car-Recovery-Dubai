import { Link } from "@tanstack/react-router";

export function PageHero({ title, subtitle, image, eyebrow }: { title: string; subtitle?: string; image: string; eyebrow?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-28">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
        <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-tight">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:opacity-95">Get Help Now</Link>
          <Link to="/services" className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground hover:bg-card">View Services</Link>
        </div>
      </div>
    </section>
  );
}