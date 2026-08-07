import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import {
  UBICACIONES,
  LOCALIDAD,
  PROVINCIA,
  AREA,
  INSTAGRAM,
} from "@/lib/contact";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const SITE = "https://cerrajerialanus.com";

export const metadata: Metadata = {
  title:
    "Cerrajería Lanús · Automotor, Electrónica y Hogar · Tel. 11 6853-9297",
  description:
    "Cerrajería del automotor en Lanús Este: llaves codificadas, diagnóstico computarizado, escaneo, ECUs, burros, alternadores y tableros. Taller propio y local de venta al público. Llamanos al 11 6853-9297.",
  metadataBase: new URL(SITE),
  openGraph: {
    title: "Cerrajería Lanús · Automotor, Electrónica y Hogar",
    description:
      "Llaves codificadas, diagnóstico computarizado y electrónica del automotor en Lanús Este. Taller propio y local de venta.",
    type: "website",
    locale: "es_AR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08080B",
  colorScheme: "dark",
};

// Un nodo por sucursal: Google necesita marcado separado por ubicación para
// poder mostrar las dos. El taller además es AutoRepair, no sólo Locksmith.
const datosEstructurados = {
  "@context": "https://schema.org",
  "@graph": UBICACIONES.map((u) => ({
    "@type": u.id === "taller" ? ["AutoRepair", "Locksmith"] : "Locksmith",
    "@id": `${SITE}/#${u.id}`,
    name: `Cerrajería Lanús · ${u.nombre}`,
    url: SITE,
    telephone: "+5491168539297",
    address: {
      "@type": "PostalAddress",
      streetAddress: u.streetAddress,
      addressLocality: LOCALIDAD,
      addressRegion: PROVINCIA,
      addressCountry: "AR",
    },
    areaServed: AREA,
    sameAs: [INSTAGRAM],
    priceRange: "$$",
  })),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${sans.variable} ${display.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(datosEstructurados),
          }}
        />
      </body>
    </html>
  );
}
