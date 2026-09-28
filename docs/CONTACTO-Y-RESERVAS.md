# Activación del formulario y las reservas

## Estado actual

- Formspree creado: `mgavrann`, receptor verificado `datalinkprotech@gmail.com`.
- Google Calendar: consultas de 30 minutos todos los días, 08:00–22:00,
  zona America/New_York. Teléfono obligatorio y canal preferido (teléfono,
  SMS o WhatsApp). Antelación mínima 4 horas, máximo 60 días.
- URLs públicas configuradas en `src/i18n/integrations.ts`. Las variables de
  entorno opcionales permiten reemplazarlas; una cadena vacía las desactiva.
- El formulario informa que Formspree procesa el envío. La recepción en el
  correo y una reserva completa deben verificarse con una prueba autorizada.

## Formulario directo

1. El propietario crea su cuenta y formulario en https://formspree.io/,
   revisa las condiciones y el plan disponible, y verifica su correo receptor.
2. Configurar el receptor datalinkprotech@gmail.com en el panel del proveedor.
3. Configurar dominios permitidos y protección antispam en el proveedor.
4. Añadir en Vercel > Settings > Environment Variables (Production):
   NEXT_PUBLIC_FORMSPREE_ENDPOINT con el endpoint público /f/ID del formulario.
   No utilizar una API key privada. No activar CAPTCHA sin integrar su token.
5. Recompilar Production. El botón cambia a «Enviar consulta» automáticamente.
6. Enviar una consulta de prueba consentida, comprobar recepción real y respuesta.
   Probar campos obligatorios, correo inválido, fallo de red y límites. La web
   muestra éxito únicamente con respuesta satisfactoria del proveedor; conserva
   los datos tras un error. El envío cuenta contra la cuota del plan elegido.
7. Revisar la política de privacidad aplicable al tratamiento de consultas antes
   de activar la recogida directa de datos. La interfaz informa del procesador.

El honeypot y el bloqueo del botón mientras envía reducen envíos accidentales;
no sustituyen la protección antispam del proveedor. No se guardan datos en el
navegador ni se añaden trackers. La recepción en la bandeja debe comprobarse
por separado: una aceptación HTTP no garantiza entrega del correo al inbox.

## Reservas

1. Crear un enlace público de citas en Google Calendar o Calendly desde la cuenta
   del negocio, si el plan de esa cuenta ofrece esa función.
2. Definir duración, zona horaria America/New_York, horas disponibles, antelación,
   modalidad de consulta y confirmaciones. No publicar horarios no atendidos.
3. Configurar NEXT_PUBLIC_BOOKING_URL en Vercel (Production) y recompilar.
4. Comprobar una reserva real, conflictos de disponibilidad y cancelación.

Sin enlace, continúa disponible la coordinación manual por WhatsApp. No se
promete un plan gratuito ilimitado ni se contrata ningún servicio automáticamente.
