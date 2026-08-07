import { ImageResponse } from "next/og";

// Imagen de preview que se muestra al compartir el link (WhatsApp, redes, buscadores).
// Se genera dinámicamente con la paleta de la marca: nada de exportar PNGs a mano.
// Dinámica: se renderiza on-demand (y la cachea el CDN). Evita un bug de prerender
// de @vercel/og en Windows con rutas que contienen espacios.
export const dynamic = "force-dynamic";
export const alt =
  "Cerrajería Lanús · Llaves, electrónica y diagnóstico del automotor · Lanús Este";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Carga una fuente de Google Fonts en formato apto para satori (ttf).
// Patrón oficial de Next.js: pedimos solo los glifos que usamos (subset).
async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );
  if (resource) {
    const res = await fetch(resource[1]);
    if (res.status === 200) return res.arrayBuffer();
  }
  throw new Error(`No se pudo cargar la fuente ${font}`);
}

export default async function OpengraphImage() {
  const marca = "CERRAJERÍA EN LANÚS ESTE";
  const titulo = "CERRAJERÍA LANÚS";
  const sub = "Llaves · Electrónica · Diagnóstico — Automotor y Hogar";
  const meta = "★ 4,3 · 172 reseñas · 11 6853-9297 · Lanús Este";

  const [bebas, inter] = await Promise.all([
    loadGoogleFont("Bebas+Neue", titulo),
    // El subset tiene que incluir TODO el texto que se renderiza en Inter:
    // los glifos que falten no se dibujan.
    loadGoogleFont("Inter:wght@500;600", `${marca}${sub}${meta}`),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090B",
          position: "relative",
        }}
      >
        {/* Glow dorado de fondo */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "720px",
            height: "720px",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(212,160,23,0.35) 0%, rgba(212,160,23,0) 65%)",
          }}
        />
        {/* Línea dorada superior */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background:
              "linear-gradient(90deg, #A07810 0%, #F5C842 50%, #A07810 100%)",
          }}
        />

        {/* Marca: ícono de llave + nombre chico */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "rgba(212,160,23,0.12)",
              border: "1px solid rgba(212,160,23,0.35)",
            }}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F5C842"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="7.5" cy="15.5" r="5.5" />
              <path d="m21 2-9.6 9.6" />
              <path d="m15.5 7.5 3 3L22 7l-3-3" />
            </svg>
          </div>
          <div
            style={{
              fontFamily: "Inter",
              fontSize: "26px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "#A1A1AA",
            }}
          >
            {marca}
          </div>
        </div>

        {/* Título principal */}
        <div
          style={{
            display: "flex",
            marginTop: "36px",
            fontFamily: "Bebas Neue",
            fontSize: "150px",
            lineHeight: 0.92,
            letterSpacing: "0.02em",
            backgroundImage:
              "linear-gradient(135deg, #F5C842 0%, #D4A017 50%, #A07810 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {titulo}
        </div>

        {/* Subtítulo */}
        <div
          style={{
            display: "flex",
            marginTop: "24px",
            fontFamily: "Inter",
            fontSize: "34px",
            fontWeight: 500,
            color: "#F4F4F5",
          }}
        >
          {sub}
        </div>

        {/* Pie: rating + teléfono + zona */}
        <div
          style={{
            display: "flex",
            marginTop: "44px",
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: 600,
            color: "#D4A017",
          }}
        >
          {meta}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bebas Neue", data: bebas, style: "normal", weight: 400 },
        { name: "Inter", data: inter, style: "normal", weight: 600 },
      ],
    }
  );
}
