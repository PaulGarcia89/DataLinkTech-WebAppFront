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
