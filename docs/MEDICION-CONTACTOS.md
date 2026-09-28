# Medición de contactos

Estado: GA4 configurado en una propiedad separada para datalinkcorporation.com.
Identificador público: `G-S9WVMKHH03`, flujo `15862069721`.
Zona horaria New York; moneda USD. Medición mejorada desactivada para evitar
captura automática de formularios, URLs y eventos duplicados.

El visitante debe aceptar las estadísticas. Antes de aceptar o al rechazarlas,
no se carga el script de Google. Las preferencias se guardan en localStorage;
se pueden modificar desde el pie. Al retirar consentimiento se desactiva la
recopilación y se borran cookies _ga accesibles desde este dominio.
No se activan Google Signals ni personalización publicitaria.

Se envía una vista por cambio de ruta, sin query ni fragmento. Los eventos de
contacto se reenvían solo con consentimiento guardado. El evento DOM local
`datalink:contact` permanece disponible; no almacena ni transmite datos por sí solo.

| Evento | Significado |
| --- | --- |
| contact_phone_click | Clic en teléfono; no confirma una llamada |
| contact_sms_click | Clic en un enlace SMS, cuando exista |
| contact_whatsapp_click | Apertura de WhatsApp; no confirma un mensaje |
| contact_email_click | Apertura del cliente de correo |
| booking_open | Apertura del calendario; NO es una reserva confirmada |
| contact_form_success | Formspree aceptó el envío; no confirma entrega en Gmail |

Solo se transmiten nombre fijo del evento, ruta sin query/hash e idioma.
Nunca se incluyen nombre, email, teléfono, mensaje o valores del formulario.

Validación: comprobar visitas en Tiempo real y contact_form_success como evento
clave. Abrir el calendario NO representa una reserva confirmada. No enviar
consultas de prueba adicionales sin autorización. Los bloqueadores de anuncios
y el rechazo del consentimiento reducen la cantidad de visitas medidas.

Las demostraciones son escenarios ilustrativos, no casos de éxito ni resultados
medidos. Sustituirlas por proyectos reales solo con datos y permiso del cliente.
