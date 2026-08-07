"use client";

import { Phone, MessageCircle } from "lucide-react";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
      <div className="grid grid-cols-2 border-t border-bg-line bg-bg/95 backdrop-blur-md">
        <a
          href={PHONE_TEL}
          className="flex items-center justify-center gap-2 py-4 text-ink font-semibold text-sm border-r border-bg-line active:bg-bg-card transition"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Llamar
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-[#1a1206] font-semibold text-sm bg-gold active:bg-gold-light transition"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
