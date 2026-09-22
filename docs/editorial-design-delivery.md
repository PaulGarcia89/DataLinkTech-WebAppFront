# Diseño editorial y carrusel — entrega

Implementación de la propuesta visual aprobada: fondo marfil, tipografía editorial, azul corporativo, fotografías de contexto, ilustraciones y navegación simplificada. Se conserva el isotipo original.

## Imágenes aprobadas

Los archivos finales se extrajeron de las láminas aprobadas, sin regenerar las escenas. Las fotografías alternativas generadas durante el trabajo se descartaron y no están en el proyecto.

- `public/images/restaurant.webp`: fotografía de la lámina «ChatGPT Image Sep 22, 2026, 01_10_20 AM.png», área (34, 300), 749 × 377.
- `public/images/warehouse.webp`: fotografía de la propuesta de carrusel `exec-0da66561-51bc-4c33-8172-bdb06e82b1f6.png`, área (34, 299), 1074 × 346.
- `public/images/illustration-{automate,develop,connect}.webp`: gráficos originales de la primera lámina, extraídos completos y exportados a WebP.

Se conserva todo el encuadre disponible de cada fotografía en su lámina. No se inventaron zonas que no existían en la imagen aprobada. Las imágenes se presentan como escenarios ilustrativos, no como proyectos ejecutados.

## Carrusel

Dos diapositivas, una imagen visible cada vez. Flechas anterior/siguiente, selectores con estado accesible, teclas izquierda/derecha y detección de gesto horizontal en móvil. Sin reproducción automática. Altura natural, ancho adaptable y `object-fit: contain`: no se recorta la imagen para llenar el contenedor. Los pies de imagen llevan a la industria correspondiente.

## Alcance

Portada recompuesta, cabecera/pie, superficies y contraste de páginas internas. Nueva página `/industrias/warehouse/`, incluida en sitemap e Industrias. Se explica el análisis de flujo, tiempos de ciclo y unidades; no se presentan métricas inventadas ni un sistema en vivo.

## Validación

- Lint, TypeScript, build y auditoría de 13 páginas estáticas.
- Portada: 1440, 1280, 1024, 768, 430, 390 y 375 px, sin desbordamiento horizontal; relación de aspecto visible igual a la original.
- Cambio de diapositiva, estado seleccionado, navegación por teclado y menú móvil con Escape.
- Doce páginas internas inspeccionadas a 375 px, con un H1 y sin desbordamientos.
- Auditoría local inicial: accesibilidad 100, buenas prácticas 100, SEO 100. Rendimiento local 79 sobre servidor Python sin compresión; no se equipara con producción.
- Imágenes y gráficos finales: aproximadamente 284 KB en total.

El formulario conserva su comportamiento mailto. Las escenas y diagramas son ilustrativos. El gesto táctil está implementado; no se ha probado en un teléfono físico.
