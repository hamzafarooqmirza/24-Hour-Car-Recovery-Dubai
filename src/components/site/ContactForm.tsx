import { useState } from "react";
import { WHATSAPP } from "@/lib/assets";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hi, I need ${data.get("service") || "assistance"}.%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0ALocation: ${data.get("location")}%0ADetails: ${data.get("message")}`;
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
    setSent(true);
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-border bg-card/60 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
      <div className="grid gap-4 md:grid-cols-2">
        <input required name="name" placeholder="Your name" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
        <input required name="phone" placeholder="Phone number" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      </div>
      <input name="location" placeholder="Your location" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      <input name="service" defaultValue={defaultService} placeholder="Service required" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      <textarea name="message" rows={4} placeholder="Describe your situation" className="rounded-xl border border-border bg-input/60 px-4 py-3 text-sm outline-none focus:border-primary" />
      <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover:opacity-95">
        {sent ? "Opening WhatsApp…" : "Send Request via WhatsApp"}
      </button>
      <p className="text-xs text-muted-foreground">For immediate help, call us 24/7. We respond within minutes.</p>
    </form>
  );
}
