# DataLink Tech Corp

Web corporativa en español con Next.js (App Router), TypeScript, Tailwind CSS y Lucide. Doce páginas con exportación estática publicada en Vercel.

## Desarrollo

Requiere Node.js 22 o superior.

```sh
npm ci
npm run dev
```

## Validación y publicación

```sh
npm run lint
npm run typecheck
npm run build
python3 scripts/audit-static.py
```

La compilación genera `out/`. Para revisarla: `npm run preview`.

La rama `main` despliega producción en Vercel, proyecto `data-link-tech-web-app-front`. Las ramas de trabajo generan previews antes de promover cambios. El dominio se administra en Cloudflare y apunta a Vercel. Sitio público: https://www.datalinkcorporation.com/.

## Páginas

`/`, `/soluciones/`, `/industrias/`, `/industrias/restaurantes/`, `/ia-y-automatizacion/`, `/marketing-digital/`, `/software-a-medida/`, `/redes-e-infraestructura/`, `/seguridad-y-control/`, `/soporte-it/`, `/nosotros/`, `/contacto/`.

## Sistema de diseño

El rediseño de 2026 se documenta en [docs/rediseno-identidad-2026.md](docs/rediseno-identidad-2026.md).

- Tokens y planos de color: `src/styles/tokens.css`.
- Estilos completos: `src/app/globals.css`.
- Iconografía propia de marca: `src/components/icons.tsx`.
- Visuales interactivos: `src/components/visuals/`.
- Secciones de página: `src/components/home/sections.tsx`.

Cada sección declara un plano (`plane-deep`, `plane-navy`, `plane-paper`, `plane-white`) que redefine las variables de color de su contenido. Los componentes no fijan colores propios: heredan los del plano.

## Contenido y contacto

- Servicios, sectores, método, pilares y datos de contacto: `src/lib/content.ts`.
- Logo horizontal original: `public/datalink-logo.png`.
- Isotipo con fondo transparente para fondos oscuros: `public/datalink-isotipo.png`.
- Imagen social: `public/opengraph-image.png`, regenerable con `node scripts/generate-og.mjs`.
- Correo: `datalinkprotech@gmail.com`.
- Teléfono y WhatsApp: `+1 (786) 402-2741`.

El formulario prepara un correo mediante `mailto:` y requiere una aplicación de correo configurada. El visitante lo revisa y lo envía desde allí. No existe un backend de envío ni almacenamiento de consultas. Los enlaces a WhatsApp y teléfono ofrecen alternativas directas. Se puede reemplazar el receptor con `NEXT_PUBLIC_CONTACT_EMAIL` al compilar.

Los textos son una propuesta y deben revisarse antes de publicar. No se incluyen cifras comerciales, plazos ni testimonios inventados. La configuración incluye títulos por página, datos estructurados, sitemap, robots, página 404, navegación móvil y respeto a la preferencia de movimiento reducido.
