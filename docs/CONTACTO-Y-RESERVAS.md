# Activación del formulario y las reservas

## Estado actual

- 12 preguntas frecuentes, dos por servicio, en español e inglés.
- La página Contacto permite coordinar una consulta por WhatsApp con mensaje
  prellenado. No promete un horario confirmado ni disponibilidad automática.
- Sin endpoint verificado, el formulario mantiene «Preparar correo» y explica
  que el visitante debe enviarlo desde su aplicación de correo.
- El envío AJAX directo está implementado, pero NO activo hasta configurar
  un formulario real. El calendario también depende de un enlace real.

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
