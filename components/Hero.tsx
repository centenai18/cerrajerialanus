"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Wrench, MessageCircle, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Conteo animado hasta el valor final cuando entra en pantalla.
function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        // ease-out
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(value * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/auto.png"
          alt="Arranque del vehículo con llave codificada"
          fill
          priority
          className="object-cover object-center animate-kenburns"
        />
        {/* Solo lo justo detrás del texto (izquierda/abajo): la foto se ve plena a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
      </div>

      <div className="absolute top-1/3 left-0 w-[560px] h-[420px] bg-gold/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom relative pt-28 pb-28 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          {/* Izquierda: título + bajada */}
          <div className="text-left">
            <motion.span
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-5"
            >
              Cerrajería del automotor y hogar · Lanús
            </motion.span>
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="font-display text-5xl sm:text-6xl lg:text-[80px] leading-[0.92] tracking-wide"
            >
              <span className="text-gradient">ESPECIALISTAS EN LLAVES</span>
              <br />
              <span className="text-gradient">Y CERRAJERÍA DEL</span>
              <br />
              <span className="gold-gradient">AUTOMOTOR</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-6 text-lg text-ink-soft max-w-xl leading-relaxed balance"
            >
              Copias de llaves, programación de chips, reparación de controles y
              cerraduras. Para que vuelvas a usar tu vehículo con total
              tranquilidad.
            </motion.p>
          </div>

          {/* Derecha: navegación principal */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[240px]"
          >
            <a
              href="#servicios"
              className="btn btn-ghost group !justify-between px-7 py-4 text-base backdrop-blur-sm"
            >
              <span className="inline-flex items-center gap-2.5">
                <Wrench className="w-5 h-5 text-gold" aria-hidden="true" />
                Ver servicios
              </span>
              <ArrowRight
                className="w-4 h-4 text-ink-dim group-hover:text-gold group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contacto"
              className="btn btn-gold group !justify-between px-7 py-4 text-base"
            >
              <span className="inline-flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Contacto
              </span>
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        {/* Métricas de confianza */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.33 }}
          className="mt-14 pt-8 border-t border-bg-line/60 flex items-center gap-10 sm:gap-14"
        >
          {[
            { value: 172, suffix: "", label: "reseñas en Google" },
            { value: 4.3, decimals: 1, label: "calificación" },
            { value: 24, suffix: "hs", label: "respuesta rápida" },
          ].map((s) => (
            <div key={s.label} className="text-left">
              <div className="font-display text-3xl text-gold flex items-center gap-1 tabular-nums">
                <CountUp
                  value={s.value}
                  decimals={s.decimals ?? 0}
                  suffix={s.suffix ?? ""}
                />
                {s.label === "calificación" && (
                  <Star className="w-5 h-5 fill-gold text-gold" aria-hidden="true" />
                )}
              </div>
              <div className="text-xs text-ink-dim mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
