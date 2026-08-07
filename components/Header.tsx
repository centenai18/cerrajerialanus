"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Marcas", href: "#marcas" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="container-custom">
        <div
          className={`relative flex items-center justify-between gap-4 h-14 sm:h-16 pl-5 pr-2.5 sm:pr-2.5 rounded-full transition-colors duration-300 ${
            scrolled
              ? "bg-bg/80 backdrop-blur-xl border border-bg-line shadow-[0_10px_30px_-14px_rgba(0,0,0,0.25)]"
              : "bg-bg/40 backdrop-blur-md border border-black/5"
          }`}
        >
          {/* Logo */}
          <a
            href="#inicio"
            className="font-display text-xl tracking-wider leading-none flex-shrink-0"
          >
            <span className="text-gold">CERRAJERÍA</span>{" "}
            <span className="text-ink">LANÚS</span>
          </a>

          {/* Nav desktop (centrado) */}
          <nav className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-soft hover:text-gold transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-2">
            <a
              href={PHONE_TEL}
              className="hidden md:inline-flex items-center gap-2 px-3.5 h-10 rounded-full text-ink-soft hover:text-gold text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold h-10 px-4 sm:px-5 text-sm"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Escribir</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-ink rounded-full hover:bg-white/5 transition-colors"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="rounded-2xl bg-bg/90 backdrop-blur-xl border border-bg-line p-2 flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-ink-soft hover:text-gold hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
