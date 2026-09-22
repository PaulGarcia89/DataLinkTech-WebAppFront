# Rediseño DataLink — implementación y validación

Fecha: 22 de septiembre de 2026.

## Entrega

- Identidad azul/cian, tipografía local Poppins/Montserrat y tokens semánticos.
- Portada centrada en IA, red seleccionable, comparación manual/conectado, ecosistema de servicios, restaurante conceptual, marketing y software, propósito y contacto.
- Demo con dos escenarios ficticios, avance, pausa, repetición y reinicio. Sin llamadas de negocio ni envío de datos.
- Capas del restaurante seleccionables; las páginas de redes, seguridad y soporte abren su capa correspondiente.
- Nuevas rutas Soluciones, Industrias y Restaurantes. Las nueve rutas anteriores se conservan.
- Transiciones progresivas con scroll nativo, señales SVG y respuesta al cursor. Movimiento reducido conserva información y avance manual.
- Exportación estática, canonical, OpenGraph, Schema.org, robots y sitemap. Datos comerciales facilitados por el propietario.

## Comprobaciones realizadas

- `npm run lint`, `npm run typecheck`, `npm run build`: correctos.
- `python3 scripts/audit-static.py`: doce páginas, un H1 por página, descripción y canonical correctos, estructura de datos presente, enlaces/anchors/recursos locales sin destinos ausentes. Las páginas técnicas de error se excluyen del conteo comercial.
- Portada en 1440, 1280, 1024, 768, 430, 390 y 375 px: sin desbordamiento horizontal.
- Todas las páginas internas en escritorio y 375 px: sin desbordamiento horizontal y un H1.
- Menú móvil: apertura, cierre con Escape y estado expandido correcto.
- Demo: primer paso de restaurante, reinicio, cambio a servicios y cinco pasos hasta finalizar. Reproducción automática del restaurante hasta el quinto paso y reinicio comprobados en producción.
- Comparación: Home/End por teclado actualizan el estado y el texto accesible.
- Servicios: selección de Marketing por teclado cambia botón y destino del panel.
- Restaurante: Seguridad cambia el panel y el flujo de nodos.
- Inspección visual de portada, flujo móvil, restaurante, marketing y software.
- Vista previa de Vercel `84b815c`: Ready y contenido comprobado antes de promover main. Dominio público verificado después; sin errores de consola observados en la portada.

## Rendimiento

Lighthouse 13.5.0, Chrome headless en macOS, perfil móvil y throttling simulado predeterminado. La medición local inicial usa el servidor estático Python sin compresión y no representa el CDN de producción. La primera medición pública motivó correcciones de prioridad de imagen y contraste durante movimiento.

Versión medida: `e367715`, publicada en https://www.datalinkcorporation.com/.

| Corrida | Performance | Accessibility | Best Practices | SEO | LCP   | CLS |
| ------- | ----------: | ------------: | -------------: | --: | ----- | --- |
| 1       |          89 |           100 |            100 | 100 | 3,2 s | 0   |
| 2       |          99 |           100 |            100 | 100 | 2,0 s | 0   |
| 3       |          99 |           100 |            100 | 100 | 2,1 s | 0   |
| Mediana |          99 |           100 |            100 | 100 | 2,1 s | 0   |

Los objetivos del brief se alcanzan en la mediana, no en todas las corridas. Se conserva la variación observada; no se interpreta como garantía de rendimiento en cualquier dispositivo/red. Chrome 153, móvil emulado de Lighthouse; CPU física no registrada. Resumen de datos: [lighthouse-redesign.json](lighthouse-redesign.json).

La fuente de títulos usa `font-display: optional`: si no llega a tiempo en una conexión lenta, se mantiene la fuente de respaldo durante esa navegación. El logo original conserva su archivo, pero tiene prioridad de carga baja. No se aplicó ocultación del titular ni animación de entrada al H1.

## Límites y dependencias

La IA y las interfaces son simulaciones explícitas. El formulario existente prepara un mailto; no guarda ni envía consultas desde un backend. Analytics, Meta Pixel, agenda y correo corporativo siguen requiriendo las cuentas/proveedores correspondientes. No se añadieron testimonios, métricas ni integraciones ficticias.

La revisión automatizada de accesibilidad no certifica WCAG. No se ha hecho una evaluación completa con lectores de pantalla ni pruebas en dispositivos físicos. La preferencia de movimiento reducido está cubierta en código; la revisión del sistema operativo no formó parte de esta entrega. Las cifras Lighthouse son de laboratorio, no datos de usuarios reales.
