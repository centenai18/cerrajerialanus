# Cerrajería Lanús — Landing Page

## Cliente
- **Nombre negocio:** Cerrajería Lanús
- **Rubro:** Cerrajería del automotor + centro integral del automotor (electricidad y electrónica) + cerrajería de hogar
- **Instagram:** @cerra.lanus
- **Teléfono / WhatsApp:** 011 6853-9297
- **Rating Google:** 4.3 ★ · 172 reseñas

### Las dos direcciones
| | Dirección | Función |
|---|---|---|
| **Taller propio** | Vicente Damonte 1287, Lanús Este | Diagnóstico, electricidad y reparaciones sobre el vehículo |
| **Local de venta** | Pres. D. F. Sarmiento 1073, Lanús Este | Copias de llaves, venta y atención al público |

⚠️ La calle del taller es **Vicente** Damonte. Con "Damonte" sola Google Maps no la resuelve
de forma confiable. Ambas direcciones verificadas contra el embed de Maps (2026-08-07):
taller `-34.7008, -58.3851` · local `-34.7003, -58.3819`.

La ficha de Google con las 172 reseñas es la del **local de venta**.

## Proyecto
- **Tipo:** Landing page de conversión
- **Stack:** Next.js 14 · TypeScript · TailwindCSS · Framer Motion · lucide-react
- **Dominio:** cerrajerialanus.com
- **Precio:** $150.000 ARS
- **Cobro:** 50% al inicio · 50% al entregar
- **Estado:** En desarrollo

## Decisiones de posicionamiento
- El **hero no cambia**: sigue siendo "ESPECIALISTAS EN LLAVES Y CERRAJERÍA DEL AUTOMOTOR".
  Se decidió no diluir el término por el que la gente busca y tiene la marca instalada.
- La electricidad y electrónica entra como **bloque de servicios**, no como titular.
- El bloque de **Hogar se mantiene**: el cliente no pidió sacarlo, sólo no lo mencionó.
- La superficie de SEO (title, description, schema, OG) **sí** cubre los servicios nuevos:
  no afecta lo visual y es gratis.

## Datos de contacto (fuente única)
Todo en `lib/contact.ts`. Nunca hardcodear en componentes.
Las ubicaciones viven en el array `UBICACIONES`; `ADDRESS` y `MAPS_URL` son alias
del local de venta para lo que necesite una sola dirección.

## Estructura
```
app/          layout.tsx · page.tsx · globals.css · opengraph-image.tsx
components/   Header · Hero · Beneficios · Servicios · Marcas · Resenas · CTAFinal · Footer · FloatingCTA
lib/contact.ts
docs/         fotos del cliente, referencias visuales, benchmark
public/images/  hero.png · electronica.png · hogar.png · auto.png · local.png · brands/
```

## Notas de implementación
- `Servicios.tsx` → el componente `Grupo` acepta `posicion` (object-position) porque la
  franja de cabecera recorta fuerte arriba y abajo. `electronica.png` es 3:2 y necesita
  `object-[50%_40%]` para no perder el humo del soldador; las otras dos son 16:9 y van centradas.
- `CTAFinal.tsx` → un solo `<iframe>` con `key={ubicacion.id}` para forzar el remount al
  cambiar de local. Un solo mapa en vez de dos: el 80% del tráfico es mobile.
- `opengraph-image.tsx` → el subset de Google Fonts tiene que incluir **todo** el texto que
  se renderiza en Inter (`marca`, `sub`, `meta`). Los glifos que falten no se dibujan.

## Referencia
- SacuLNaI (mismo stack): https://www.cerrajeriasaculnai24hs.com/

## Checklist de desarrollo
- [x] Repo Next.js
- [x] `lib/contact.ts` con datos del cliente
- [x] Sección hero + CTA WhatsApp
- [x] Sección servicios (automotor · electrónica · hogar)
- [x] Sección ubicación + Google Maps embed (toggle entre los dos locales)
- [x] SEO básico (meta tags, OG, schema con un nodo por sucursal)
- [ ] **Confirmar el horario real de atención** (hoy hay un placeholder en `HOURS`)
- [ ] Favicon (hoy tira 404)
- [ ] Actualizar Next.js — 14.2.15 tiene una vulnerabilidad conocida
- [ ] Deploy + dominio cerrajerialanus.com
- [ ] Test mobile
