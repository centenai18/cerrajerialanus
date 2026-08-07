"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  KeyRound,
  Cpu,
  Wrench,
  Lock,
  KeySquare,
  Unlock,
  Copy,
  RefreshCw,
  DoorClosed,
  Shield,
  Truck,
  ScanLine,
  CircuitBoard,
  ShieldOff,
  Power,
  BatteryCharging,
  Gauge,
  Cable,
  Lightbulb,
  Armchair,
  type LucideIcon,
} from "lucide-react";

type Servicio = { icon: LucideIcon; titulo: string; desc: string };

const automotor: Servicio[] = [
  {
    icon: KeyRound,
    titulo: "Copia de llaves con chip",
    desc: "Duplicado y programación para vehículos nacionales e importados.",
  },
  {
    icon: Cpu,
    titulo: "Programación de llaves y controles",
    desc: "Configuración de llaves codificadas, transponder y controles remotos.",
  },
  {
    icon: Wrench,
    titulo: "Reparación de llaves y controles",
    desc: "Cambio de carcasas, pulsadores y reparación electrónica.",
  },
  {
    icon: Lock,
    titulo: "Reparación de cerraduras",
    desc: "Puertas, baúl, tambor de arranque y cierre centralizado.",
  },
  {
    icon: KeySquare,
    titulo: "Fabricación de llaves nuevas",
    desc: "Cuando se perdieron todas las llaves o necesitás una nueva.",
  },
  {
    icon: Unlock,
    titulo: "Apertura de vehículos",
    desc: "Asistencia profesional para recuperar el acceso a tu vehículo sin daños.",
  },
];

const electronica: Servicio[] = [
  {
    icon: ScanLine,
    titulo: "Diagnóstico computarizado",
    desc: "Escaneo con equipo propio para detectar fallas eléctricas y electrónicas.",
  },
  {
    icon: CircuitBoard,
    titulo: "Reparación y banqueo de ECUs",
    desc: "Reparamos y probamos la computadora en banco antes de instalarla.",
  },
  {
    icon: ShieldOff,
    titulo: "Anulación de inmovilizador",
    desc: "Solución al sistema antiarranque cuando bloquea el vehículo.",
  },
  {
    icon: Power,
    titulo: "Burros de arranque",
    desc: "Reparación y cambio del motor de arranque.",
  },
  {
    icon: BatteryCharging,
    titulo: "Alternadores",
    desc: "Diagnóstico, reparación y reemplazo del sistema de carga.",
  },
  {
    icon: Gauge,
    titulo: "Tableros de instrumentos",
    desc: "Reparación de tableros, luces testigo y fallas de indicadores.",
  },
  {
    icon: Cable,
    titulo: "Fusibleras electrónicas",
    desc: "Reparación de cajas de fusibles y módulos de distribución.",
  },
  {
    icon: Lightbulb,
    titulo: "Iluminación y calefacción",
    desc: "Luces, sistema de calefacción y ventilación del habitáculo.",
  },
  {
    icon: Armchair,
    titulo: "Butacas eléctricas y limpiaparabrisas",
    desc: "Motores, mecanismos y accesorios eléctricos del interior.",
  },
];

const hogar: Servicio[] = [
  {
    icon: Copy,
    titulo: "Copia de llaves",
    desc: "Duplicado de llaves para viviendas, oficinas y comercios.",
  },
  {
    icon: RefreshCw,
    titulo: "Cambio de combinación",
    desc: "Reconfiguración de cerraduras para mayor seguridad sin reemplazarlas.",
  },
  {
    icon: DoorClosed,
    titulo: "Colocación de cerraduras",
    desc: "Instalación de cerraduras tradicionales y de alta seguridad.",
  },
  {
    icon: Shield,
    titulo: "Instalación de cerrojos y pasadores",
    desc: "Refuerzo de puertas con soluciones de seguridad adicionales.",
  },
  {
    icon: Truck,
    titulo: "Servicio a domicilio",
    desc: "Atención en el lugar para instalaciones, reparaciones y reemplazos.",
  },
  {
    icon: Wrench,
    titulo: "Cambio y reparación de cerraduras",
    desc: "Sustitución por desgaste, roturas o actualización del sistema de seguridad.",
  },
];

function Grupo({
  titulo,
  imagen,
  imagenAlt,
  items,
  // La franja recorta fuerte arriba y abajo: permite subir o bajar el encuadre
  // según dónde esté el motivo de cada foto.
  posicion = "object-center",
  nota,
}: {
  titulo: string;
  imagen: string;
  imagenAlt: string;
  items: Servicio[];
  posicion?: string;
  nota?: string;
}) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="relative h-44 sm:h-52 rounded-2xl overflow-hidden ring-1 ring-bg-line mb-7"
      >
        <Image
          src={imagen}
          alt={imagenAlt}
          fill
          className={`object-cover ${posicion}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/65 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-8">
          <h3 className="font-display text-3xl sm:text-4xl tracking-wide text-ink">
            {titulo}
          </h3>
        </div>
        <span className="absolute bottom-0 left-0 h-1 w-24 bg-gold" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s, i) => (
          <motion.div
            key={s.titulo}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="card card-glow gold-border p-6 hover:border-gold/40 transition"
          >
            <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
              <s.icon className="w-5 h-5 text-gold" aria-hidden="true" />
            </div>
            <h4 className="font-semibold text-ink text-base mb-2 leading-snug">
              {s.titulo}
            </h4>
            <p className="text-ink-soft text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {nota && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-7 text-center font-display text-2xl sm:text-3xl tracking-wide text-gold"
        >
          {nota}
        </motion.p>
      )}
    </div>
  );
}

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 md:py-32 relative scroll-mt-20">
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <div className="container-custom relative">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="eyebrow mb-4">Nuestros servicios</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide balance">
            <span className="text-gradient">TODO LO QUE</span>{" "}
            <span className="gold-gradient">NECESITÁS</span>
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto balance">
            Cerrajería del automotor, electricidad y electrónica con taller
            propio. También cerrajería completa para tu hogar y comercio.
          </p>
        </div>

        <div className="space-y-16">
          <Grupo
            titulo="Cerrajería del Automotor"
            imagen="/images/hero.png"
            imagenAlt="Máquina de corte de llaves codificadas"
            items={automotor}
          />
          <Grupo
            titulo="Electricidad y Electrónica"
            imagen="/images/electronica.png"
            imagenAlt="Reparación de la computadora de un vehículo con soldador y punta de multímetro"
            items={electronica}
            posicion="object-[50%_40%]"
            nota="Todo lo que tu auto tenga roto, lo reparamos."
          />
          <Grupo
            titulo="Cerrajería para el Hogar"
            imagen="/images/hogar.png"
            imagenAlt="Juego de llaves con llavero de casa"
            items={hogar}
          />
        </div>
      </div>
    </section>
  );
}
