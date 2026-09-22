# Ecosistema comercial

Sitio de producción: https://www.datalinkcorporation.com/

## Implementado

- WhatsApp, teléfono y correo visibles en Contacto.
- Formulario que prepara correo mediante mailto (no envía ni almacena consultas).
- Títulos, descripciones y canonical individuales.
- OpenGraph y Twitter con imagen PNG 1200 × 630. Regenerar: `node scripts/generate-og.mjs`.
- Sitemap y robots con URL canónica www.
- Schema.org Organization con contacto real y Service para cada servicio.
- Search Console: dominio verificado por TXT en Cloudflare. Conservar ese registro.

## Pendiente de datos o cuentas

- Google Analytics: propiedad GA4 y Measurement ID G-…; definir consentimiento y probar páginas vistas y clics de contacto sin enviar nombres, correos, teléfonos ni mensajes del formulario.
- Meta Pixel: ID de píxel del negocio, consentimiento de marketing y comprobación en Events Manager. No contar la apertura de mailto o WhatsApp como una venta ni una consulta recibida.
- Google Business Profile: confirmar existencia de ficha, nombre, categoría, área de servicio o dirección, horario y realizar la verificación que Google solicite.
- Reservas: enlace real del calendario, duración y disponibilidad de consulta.
- Correo corporativo: elegir proveedor y buzones antes de añadir MX, SPF, DKIM y DMARC. No crear registros DNS de un proveedor sin confirmar.
- Envío directo del formulario: proveedor de envío, credenciales solo de servidor, dominio verificado, validación y protección contra abuso. La exportación estática actual requiere un backend externo o migración explícita al runtime de Vercel.

Las variables configuradas en Vercel necesitan un nuevo despliegue para aplicarse. No registrar conversiones ficticias ni activar identificadores de ejemplo.
