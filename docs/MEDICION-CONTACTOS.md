# Medición de contactos

Estado: eventos implementados; Google Analytics NO configurado. No hay historial,
almacenamiento de eventos ni estadísticas hasta conectar un proveedor.

El sitio emite `datalink:contact` en `window` y reenvía a `window.gtag`, únicamente
si una integración ya lo ha configurado. No carga scripts, cookies ni trackers.
No añadir un segundo detector de clics con los mismos eventos en Tag Manager.

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

Para activar GA4: crear la propiedad del negocio y su flujo web; configurar el
identificador público G-… y las preferencias de privacidad correspondientes;
verificar eventos en DebugView y marcar contact_form_success como evento clave.
La confirmación de reservas necesita una integración separada del calendario;
no debe inferirse de los clics. Revisar resultados por página e idioma.

Las demostraciones son escenarios ilustrativos, no casos de éxito ni resultados
medidos. Sustituirlas por proyectos reales solo con datos y permiso del cliente.
