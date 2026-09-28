# Ecosistema comercial

Sitio de producción: https://www.datalinkcorporation.com/

## Implementado

- WhatsApp, teléfono y correo visibles en Contacto.
- Formulario conectado a Formspree, con confirmación de envío aceptado y alternativa por correo.
- Reservas de 30 minutos por Google Calendar, diariamente de 8 AM a 10 PM (Miami).
- GA4 G-S9WVMKHH03 con consentimiento y evento clave contact_form_success. Ver MEDICION-CONTACTOS.md.
- Productividad con IA: página bilingüe enlazada desde menú, pie, Soluciones y carrusel.
- Títulos, descripciones y canonical individuales.
- OpenGraph y Twitter con imagen PNG 1200 × 630. Regenerar: `node scripts/generate-og.mjs`.
- Sitemap y robots con URL canónica www.
- Schema.org Organization con contacto real y Service para cada servicio.
- Search Console: dominio verificado por TXT en Cloudflare. Conservar ese registro.

## Pendiente de datos o cuentas

- Meta Pixel: ID de píxel del negocio, consentimiento de marketing y comprobación en Events Manager. No contar la apertura de mailto o WhatsApp como una venta ni una consulta recibida.
- Google Business Profile: confirmar existencia de ficha, nombre, categoría, área de servicio o dirección, horario y realizar la verificación que Google solicite.
- Correo corporativo: elegir proveedor y buzones antes de añadir MX, SPF, DKIM y DMARC. No crear registros DNS de un proveedor sin confirmar.

Las variables configuradas en Vercel necesitan un nuevo despliegue para aplicarse. No registrar conversiones ficticias ni activar identificadores de ejemplo.
