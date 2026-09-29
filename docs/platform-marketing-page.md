# Página comercial de módulos — 2026-09-29

Alcance: únicamente WebAppDataLinkTechCorp. Sin cambios, conexiones ni acceso a datos del SaaS. Inicio conserva su contenido. Se añade Plataforma al menú y al pie; ajuste mínimo del encabezado para evitar que reservas se divida en varias líneas.

Rutas: /plataforma/ y /en/plataforma/. Incluidas en sitemap, canonical y hreflang. La página presenta ocho módulos; el explorador es conceptual, manual y no ejecuta operaciones reales. Reservas utiliza el calendario existente. No se enviaron formularios ni se crearon reservas durante QA.

Contenido: src/lib/platform-modules.ts. Traducciones: src/i18n/en.json. Estilos aislados: src/styles/platform.module.css. Regenerar inglés con npm run i18n:generate.

Validación:
- TypeScript y ESLint: sin errores.
- Exportación de producción: npm run build -- --webpack, correcta (44 páginas generadas).
- Turbopack bloqueado por permisos del entorno al abrir un puerto interno; no se cambió el compilador configurado del proyecto.
- Navegador: cambio entre los ocho módulos, reinicio de etapa al cambiar de módulo, avance del proceso, cambio ES/EN y acceso en menú móvil.
- Escritorio 1280 y 1440; móvil 390 y 375. Sin desbordamiento horizontal en las dimensiones revisadas; reserva del encabezado sin salto de línea tras el ajuste.
- HTML exportado: ocho artículos en ambos idiomas, canonical y alternancias correctas, ambas rutas en sitemap.

Limitaciones: esquemas explicativos, no capturas del producto. La página no certifica disponibilidad de módulos, firmas, cámaras o integraciones en producción. Confirmar alcance por cliente. Publicación pendiente; vista previa local en puerto 3030.
