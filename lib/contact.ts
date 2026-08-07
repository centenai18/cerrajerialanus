export const PHONE_DISPLAY = "11 6853-9297";
export const PHONE_TEL = "tel:1168539297";
export const WHATSAPP_URL =
  "https://wa.me/5491168539297?text=Hola%2C%20quiero%20hacer%20una%20consulta";
export const INSTAGRAM = "https://www.instagram.com/cerra.lanus";

// ===== Ubicaciones =====
// El negocio tiene dos direcciones con funciones distintas: el taller donde se
// hacen los trabajos sobre el vehículo y el local de venta al público.
export type Ubicacion = {
  id: "taller" | "local";
  nombre: string;
  // Etiqueta corta, para el toggle del mapa donde no entra el nombre completo.
  nombreCorto: string;
  rol: string;
  address: string;
  // Sólo la calle y altura, para los datos estructurados de schema.org.
  streetAddress: string;
  mapsUrl: string;
  mapsEmbed: string;
};

export const LOCALIDAD = "Lanús Este";
export const PROVINCIA = "Buenos Aires";

const mapsUrl = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

// Embed de Google Maps sin API key (output=embed). Para el iframe del mapa.
const mapsEmbed = (q: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=16&output=embed`;

// La calle del taller es "Vicente Damonte": con el nombre completo Maps la
// resuelve, con "Damonte" sola no siempre.
const Q_TALLER = "Vicente Damonte 1287, Lanús Este, Buenos Aires";
const Q_LOCAL =
  "Pres. Domingo Faustino Sarmiento 1073, Lanús Este, Buenos Aires";

export const UBICACIONES: Ubicacion[] = [
  {
    id: "taller",
    nombre: "Taller propio",
    nombreCorto: "Taller",
    rol: "Diagnóstico, electricidad y reparaciones sobre el vehículo",
    address: "Vicente Damonte 1287, Lanús Este",
    streetAddress: "Vicente Damonte 1287",
    mapsUrl: mapsUrl(Q_TALLER),
    mapsEmbed: mapsEmbed(Q_TALLER),
  },
  {
    id: "local",
    nombre: "Local de venta al público",
    nombreCorto: "Local de venta",
    rol: "Copias de llaves, venta y atención al público",
    address: "Pres. D. F. Sarmiento 1073, Lanús Este",
    streetAddress: "Pres. Domingo Faustino Sarmiento 1073",
    mapsUrl: mapsUrl(Q_LOCAL),
    mapsEmbed: mapsEmbed(Q_LOCAL),
  },
];

// El local de venta es la sucursal que tiene la ficha de Google con las reseñas.
export const UBICACION_PRINCIPAL = UBICACIONES[1];
export const ADDRESS = UBICACION_PRINCIPAL.address;
export const MAPS_URL = UBICACION_PRINCIPAL.mapsUrl;

// ⚠️ CONFIRMAR con el cliente: horario real de atención.
export const HOURS = "Lun a Sáb · 8:30 a 20 hs";
export const AREA = "Lanús y alrededores";

// Reputación (Google). Fuente única para hero y sección de reseñas.
export const RATING = "4,3";
export const REVIEWS_COUNT = 172;
// La ficha de Google muestra las reseñas reales.
export const REVIEWS_URL = MAPS_URL;
