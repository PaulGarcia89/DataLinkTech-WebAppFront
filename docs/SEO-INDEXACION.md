# SEO orgánico e indexación de DataLink

Plan del 28 de septiembre de 2026. Mercado inicial: Miami y South Florida;
atención en español e inglés. Sin campañas pagadas ni herramientas de pago.

## Base técnica

- Dominio canónico: https://www.datalinkcorporation.com/.
- El dominio sin www redirige permanentemente al canónico (308 comprobado).
- Las URLs inexistentes responden 404; no deben redirigirse todas a Inicio.
- 13 páginas por idioma; inglés bajo /en/. Cada página tiene canonical propio
  y alternates es, en y x-default. No cambiar URLs existentes por palabras clave.
- Sitemap público: https://www.datalinkcorporation.com/sitemap.xml.
- Robots público: https://www.datalinkcorporation.com/robots.txt, permite rastreo.
- HTML estático: contenido y enlaces disponibles sin ejecutar JavaScript.
- Organization, WebSite, Service y BreadcrumbList donde corresponde.
- No se agregan direcciones, horarios, valoraciones ni clientes ficticios.
  Mantener Organization hasta confirmar datos de una ubicación para LocalBusiness.
- Las compilaciones Preview de Vercel emiten noindex; producción index,follow.
  La configuración es de compilación: no promover un Preview sin recompilar
  para Production. No bloquear /_next/: Google necesita renderizar CSS y JS.
- No se fabrican fechas lastmod en cada build, ni se usan meta keywords,
  compra de enlaces o páginas casi idénticas por cada ciudad.

## Search Console: configuración gratuita

1. Entrar con la cuenta empresarial y añadir propiedad de tipo Dominio:
   datalinkcorporation.com (sin protocolo ni www).
2. Copiar el TXT exacto que entrega Google. En Cloudflare, DNS > Records:
   Type TXT, Name @, Content el valor google-site-verification=..., TTL Auto.
   Conservar todos los registros de web y correo existentes. Mantener el TXT
   después de verificar. No inventar ni publicar un valor de ejemplo.
3. Volver a Google y Verificar. Si falla, comprobar propagación del TXT.
4. En Sitemaps enviar https://www.datalinkcorporation.com/sitemap.xml.
5. En Inspección de URLs, probar Inicio, /en/, /soporte-it/,
   /ia-y-automatizacion/ y las dos páginas de industrias. Solicitar indexación
   una vez cuando el test en vivo sea correcto. No repetir envíos a diario.
6. Revisar Indexación > Páginas. Distinguir descubierta, rastreada e indexada.
   Un sitemap aceptado NO confirma indexación; Google decide qué indexa.
7. En Rendimiento, analizar consultas, páginas, país, dispositivo y clics.
   Separar marca/no marca y español/inglés. Comparar periodos de 28 días.

## Mapa de intención de búsqueda

Son hipótesis basadas en los servicios reales, no datos de volumen de búsqueda.
Validarlas con las consultas que aparezcan en Search Console.

| Página | Intención en español | Intención en inglés |
| --- | --- | --- |
| Inicio | servicios tecnológicos Miami | business technology Miami |
| ia-y-automatizacion | automatización con IA para empresas | AI automation Miami |
| software-a-medida | desarrollo de software a medida Miami | custom software development Miami |
| soporte-it | soporte técnico para empresas Miami | IT support Miami |
| redes-e-infraestructura | instalación Wi-Fi empresarial Miami | business Wi-Fi installation Miami |
| seguridad-y-control | cámaras y control de acceso Miami | business security cameras Miami |
| marketing-digital | marketing digital para negocios Miami | digital marketing Miami |
| industrias/restaurantes | POS y Wi-Fi para restaurantes Miami | restaurant technology Miami |
| industrias/warehouse | cámaras IA productividad almacenes | warehouse productivity computer vision |

## Trabajo orgánico durante 90 días

Días 1–7: verificar Search Console, enviar sitemap y registrar situación inicial.
Completar Google Business Profile si la empresa cumple los requisitos: nombre
real, teléfono, web, categoría principal real, servicios, horario y zona de
servicio. Si no se reciben clientes en una oficina, no anunciar una dirección
como local abierto al público. Confirmar estos datos antes de crear el perfil.

Días 8–30: publicar dos guías útiles basadas en experiencia real, enlazadas desde
su servicio correspondiente: «Cómo preparar el Wi-Fi de un restaurante para la
hora pico» y «Qué puede medir una cámara con IA en un almacén y qué no».
Describir requisitos, límites, decisiones y ejemplos propios; revisión técnica
antes de publicar y traducción humana revisada para inglés.

Días 31–60: documentar un proyecto real con autorización del cliente (problema,
solución y evidencia, sin inventar métricas). Añadir fotos reales al perfil de
empresa y solicitar reseñas honestas a clientes reales, sin incentivos.

Días 61–90: revisar consultas e impresiones, mejorar páginas con impresiones y
pocos clics, ampliar respuestas a dudas reales y buscar menciones pertinentes
en asociaciones o proveedores con los que exista relación real.

Medir: páginas válidas indexadas, clics orgánicos, consultas sin marca,
impresiones por servicio e idioma y consultas comerciales recibidas. Search
Console no mide por sí sola formularios enviados ni conversiones de WhatsApp.
No hay plazo ni posición garantizada; no se requiere contratar Google Ads.

## Verificación tras cambios

npm run lint
npm run build -- --webpack
python3 scripts/audit-static.py
python3 scripts/audit-seo.py

Comprobar en producción respuestas 200/404, canonical, robots y sitemap.
Usar Inspección de URLs y Rich Results Test para la perspectiva de Google.

## Fuentes oficiales

- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- https://support.google.com/webmasters/answer/9008080
- https://support.google.com/business/answer/7091
- https://developers.google.com/search/docs/appearance/structured-data/organization

## Estado comprobado en Search Console el 28 de septiembre

- La propiedad de dominio es accesible con la cuenta empresarial existente.
  No fue necesario modificar DNS ni crear otra propiedad de prefijo.
- Sitemap ya enviado el 21 de septiembre: estado Success, última lectura
  27 de septiembre, 26 URLs descubiertas. No se duplicó el envío.
- El informe agregado (fecha mostrada 20 de septiembre) tenía 0 indexadas,
  3 rastreadas sin indexar y 1 con redirección. Es un informe atrasado:
  la Inspección de URL individual confirmó que la portada canónica SÍ está
  indexada y puede aparecer en Google.
- La URL con redirección es https://datalinkcorporation.com/; es correcto que
  Google indexe su destino con www en lugar de indexar ambas versiones.
- Google confirmó «Indexing requested» para la portada después del despliegue;
  la URL quedó añadida a su cola prioritaria de rastreo.
  No se debe confundir esta solicitud con una garantía de posición o de plazo.
- No se afirma que todas las 26 URLs estén indexadas: descubrimiento en sitemap
  y presencia efectiva en el índice son estados diferentes.
