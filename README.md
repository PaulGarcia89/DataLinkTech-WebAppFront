# DataLink Tech Corp

Web corporativa en español con Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion y Lucide. Diseño adaptable con doce páginas y exportación estática publicada en Vercel.

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

La rama `main` despliega producción en Vercel, proyecto `data-link-tech-web-app-front`. Las ramas de trabajo generan previews antes de promover cambios. Next.js genera `out/` con `npm run build`.

El dominio se administra en Cloudflare y apunta a Vercel. Sitio público: https://www.datalinkcorporation.com/.

## Páginas

`/`, `/soluciones/`, `/industrias/`, `/industrias/restaurantes/`, `/ia-y-automatizacion/`, `/marketing-digital/`, `/software-a-medida/`, `/redes-e-infraestructura/`, `/seguridad-y-control/`, `/soporte-it/`, `/nosotros/`, `/contacto/`.

## Contenido y contacto

- Servicios, dominio y datos de contacto: `src/lib/content.ts`.
- Logo original proporcionado por el propietario: `public/datalink-logo.png`.
- Estilos: `src/app/globals.css`.
- Correo: `datalinkprotech@gmail.com`.
- Teléfono y WhatsApp: `+1 (786) 402-2741`.

El formulario prepara un correo mediante `mailto:` y requiere una aplicación de correo configurada. El visitante lo revisa y lo envía desde allí. No existe un backend de envío ni almacenamiento de consultas. Los enlaces a WhatsApp y teléfono ofrecen alternativas directas. Se puede reemplazar el receptor con `NEXT_PUBLIC_CONTACT_EMAIL` al compilar.

Los textos de servicios son una propuesta inicial y deben revisarse antes de publicar. No se incluyen cifras comerciales ni testimonios inventados. La configuración incluye títulos por página, sitemap, robots, página 404, navegación móvil y respeto a la preferencia de movimiento reducido.

## Rediseño y controles

Tokens: `src/styles/tokens.css`. Componentes por experiencia en `src/components/home`, `network`, `demo`, `solutions` e `industries`. Las páginas conservan renderizado estático y los controles usan estado local.

La demo tiene dos escenarios, reproducción, pausa, avance manual y reinicio. Se pausa fuera de pantalla o en pestañas ocultas; con movimiento reducido utiliza avance manual. Las capas del restaurante y la comparación son modelos conceptuales, sin conexión a sistemas reales. Las transiciones de scroll usan CSS con contenido estático de respaldo.

Informe de implementación y pruebas: [docs/redesign-qa.md](docs/redesign-qa.md).
