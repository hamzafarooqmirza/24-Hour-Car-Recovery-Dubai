import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-card/60 backdrop-blur-xl">
      {items.map((it, i) => (
        <button key={i} type="button" onClick={() => setOpen(open === i ? null : i)} className="w-full text-left">
          <div className="flex items-center justify-between gap-4 px-6 py-5">
            <span className="font-semibold">{it.q}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 transition ${open === i ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
          </div>
          {open === i && <p className="px-6 pb-6 text-sm text-muted-foreground">{it.a}</p>}
        </button>
      ))}
    </div>
  );
}