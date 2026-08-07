import {
  KeyRound,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  UBICACIONES,
  HOURS,
  INSTAGRAM,
} from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bg-line bg-bg-panel">
      <div className="container-custom py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1.2fr]">
          {/* Marca + descripción */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                <KeyRound className="w-5 h-5 text-gold" aria-hidden="true" />
              </span>
              <span className="font-display text-xl tracking-wider leading-none">
                <span className="text-gold">CERRAJERÍA</span>{" "}
                <span className="text-ink">LANÚS</span>
              </span>
            </div>
            <p className="mt-4 text-ink-soft text-sm leading-relaxed max-w-sm">
              Especialistas en llaves y cerrajería del automotor en Lanús Este.
              Taller propio para electricidad, diagnóstico computarizado y
              electrónica del vehículo. También cerrajería para tu hogar y
              comercio.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-ink-dim mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center gap-2.5 text-ink hover:text-gold transition"
                >
                  <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ink hover:text-gold transition"
                >
                  <MessageCircle className="w-4 h-4 text-gold" aria-hidden="true" />
                  WhatsApp directo
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-ink hover:text-gold transition"
                >
                  <Instagram className="w-4 h-4 text-gold" aria-hidden="true" />
                  @cerra.lanus
                </a>
              </li>
            </ul>
          </div>

          {/* Locales */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-ink-dim mb-4">
              Nuestros locales
            </h3>
            <ul className="space-y-3 text-sm">
              {UBICACIONES.map((u) => (
                <li key={u.id} className="flex items-start gap-2.5">
                  <MapPin
                    className="w-4 h-4 text-gold mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-ink">
                    <a
                      href={u.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition"
                    >
                      {u.address}
                    </a>
                    <span className="block text-ink-dim text-xs mt-0.5">
                      {u.nombre}
                    </span>
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <span className="text-ink">{HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-bg-line/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-dim">
          <span>
            © {year} Cerrajería Lanús · Todos los derechos reservados.
          </span>
          <span>Lanús Este · Buenos Aires</span>
        </div>
      </div>
    </footer>
  );
}
