import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ to, image, title, titleAr, desc }: { to: string; image: string; title: string; titleAr?: string; desc: string }) {
  return (
    <Link to={to} className="group overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-xl transition hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">
          {title}
          {titleAr && <span dir="rtl" lang="ar" className="ml-2 font-normal text-muted-foreground">({titleAr})</span>}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}