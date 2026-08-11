import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/assets";

export function EmergencyCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/20 via-card to-card p-8 md:p-14 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">24/7 Emergency</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-black">Stuck on the road? We're 5 minutes away.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Fast, reliable roadside assistance across the UAE. Call now or message us on WhatsApp — help is on the way.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/40 hover:scale-[1.02] transition">
            <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.02] transition">
            <MessageCircle className="h-5 w-5" /> WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}