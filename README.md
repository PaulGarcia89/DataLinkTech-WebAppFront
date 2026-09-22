# DataLink Tech Corp

Web corporativa en español con Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion y Lucide. Diseño adaptable con nueve páginas y exportación estática para Cloudflare Pages.

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
```

La compilación genera `out/`. Para revisarla: `npm run preview`.

En Cloudflare, crear un proyecto de **Pages**, conectar `PaulGarcia89/DataLinkTech-WebAppFront` y seleccionar la rama que contenga este código. Configurar:

- Comando de compilación: `npm run build`
- Directorio de salida: `out`
- Node.js: `22`

Después de verificar el despliegue de prueba, agregar `datalinkcorporation.com` en los dominios personalizados del proyecto Pages y seguir el asistente DNS de Cloudflare. El registro del dominio por sí solo no publica la aplicación.

Referencia: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

## Páginas

`/`, `/ia-y-automatizacion/`, `/marketing-digital/`, `/software-a-medida/`, `/redes-e-infraestructura/`, `/seguridad-y-control/`, `/soporte-it/`, `/nosotros/`, `/contacto/`.

## Contenido y contacto

- Servicios, dominio y datos de contacto: `src/lib/content.ts`.
- Logo original proporcionado por el propietario: `public/datalink-logo.png`.
- Estilos: `src/app/globals.css`.
- Correo: `datalinkprotech@gmail.com`.
- Teléfono y WhatsApp: `+1 (786) 402-2741`.

El formulario prepara un correo mediante `mailto:` y requiere una aplicación de correo configurada. El visitante lo revisa y lo envía desde allí. No existe un backend de envío ni almacenamiento de consultas. Los enlaces a WhatsApp y teléfono ofrecen alternativas directas. Se puede reemplazar el receptor con `NEXT_PUBLIC_CONTACT_EMAIL` al compilar.

Los textos de servicios son una propuesta inicial y deben revisarse antes de publicar. No se incluyen cifras comerciales ni testimonios inventados. La configuración incluye títulos por página, sitemap, robots, página 404, navegación móvil y respeto a la preferencia de movimiento reducido.
