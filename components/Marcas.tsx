"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const vehiculos = [
  { slug: "volkswagen", name: "Volkswagen" },
  { slug: "toyota", name: "Toyota" },
  { slug: "ford", name: "Ford" },
  { slug: "chevrolet", name: "Chevrolet" },
  { slug: "fiat", name: "Fiat" },
  { slug: "peugeot", name: "Peugeot" },
  { slug: "renault", name: "Renault" },
  { slug: "citroen", name: "Citroën" },
  { slug: "nissan", name: "Nissan" },
  { slug: "honda", name: "Honda" },
  { slug: "jeep", name: "Jeep" },
  { slug: "kia", name: "Kia" },
  { slug: "hyundai", name: "Hyundai" },
  { slug: "audi", name: "Audi" },
  { slug: "bmw", name: "BMW" },
  { slug: "mercedes-benz", name: "Mercedes-Benz" },
  { slug: "suzuki", name: "Suzuki" },
  { slug: "volvo", name: "Volvo" },
  { slug: "mini", name: "MINI" },
  { slug: "land-rover", name: "Land Rover" },
  { slug: "lexus", name: "Lexus" },
  { slug: "mitsubishi", name: "Mitsubishi" },
];

const cerraduras = [
  { file: "trabex.png", name: "Trabex" },
  { file: "kallay.png", name: "Kallay" },
  { file: "prive.png", name: "Prive" },
  { file: "yale.svg", name: "Yale" },
  { file: "acytra.svg", name: "Acytra" },
  { file: "candex.jpg", name: "Candex" },
];

type Tile = { src: string; name: string; unoptimized?: boolean };

function Tile({ src, name, unoptimized }: Tile) {
  return (
    <div
      className="group shrink-0 w-36 sm:w-44 h-20 sm:h-24 flex items-center justify-center rounded-xl bg-white border border-black/5 shadow-sm px-5 py-3 transition hover:ring-2 hover:ring-gold/60 hover:-translate-y-1"
      title={name}
    >
      <Image
        src={src}
        alt={`Logo ${name}`}
        width={150}
        height={80}
        unoptimized={unoptimized}
        className="max-h-12 sm:max-h-14 w-auto object-contain transition group-hover:scale-105"
      />
    </div>
  );
}

function Marquee({
  tiles,
  reverse = false,
}: {
  tiles: Tile[];
  reverse?: boolean;
}) {
  // Duplicamos la lista para que el loop a -50% sea continuo y sin saltos.
  // La segunda copia es decorativa: se oculta a lectores de pantalla.
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex w-max items-stretch gap-3 sm:gap-4 pause-on-hover ${
          reverse ? "animate-ticker-reverse" : "animate-ticker"
        }`}
      >
        {tiles.map((t, i) => (
          <Tile key={`${t.name}-${i}`} {...t} />
        ))}
        <div className="flex items-stretch gap-3 sm:gap-4" aria-hidden="true">
          {tiles.map((t, i) => (
            <Tile key={`dup-${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Marcas() {
  const vehiculoTiles: Tile[] = vehiculos.map((m) => ({
    src: `/images/brands/${m.slug}.png`,
    name: m.name,
  }));
  const cerraduraTiles: Tile[] = cerraduras.map((m) => ({
    src: `/images/brands/locks/${m.file}`,
    name: m.name,
    unoptimized: true,
  }));

  return (
    <section
      id="marcas"
      className="py-24 md:py-28 bg-bg-panel border-y border-bg-line scroll-mt-20 overflow-hidden"
    >
      <div className="container-custom">
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="eyebrow mb-4">Compatibilidad</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide balance">
            <span className="text-gradient">TRABAJAMOS CON TODAS LAS</span>{" "}
            <span className="gold-gradient">MARCAS</span>
          </h2>
          <p className="mt-4 text-ink-soft max-w-xl mx-auto balance">
            Llaves y cerraduras para las marcas más usadas en Argentina. Si no
            ves la tuya, consultanos.
          </p>
        </div>
      </div>

      {/* Vehículos */}
      <div className="container-custom">
        <div className="mb-7">
          <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-ink">
            Marcas de vehículos
          </h3>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Marquee tiles={vehiculoTiles} />
      </motion.div>

      {/* Cerraduras */}
      <div className="container-custom">
        <div className="mb-7">
          <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-ink">
            Marcas de cerraduras
          </h3>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Marquee tiles={cerraduraTiles} reverse />
      </motion.div>
    </section>
  );
}
