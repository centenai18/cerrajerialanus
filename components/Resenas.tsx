"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { RATING, REVIEWS_COUNT, REVIEWS_URL } from "@/lib/contact";

// ⚠️ PLACEHOLDER: reemplazar por reseñas REALES de Google (texto + nombre).
// El dato agregado (4,3 ★ · 172) y el link a Google sí son reales.
type Resena = { texto: string; nombre: string; zona: string };

const resenas: Resena[] = [
  {
    texto:
      "Me quedé sin llaves del auto y en el día me hicieron una nueva con el chip. Rápidos y muy claros con el precio.",
    nombre: "Martín G.",
    zona: "Lanús",
  },
  {
    texto:
      "Vinieron a casa a cambiar la cerradura el mismo día que llamé. Trabajo prolijo y atención de diez.",
    nombre: "Carla R.",
    zona: "Lanús Oeste",
  },
  {
    texto:
      "Buenísimos para copias de llaves codificadas. Probé en otros lados y acá fue el único que me la programó bien.",
    nombre: "Diego P.",
    zona: "Remedios de Escalada",
  },
];

function Estrellas({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < 4 ? "fill-gold text-gold" : "fill-bg-line text-bg-line"
          }`}
        />
      ))}
    </div>
  );
}

export default function Resenas() {
  return (
    <section id="resenas" className="py-24 md:py-32 relative scroll-mt-24">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />

      <div className="container-custom relative">
        <div className="text-center mb-14">
          <span className="eyebrow mb-4">Lo que dicen nuestros clientes</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide balance">
            <span className="text-gradient">CLIENTES QUE YA</span>{" "}
            <span className="gold-gradient">CONFÍAN</span>
          </h2>
        </div>

        {/* Resumen de reputación (dato real) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="card card-glow gold-border p-6 sm:p-7 mb-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <span className="font-display text-6xl text-gold leading-none tabular-nums">
              {RATING}
            </span>
            <div>
              <Estrellas />
              <p className="text-ink-soft text-sm mt-1.5">
                {REVIEWS_COUNT} reseñas en Google
              </p>
            </div>
          </div>
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-md sm:ml-auto"
          >
            Ver reseñas en Google
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-3 gap-5">
          {resenas.map((r, i) => (
            <motion.figure
              key={r.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="card card-glow p-6 flex flex-col"
            >
              <Quote className="w-7 h-7 text-gold/40 mb-3" aria-hidden="true" />
              <Estrellas className="mb-3" />
              <blockquote className="text-ink-soft text-sm leading-relaxed flex-1">
                {r.texto}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold text-sm font-semibold">
                  {r.nombre.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block text-ink font-medium">{r.nombre}</span>
                  <span className="block text-ink-dim text-xs">{r.zona}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
