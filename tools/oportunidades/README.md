# Registro privado de oportunidades

Iniciar desde la raíz del proyecto:

```sh
python3 -m http.server 3020 --bind 127.0.0.1 --directory tools/oportunidades
```

Abrir http://127.0.0.1:3020 en el mismo navegador y perfil cada vez. Detener con Ctrl+C.
No está en `public` ni se exporta a Vercel. No requiere cuentas, APIs ni servicios externos.
Los datos se guardan en localStorage del navegador, no en Git ni en el archivo HTML.
No es una aplicación multiusuario ni sincroniza entre equipos. No usar en un ordenador compartido.

## Rutina

1. Revisar Formspree, correo, llamadas y WhatsApp; crear cada consulta una sola vez, con una referencia que permita reconocerla.
2. Registrar servicio y origen conocido (no deducir ventas de clics de Analytics).
3. Cambiar de Consulta a Contactado al iniciar atención; asignar próxima acción y fecha.
4. Al enviar propuesta, registrar su importe y cambiar a Propuesta.
5. Marcar Ganada cuando el cliente acepte; Perdida cuando cierre sin venta. Anotar el motivo. El importe de una propuesta ganada no acredita un cobro.
6. Exportar un respaldo JSON semanal y antes de borrar el navegador. Guardarlo en una ubicación privada.

CSV sirve para análisis en una hoja de cálculo; JSON sirve para restauración. La importación combina por ID y conserva los registros existentes. No hay captura automática desde Formspree ni confirmación de reservas. Para eso se necesitará una integración de servidor y un destino privado autorizado.

## Medir oportunidades y ventas

- Cualificada: necesidad concreta confirmada, servicio adecuado y siguiente paso aceptado. Registra la evidencia; no se infiere de un clic o de enviar un formulario.
- Ganada: acuerdo comercial aceptado. Registra la fecha de cierre y la venta acordada, separada de la propuesta inicial.
- Cobrado: importe acumulado realmente recibido, actualizado manualmente; no puede superar la venta acordada.
- El resumen filtra por fecha UTC de creación de la consulta (cohorte), no por fecha del cobro. Conversión = ganadas cualificadas / consultas cualificadas de esa cohorte. Sin denominador se muestra «Sin datos».
- Los registros anteriores se conservan con calificación Pendiente y sin ventas o cobros inventados. Las ventas antiguas sin importe muestran una advertencia de total incompleto.
- JSON versión 2 conserva los nuevos campos; también se pueden importar respaldos versión 1. CSV incluye todos los campos.

Este panel es la fuente manual de resultados comerciales. GA4 sigue midiendo interacciones con consentimiento; no recibe nombres, teléfonos, notas, importes privados ni ventas ficticias. No hay sincronización automática ni acceso a pagos.
