# Rediseño 2026 — «Arquitectura de enlace»

Rediseño visual completo del sitio de DataLink Tech Corp. Se conservan la arquitectura de rutas, la exportación estática y el despliegue; se reemplaza por completo la capa visual y se reescribe el contenido para que las seis soluciones ocupen el centro del mensaje.

## Concepto

El isotipo de DataLink es una «D» construida con módulos de píxeles. Ese módulo se convierte en la unidad del diseño: el sitio se presenta como el plano técnico de un negocio conectado.

Tres ideas sostienen el concepto:

1. **Planos.** Cada sección es un plano del mismo esquema, numerado en su esquina (`PLANO 03 / MÉTODO DE VALOR`) y apoyado en una retícula de 72 px apenas visible.
2. **Enlace.** El hero muestra un núcleo con los seis servicios en anillo y pulsos de señal que viajan hacia el centro: la promesa de «un solo aliado» hecha imagen.
3. **Criterio de ingeniería.** Etiquetas monoespaciadas, índices numéricos y marcas de esquina, frente al lenguaje genérico de plantilla SaaS.

## Sistema

### Planos de color

Cada sección declara una clase de plano que redefine las variables de color de su contenido:

| Plano         | Fondo     | Uso                              |
| ------------- | --------- | -------------------------------- |
| `plane-deep`  | `#050a12` | Soluciones, método, resultados   |
| `plane-navy`  | `#0b2d5b` | Cadena de valor, planos de local |
| `plane-paper` | `#f4f6f8` | Diagnóstico, sectores, alcance   |
| `plane-white` | `#ffffff` | Criterio, proceso                |

Los componentes no fijan colores: heredan `--surface`, `--text`, `--line` y `--accent` del plano que los contiene. El acento es cian sobre planos oscuros y azul sobre planos claros, de modo que el contraste se mantiene sin duplicar componentes.

### Paleta

Se usa la paleta oficial del manual de marca sin alteraciones: `#0B2D5B`, `#0066FF`, `#00D1FF`, `#64748B`, `#E5E7EB`, `#FFFFFF`.

### Tipografía

Poppins para titulares (500/600) y Montserrat para texto (400/500/600), ambas locales vía `next/font`. Las etiquetas técnicas usan la monoespaciada del sistema. La escala es fluida con `clamp()`; los titulares de páginas internas se limitan a 4.75 rem para que palabras largas como «Automatización» no desborden su columna.

### Iconografía

Seis iconos propios dibujados sobre retícula de 24 con trazo de 1.6, uno por servicio, más tres de sector (`src/components/icons.tsx`). `Glyph` los devuelve como SVG autónomo; `GlyphPaths` devuelve sólo los trazos, para incrustarlos dentro de otro SVG sin anidar elementos `svg`.

## Estructura de la portada

1. **Hero** — «Seis frentes. Un solo aliado técnico.» con el esquema del núcleo.
2. **Diagnóstico** — «La tecnología de tu negocio no está rota. Está desconectada.»
3. **Las seis soluciones** — rejilla con índice, promesa, descripción y frentes de trabajo.
4. **Cadena de valor** — Datos → Conexión → Inteligencia → Crecimiento.
5. **Sectores** — restaurantes, comercio, oficinas.
6. **Método** — Entender, Definir, Conectar, Acompañar.
7. **Criterio** — cuatro razones para un solo responsable.
8. **Cierre** — evaluación tecnológica y WhatsApp.

## Visuales interactivos

- **`CoreSchematic`** — núcleo con seis nodos en anillo. Recorre los servicios cada 2.2 s, se detiene fuera de pantalla o en pestañas ocultas, y con `prefers-reduced-motion` no anima ni emite pulsos. La preferencia se lee con `useSyncExternalStore`, de modo que el servidor renderiza la versión sin movimiento y no hay desajuste de hidratación.
- **`VenueMap`** — planta de un local con cinco capas conmutables (red, POS, seguridad, IA, soporte). Es un modelo conceptual, sin conexión a sistemas reales. Se usa en industrias, restaurantes y en cada ficha de servicio, resaltando la capa correspondiente.
- **`Reveal`** — revela contenido al entrar en pantalla. Lo que ya está visible al cargar no se oculta, así que no hay parpadeo; sin JavaScript o con movimiento reducido todo permanece visible.

## Accesibilidad

- Un solo `h1` por página y jerarquía de encabezados continua.
- Enlace de salto al contenido, foco visible con contorno cian y estados `aria-current` en la navegación.
- Los conmutadores de capa usan `aria-pressed`; el texto descriptivo del plano se anuncia con `role="status"`.
- Los esquemas decorativos están marcados como tales; su información se repite en texto.
- Toda animación se desactiva con `prefers-reduced-motion: reduce`.

## Validación

`npm run typecheck` y `npm run lint` se ejecutan sin errores.

La compilación de producción no pudo ejecutarse en el entorno donde se preparó el rediseño: el registro de npm bloquea por política la descarga del binario `@next/swc-linux-arm64-gnu` y de varios paquetes del proyecto. La revisión visual se hizo renderizando los componentes reales con `react-dom/server` y capturando las páginas en Chromium a 1440 px y 390 px. Conviene ejecutar `npm run build` en el equipo de desarrollo antes de promover la rama.

## Contenido

Los textos evitan cifras, plazos, testimonios y afirmaciones que no puedan sostenerse. Las promesas se expresan en términos cualitativos y verificables. `src/lib/content.ts` concentra servicios, sectores, método, pilares y datos de contacto: cambiar ahí un texto lo actualiza en todo el sitio.
