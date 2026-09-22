# DATALINK — auditoría y arquitectura propuesta

Fecha de revisión: 22 de septiembre de 2026. Base: commit `78881be` en `main`, sincronizado con `origin/main` al comenzar. Sitio revisado: https://www.datalinkcorporation.com/.

Alcance de esta entrega: fase 1 completada y propuesta de fase 2 documentada. No se ha implementado el rediseño ni alterado producción. Este documento es el único archivo nuevo de esta fase.

## 1. Diagnóstico ejecutivo

La base técnica es aprovechable. La experiencia presenta una empresa tecnológica, pero todavía no explica visualmente cómo conecta datos, IA y operaciones. El principal cambio debe ser de jerarquía y narrativa, no una acumulación de efectos.

La portada actual abre con el mensaje correcto y enseguida distribuye la atención entre seis servicios equivalentes. El nuevo recorrido debe demostrar primero una automatización concreta, ampliar después al ecosistema y terminar conectando la capa digital con el negocio físico.

## 2. Inventario verificado

| Área               | Estado actual                                                             | Decisión propuesta                                                                |
| ------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Framework          | Next.js 16.3.5, App Router; React 19.3.0; TypeScript estricto             | Conservar el stack y el lockfile; no actualizar por motivos estéticos             |
| UI                 | Tailwind CSS 4.3.3, Framer Motion 13.4.0, Lucide                          | Conservar; usar SVG y CSS para la red                                             |
| Rendering          | Exportación estática, `trailingSlash: true`                               | Conservar durante el rediseño visual; reevaluar para envío de correo real         |
| Páginas            | Inicio, seis servicios, Nosotros, Contacto                                | Preservar URLs e incorporar industria de restaurantes                             |
| Contenido          | Datos de servicios en `src/lib/content.ts`                                | Ampliar a modelos de servicio, industria y escenarios de demo                     |
| Estilos            | `globals.css`, aproximadamente 16 KB, reglas mayormente en líneas largas  | Separar tokens, base y estilos de componentes; eliminar sobrescrituras históricas |
| Marca              | Logo PNG 2172 × 724, aproximadamente 352 KB; Poppins y Montserrat locales | Conservar identidad; preparar variantes de uso y recursos optimizados             |
| SEO                | Canonical con www, OG/Twitter, Organization, Service, sitemap, robots     | Preservar y ampliar contenido local sin relleno de palabras clave                 |
| Contacto           | WhatsApp, teléfono, Gmail y formulario mailto                             | Preservar enlaces; distinguir preparación de correo de envío efectivo             |
| Hosting            | Vercel conectado a GitHub; dominio/DNS en Cloudflare                      | Mantener; README aún describe Cloudflare Pages y debe corregirse                  |
| Analítica/reservas | No hay implementaciones de GA4, Meta ni agenda en el código               | Dependencias separadas: faltan cuentas/IDs/proveedor                              |

## 3. Hallazgos y prioridad

### A. Jerarquía comercial — alta

**Evidencia:** `src/app/page.tsx` pasa del hero a `ServiceCards`; `src/components/ui.tsx` presenta seis tarjetas del mismo tamaño. No existe una sección principal de aplicaciones de IA, demo de negocio, industria ni POS.

**Implicación:** IA aparece en el titular, pero recibe el mismo tratamiento comercial que soporte IT.

**Cambio propuesto:** dedicar el primer tramo a IA y automatización. Software y crecimiento ocupan el segundo plano narrativo; redes, POS, seguridad y soporte explican la base física que hace posible el sistema.

### B. Visual y movimiento — alta

**Evidencia:** el hero usa órbitas y etiquetas posicionadas; `Reveal` anima entrada al viewport. No hay señales entre nodos, selección de capacidades, reacción al cursor ni transformación ligada al proceso de negocio. Las clases `connection-line`, `line-one` y `line-two` no tienen reglas propias en CSS.

**Implicación:** la red ilustra una estética, pero no explica una operación.

**Cambio propuesto:** una gramática visual constante de entradas, rutas, decisiones y resultados. Cada señal representa un evento reconocible: mensaje, intención, registro o confirmación.

### C. Páginas internas — alta

**Evidencia:** `src/app/[slug]/page.tsx` usa la misma estructura y el mismo icono Network para seis servicios y Nosotros.

**Implicación:** las páginas cambian de texto, pero no demuestran capacidades distintas.

**Cambio propuesto:** mantener contenido y SEO compartidos, introducir composiciones específicas: flujo de IA, motor de marketing, interfaz de software y capas de infraestructura. Nosotros tendrá una ruta/composición explícita.

### D. Mantenibilidad — alta

**Evidencia:** `globals.css` contiene dos bloques `:root`, múltiples definiciones de `.logo`, dos de `.button-lime` y colores directos repartidos. `--lime` ahora representa cian. Página y componentes tienen JSX comprimido. `Logo` pertenece a un archivo cliente y usa `priority` tanto en cabecera como en pie.

**Cambio propuesto:** tokens semánticos, componentes legibles, Logo independiente, estilos por responsabilidad y prioridad de carga solo donde aporta valor. No convertir la página completa en un componente cliente.

### E. Conversión — alta

**Evidencia:** el formulario solo abre mailto. No existe backend, agenda ni confirmación de recepción. WhatsApp sí tiene destino real.

**Cambio propuesto:** evaluación tecnológica como intención principal, WhatsApp como alternativa directa. La demo no acepta datos reales ni ejecuta reservas. La conexión de correo y agenda se trata como integración independiente, sin bloquear la experiencia visual.

### F. Accesibilidad y móvil — media/alta

**Evidencia:** hay skip link, etiquetas de formulario, foco visible y reduced motion. El botón móvil mide 24 × 24 CSS px. El desplegable de escritorio depende de hover/focus-within y no comunica expansión con `aria-expanded`; tampoco tiene cierre explícito con Escape. El estado de navegación no usa `aria-current`.

**Observación visual:** a 375 px, el H1 parte «Tecnología e IA» dejando «IA» sola; la composición de red sigue siendo una reducción del escritorio. Gran parte de las etiquetas secundarias usan tamaños de 8–13 px.

**Cambio propuesto:** controles de al menos 44 × 44 px como criterio del proyecto; menú controlado por estado con teclado/Escape y retorno de foco; escala tipográfica móvil propia. No declarar incumplimiento WCAG global solo por estas observaciones: falta auditoría completa.

### G. Rendimiento — medir antes de prometer

**Evidencia:** imágenes sin optimización automática (`images.unoptimized: true`), logo de alta resolución usado a unos 200 px, fuentes mediante cinco imports generales de Fontsource, Framer Motion dentro del componente que también renderiza todas las tarjetas.

**Cambio propuesto:** revisar formatos/tamaños del logo; evaluar `next/font/local` con archivos latinos y pesos necesarios; cargar demos y red interactiva por separado; renderizar copy, links y SEO en servidor.

No se ha ejecutado Lighthouse ni medido INP con tráfico real. Los objetivos del brief son criterios de aceptación, no resultados actuales.

### H. SEO y marca — conservar y precisar

Metadata, canonical, OG y schemas ya existen. Faltan contenido contextual de Miami/South Florida y páginas de industria. El nuevo brief sí confirma el mercado inicial; no confirma dirección, horario, reseñas o resultados.

Mantener Organization y Service. Añadir `areaServed` donde corresponda al contenido real. No introducir LocalBusiness con dirección inventada. El logo disponible es raster y su lema corresponde a una entrega anterior; el nuevo lema se utilizará como texto accesible, sin deformar el archivo de marca. Un isotipo vectorial autorizado mejoraría la convergencia final hacia la D.

## 4. Validación de fase 1

- `npm run lint`: correcto.
- `npm run typecheck`: correcto.
- Revisión de código: rutas, límites servidor/cliente, CSS, formulario, metadata y configuración.
- Navegación en producción: Inicio → IA y Automatización → Contacto.
- Medición DOM con altura de 900 px: portada, IA y Contacto en los siete anchos siguientes.

| Ancho CSS | Inicio: ancho de documento | IA: ancho de documento | Contacto: ancho de documento |
| --------- | -------------------------: | ---------------------: | ---------------------------: |
| 1440      |                       1440 |                   1440 |                         1440 |
| 1280      |                       1280 |                   1280 |                         1280 |
| 1024      |                       1024 |                   1024 |                         1024 |
| 768       |                        768 |                    768 |                          768 |
| 430       |                        430 |                    430 |                          430 |
| 390       |                        390 |                    390 |                          390 |
| 375       |                        375 |                    375 |                          375 |

No hay overflow horizontal de documento en esas muestras. Esto no equivale a una auditoría visual completa de todas las páginas, ni a validar todos los controles, zoom al 200 %, lector de pantalla o dispositivos físicos. La fase 9 deberá cubrirlos. No se repite build en esta fase documental: la última versión ya compiló y no se cambió código de aplicación.

## 5. Arquitectura UX propuesta — fase 2

### Concepto: una señal que se convierte en una oportunidad

La red DATALINK tendrá una topología definida, no partículas al azar. Un evento entra por un canal, la IA interpreta su intención, una automatización conecta herramientas y un resultado llega al negocio. Ese recorrido se repite con distinto contexto para que el visitante aprenda el lenguaje.

La red no usará esferas decorativas ni un cerebro genérico. La profundidad se crea con planos, jerarquía de línea y desplazamientos pequeños. El cian indica actividad; el azul indica capacidad; el gris indica espera. El color nunca será la única señal de estado.

### Sitemap

Conservar las nueve URLs actuales. Añadir:

- `/soluciones/`: explicación del ecosistema conectado y acceso a las seis capacidades.
- `/industrias/`: selector entre restaurantes, comercios, oficinas y empresas en crecimiento.
- `/industrias/restaurantes/`: primera experiencia de industria completa, con capa digital y física.

POS formará parte del recorrido de restaurantes y de infraestructura. No crear una séptima tarjeta equivalente a IA. Las demás industrias pueden tener contenido dentro del índice hasta que exista suficiente material útil para páginas propias.

Navegación: Logo → Inicio; Soluciones; IA & Automatización; Industrias; Nosotros; CTA «Hablemos». Contacto continúa accesible en CTA y footer. No alterar slugs ya publicados.

### Recorrido de portada

| Momento                            | Contenido                                           | Composición                                                 | Razón de existir                                            |
| ---------------------------------- | --------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| 1. Entender en 5 segundos          | Titular de IA + mensaje de automatización + dos CTA | Hero editorial con red asimétrica y una señal completa      | Explicar qué hace DataLink y hacia dónde avanzar            |
| 2. Ver la IA trabajar              | Demo de consulta/reserva                            | Conversación junto a flujo de operaciones; superficie clara | Convertir una promesa abstracta en una secuencia entendible |
| 3. Reconocer el problema           | Antes / con DataLink                                | Comparación de flujo fragmentado y conectado                | Mostrar qué trabajo cambia sin inventar cifras              |
| 4. Explorar capacidades            | Ecosistema, con IA seleccionada inicialmente        | Nodos seleccionables y panel editorial compartido           | Mostrar prioridades e interdependencias                     |
| 5. Llevarlo al negocio físico      | Restaurante conectado                               | Plano esquemático por capas, no render 3D pesado            | Integrar reservas, CRM, POS, Wi-Fi y seguridad              |
| 6. Entender crecimiento y software | GrowthEngine + SoftwareProcess                      | Flujo de captación y fragmento de interfaz operativa        | Explicar cómo se convierte demanda en trabajo gestionable   |
| 7. Confiar en el enfoque           | Resultados cualitativos + filosofía + proceso       | Tipografía amplia y trazos conectores; sin otra cuadrícula  | Dar criterio, claridad y una expectativa creíble            |
| 8. Actuar                          | Evaluación tecnológica / WhatsApp                   | Señales convergen hacia marca; cierre oscuro                | Conectar la demostración con una conversación real          |

Los 8 momentos agrupan requisitos del brief para evitar una portada de 15 secciones repetitivas. El detalle de marketing, software e infraestructura se expande en sus páginas.

### Interacciones definidas

- **DatalinkNetwork:** un grafo SVG con nodos HTML accesibles. Selección mediante click, teclado o touch; movimiento de proximidad solo en puntero fino. Cambia el camino iluminado según capacidad. El contenido útil está disponible antes de cargar animación.
- **InteractiveDemo:** escenarios locales predefinidos. Estados: preparado → intención → disponibilidad simulada → registro → confirmación simulada → seguimiento. Acciones: iniciar, pausar, siguiente paso, reiniciar. Rótulo permanente «Demostración interactiva — no crea reservas ni envía mensajes». Un resumen `aria-live="polite"` anuncia el paso, sin leer cada partícula.
- **BeforeAfter:** control range con etiqueta, teclado y botones Antes/Con DataLink; mismos datos ficticios a ambos lados. En móvil, selector y lectura vertical; el gesto de arrastre nunca es obligatorio.
- **ServiceNetwork:** lista de botones o tabs con relaciones ARIA y panel que explica problema, solución y resultado esperado. La lista enlazada persiste sin JavaScript. No presentar resultados esperados como garantías.
- **RestaurantDigitalTwin:** selector de capas IA/Software/Datos/Red/Dispositivos/Seguridad. Cada selección resalta un grupo de elementos y explica su dependencia. POS aparece como punto de operación, no como sistema ya integrado.
- **GrowthEngine:** tráfico → consulta → clasificación → CRM → seguimiento. Sin valores de conversión inventados. La animación muestra secuencia, no éxito garantizado.
- **SoftwareProcess:** problema → arquitectura → interfaz → automatización → despliegue → evolución. Fragmentos de interfaz con datos de ejemplo claramente identificados.

### Composición móvil

Hero con copy compacto, CTA principal visible y señal vertical breve. Red completa reemplazada por secuencia vertical seleccionable. Demos apiladas: mensaje, estado actual y resultado; no paneles minúsculos lado a lado. El gemelo del restaurante pasa a lista de capas. Sin scroll hijacking ni largos bloques sticky en móvil. Todos los controles funcionan sin hover.

## 6. Mapa de componentes y datos

```text
src/
  app/
    page.tsx                     # Solo composición de secciones
    [slug]/page.tsx               # Servicios existentes, con resolución tipada
    nosotros/page.tsx             # Filosofía y proceso propios
    soluciones/page.tsx
    industrias/page.tsx
    industrias/restaurantes/page.tsx
    contacto/page.tsx
  components/
    layout/                      # Navbar, BrandLogo, Footer
    home/                        # Hero, AISection, Results, About, FinalCTA
    network/                     # DatalinkNetwork, DataNode, SignalPath
    demo/                        # InteractiveDemo, AIWorkflow, DemoControls
    solutions/                   # ServiceNetwork, ServiceDetail
    industries/                  # RestaurantDigitalTwin, InfrastructureLayers
    growth/                      # GrowthEngine, SoftwareProcess
    comparison/                  # BeforeAfter
    ui/                          # Container, SectionHeading, Button, Reveal
    seo/                         # StructuredData
  content/
    services.ts
    industries.ts
    demo-scenarios.ts
    navigation.ts
  lib/
    seo.ts                       # Mantener función de metadata
    motion.ts                    # Variantes y tiempos compartidos
  styles/
    tokens.css
    globals.css                  # Reset, tipografía y estilos base
```

Mapa conceptual; los nombres podrán ajustarse al refactor. Los componentes narrativos serán Server Components. Solo menú, selectores y demos necesitarán estado cliente. La red decorativa usará SVG/CSS; las interacciones se cargarán como islas pequeñas. Un componente ServiceDetail decide la composición; el contenido no contiene JSX ni lógica de animación.

Modelos de contenido: Service (slug, nivel de prioridad, problema, solución, resultado esperado, casos, visual); Scenario (mensaje, pasos, estados y resultados ficticios); Industry (necesidades, capas físicas, flujos digitales). Una sola fuente para nombres y enlaces en navegación, sitemap y contenido.

## 7. Sistema visual propuesto — especificación previa a fase 3

- Colores: marca `#0B2D5B`, acción `#0066FF`, señal `#00D1FF`; fondos casi negros; superficie clara `#F5F7FA`; texto oscuro sobre paneles claros. Tokens distintos para texto, superficie, borde, foco y estado.
- Tipografía: Poppins 500/600 en títulos, Montserrat 400/500/600 en lectura. Texto principal 16–18 px, secundario normalmente 14 px; etiquetas pequeñas limitadas a material accesorio. Tamaños fluidos con límites por composición, sin cortes rígidos que dejen «IA» aislada.
- Espaciado: escala de 4/8/12/16/24/32/48/64/96/128 px; gutters móviles de 20–24 px; contenedor máximo de 1280 px.
- Bordes: 1 px, contraste según superficie. Radios: 0/4/8/16; cápsulas solo para estados breves.
- Sombras: elevación para paneles funcionales. Glow restringido a señal activa, intensidad baja.
- Profundidad: tres planos visuales como máximo, sin perspectiva sobre texto legible.
- Capas: contenido 0, red 1, paneles 10, nav 30, diálogo 50, skip link 100.
- Breakpoints iniciales: 48rem, 64rem, 80rem; validación en los siete anchos del brief.

## 8. Estrategia de movimiento

Respuesta de control 120–180 ms; transición de panel 220–320 ms; revelado 400–600 ms; señal narrativa 1,2–2 s. Evitar bucles de movimiento imprescindibles: una secuencia completa al entrar y reproducción opcional. Pausar al salir del viewport o al ocultar la pestaña.

Scroll nativo. Usar progreso de sección para revelar conexiones, sin capturar rueda ni bloquear lectura. Transform y opacity para desplazamiento/entrada; SVG para rutas breves y acotadas. No animar blur o grandes sombras por frame. No usar React state en cada movimiento del puntero.

`prefers-reduced-motion`: secuencia estática con selección manual; sin parallax, señales en bucle ni morph obligatorio. La información y las acciones permanecen iguales. Cualquier animación automática prolongada deberá tener pausa accesible.

Three.js/R3F/GSAP no se justifican para la primera implementación: SVG, CSS y Framer Motion existentes cubren estas interacciones con menor complejidad.

## 9. SEO, rendimiento y aceptación

Preservar canonical www, códigos de respuesta, las nueve rutas, OG/Twitter, robots, sitemap y TXT de Search Console. Incorporar nuevas URLs solo cuando tengan contenido real. Miami/South Florida aparece como mercado servido en copy y Service; no crear direcciones u horarios.

Objetivos de laboratorio del brief: Performance >90; Accessibility/Best Practices/SEO >95. Medir build de producción con Lighthouse móvil, guardar versión/hardware/configuración y usar mediana de tres corridas. Validar manualmente teclado, foco, 200 % zoom, reduced motion y menú. Auditar recursos iniciales y carga diferida antes de añadir efectos. Una puntuación de laboratorio no certifica WCAG ni sustituye Core Web Vitals de campo.

Tests útiles: transición/reinicio de demo, ausencia de llamadas reales de reserva, selección por teclado de capacidades/capas, integridad de enlaces, metadata/canonical, menú móvil y formulario existente. No añadir tests que solo repliquen JSX.

La fase 9 incluirá capturas de todos los anchos, revisión completa de rutas y comprobación de assets. Publicación final desde rama de rediseño con preview de Vercel; mantener main estable durante la construcción. Validar antes de promover la nueva experiencia.

## 10. Cierre de fases y dependencias

**Fase 1:** auditoría completada; lint y tipos correctos. Único archivo añadido: este documento. Pendiente: Lighthouse, contraste completo, lectores de pantalla y validación de todos los escenarios, previstos para las fases 8–9.

**Fase 2:** propuesta de sitemap, recorrido UX, concepto visual, mapa de componentes y movimiento completada en este documento. Validación: cotejo con el brief, conservación de rutas y diferenciación de componentes reales frente a demostraciones. Sin código ejecutable nuevo ni despliegue.

**Siguiente fase:** establecer tokens y primitivas en una rama de rediseño; después construir el hero y la demo como primera sección vertical verificable.

Dependencias externas que no impiden comenzar diseño: isotipo vectorial si existe, proveedor para formulario/correo, agenda real, IDs de GA4/Meta y datos definitivos de ficha comercial. No asumir que la demo proporciona esas integraciones. El estado previo de Search Console tenía dominio verificado y sitemap enviado, con lectura de Google pendiente/error; esta auditoría no volvió a comprobar ese servicio.
