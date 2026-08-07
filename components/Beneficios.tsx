"use client";

import { motion } from "framer-motion";
import {
  Navigation,
  Zap,
  KeyRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Beneficio = { icon: LucideIcon; titulo: string; desc: string };

const beneficios: Beneficio[] = [
  {
    icon: Navigation,
    titulo: "Vamos a domicilio",
    desc: "Nos acercamos hasta donde estés, en Lanús y alrededores.",
  },
  {
    icon: Zap,
    titulo: "Respuesta rápida",
    desc: "Atendemos urgencias y respondemos al toque por WhatsApp.",
  },
  {
    icon: KeyRound,
    titulo: "Todas las marcas",
    desc: "Llaves con chip, escáner y diagnóstico de autos nacionales e importados.",
  },
  {
    icon: Wrench,
    titulo: "Taller propio equipado",
    desc: "Diagnóstico, banqueo de ECUs y reparación con equipamiento propio.",
  },
];

export default function Beneficios() {
  return (
    <section className="py-16 md:py-20 border-y border-bg-line relative">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.titulo}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              className="card card-glow gold-border p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-ink text-base mb-1.5">
                {b.titulo}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed balance">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
