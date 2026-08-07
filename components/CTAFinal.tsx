"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Navigation,
  Star,
  ExternalLink,
  Wrench,
  Store,
} from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  UBICACIONES,
  HOURS,
  AREA,
  RATING,
  REVIEWS_COUNT,
} from "@/lib/contact";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const ICONO_UBICACION = { taller: Wrench, local: Store } as const;

export default function CTAFinal() {
  const [activa, setActiva] = useState(UBICACIONES[0].id);
  const ubicacion =
    UBICACIONES.find((u) => u.id === activa) ?? UBICACIONES[0];

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gold/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Columna izquierda: copy + CTAs + confianza */}
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <span className="eyebrow mb-4">Contacto</span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-[0.95] balance">
              <span className="text-gradient">¿NECESITÁS UN</span>
              <br />
              <span className="gold-gradient">CERRAJERO?</span>
            </h2>

            <p className="mt-5 text-ink-soft text-lg max-w-md leading-relaxed balance">
              Escribinos o llamanos. Respondemos rápido y vamos hasta donde
              estás, en {AREA}.
            </p>

            {/* Chips de confianza */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <span className="pill">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" aria-hidden="true" />
                {RATING} · {REVIEWS_COUNT} reseñas
              </span>
              <span className="pill">
                <Wrench className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                Taller propio
              </span>
              <span className="pill">
                <Navigation className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                Atención a domicilio
              </span>
              <span className="pill">
                <Clock className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
                Respuesta rápida
              </span>
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold btn-lg"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Escribir por WhatsApp
              </a>
              <a href={PHONE_TEL} className="btn btn-ghost btn-lg">
                <Phone className="w-5 h-5" aria-hidden="true" />
                Llamar ahora
              </a>
            </div>
          </motion.div>

          {/* Columna derecha: card con mapa conmutable + datos */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card card-glow overflow-hidden"
          >
            {/* Selector de local: un solo iframe que cambia de origen */}
            <div
              className="flex gap-1 p-1 m-3 mb-0 rounded-xl bg-bg/60 border border-bg-line"
              role="group"
              aria-label="Elegir qué local ver en el mapa"
            >
              {UBICACIONES.map((u) => {
                const Icono = ICONO_UBICACION[u.id];
                const seleccionada = u.id === activa;
                return (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setActiva(u.id)}
                    aria-pressed={seleccionada}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition ${
                      seleccionada
                        ? "bg-gold/15 text-gold border border-gold/30"
                        : "text-ink-dim border border-transparent hover:text-ink hover:bg-white/[0.03]"
                    }`}
                  >
                    <Icono className="w-4 h-4" aria-hidden="true" />
                    {u.nombreCorto}
                  </button>
                );
              })}
            </div>

            <div className="relative h-56 sm:h-64 w-full mt-3">
              <iframe
                key={ubicacion.id}
                src={ubicacion.mapsEmbed}
                title={`Ubicación de ${ubicacion.nombre} en el mapa`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full map-frame opacity-90"
                style={{ border: 0 }}
              />
              {/* Fundido inferior para integrar el mapa con la card */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-card to-transparent pointer-events-none" />
            </div>

            <div className="p-6 sm:p-7 space-y-1">
              {/* Las dos direcciones siempre visibles: el toggle sólo mueve el mapa */}
              {UBICACIONES.map((u) => (
                <InfoRow
                  key={u.id}
                  icon={MapPin}
                  label={u.nombre}
                  value={u.address}
                  hint={u.rol}
                  href={u.mapsUrl}
                  external
                  destacada={u.id === activa}
                />
              ))}
              <InfoRow icon={Clock} label="Horario" value={HOURS} />
              <InfoRow
                icon={Phone}
                label="Teléfono"
                value={PHONE_DISPLAY}
                href={PHONE_TEL}
              />
              <InfoRow
                icon={Navigation}
                label="Zona que cubrimos"
                value={AREA}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  hint,
  href,
  external,
  destacada,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  hint?: string;
  href?: string;
  external?: boolean;
  destacada?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-3.5 py-2.5">
      <span
        className={`mt-0.5 w-9 h-9 shrink-0 rounded-lg border flex items-center justify-center transition ${
          destacada
            ? "bg-gold/20 border-gold/40"
            : "bg-gold/10 border-gold/20"
        }`}
      >
        <Icon className="w-4 h-4 text-gold" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <div className="text-xs text-ink-dim uppercase tracking-wide">
          {label}
        </div>
        <div className="text-ink font-medium leading-snug flex items-center gap-1.5">
          {value}
          {href && external && (
            <ExternalLink className="w-3.5 h-3.5 text-ink-dim" aria-hidden="true" />
          )}
        </div>
        {hint && (
          <div className="text-xs text-ink-dim mt-0.5 leading-snug">{hint}</div>
        )}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block rounded-xl -mx-2 px-2 hover:bg-white/[0.03] transition"
    >
      {content}
    </a>
  );
}
