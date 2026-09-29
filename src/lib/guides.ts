export const guides = [
  {
    slug: "productividad-camaras-existentes",
    answer:
      "Depende de la escena y del acceso al video. Se pueden reutilizar cámaras cuando el evento es visible, la imagen tiene suficiente detalle y existe una integración autorizada. Primero revisamos una muestra; no hace falta sustituir equipos sin evaluarlos.",
    questions: [
      {
        question: "¿Qué información debo preparar?",
        answer:
          "Marca y modelo de cámaras y grabador, plano del área y el evento que quieres contar. Acordamos el canal autorizado antes de compartir video.",
      },
      {
        question: "¿Cómo sé si el conteo es fiable?",
        answer:
          "Compara eventos detectados con una revisión manual del mismo intervalo. Registra errores y omisiones; el umbral aceptable depende de la decisión que tomarás.",
      },
    ],
    href: "/guias/productividad-camaras-existentes/",
    title: "¿Puedo medir productividad con mis cámaras actuales?",
    description:
      "Qué comprobar antes de reutilizar cámaras para contar unidades, medir tiempos y observar el flujo de trabajo.",
    service: "/medicion-de-productividad/",
    sections: [
      {
        title: "Empieza por una pregunta concreta",
        body: "Elige un evento visible: una caja que cruza una zona o un pedido que llega al punto de entrega. Define qué inicia y termina el evento. Una imagen por sí sola no explica por qué una operación se retrasa.",
      },
      {
        title: "Comprueba que la escena sirve",
        body: "Revisa una muestra en condiciones normales y en horas de mayor actividad. Busca objetos tapados, reflejos, poca luz y cambios de posición. La colocación y la calidad de imagen afectan al análisis; una cámara útil para vigilancia puede no mostrar el detalle necesario para contar un producto.",
      },
      {
        title: "Revisa compatibilidad y acceso",
        body: "Prepara marca y modelo de cámaras y grabador, resolución disponible y forma de acceso autorizada. Hay que confirmar si el análisis puede ejecutarse en el equipo, en un servidor o mediante otro servicio. No todos los equipos permiten la misma integración.",
      },
      {
        title: "Valida antes de ampliar",
        body: "Como propuesta de piloto, compara el conteo automático con un conteo manual del mismo intervalo. Registra falsos conteos y eventos omitidos. Acuerda qué error es aceptable para tu decisión operativa y repite la prueba cuando cambie la escena.",
      },
      {
        title: "Qué preparar para una evaluación",
        body: "Trae el inventario de equipos, un esquema del área y la métrica que necesitas. Comparte imágenes únicamente por el canal y con los permisos acordados. La evaluación debe concluir qué se puede reutilizar, qué necesita ajuste y qué no es viable medir con la vista actual.",
      },
    ],
    source:
      "https://newsroom.axis.com/article/optimizing-analytics-performance",
    sourceLabel: "Axis — Optimizing video for analytics performance",
  },
  {
    slug: "wifi-restaurantes",
    answer:
      "Primero distingue un fallo de internet de uno de cobertura Wi-Fi: prueba por cable y por Wi-Fi en el mismo horario. Después revisa capacidad, interferencias y aislamiento entre invitados y operación. Comprar otro router no siempre resuelve el problema.",
    questions: [
      {
        question: "¿Necesito cambiar todos los equipos?",
        answer:
          "No se decide sin revisar el inventario. Un problema puede estar en el cableado, la ubicación, la configuración o el proveedor de internet.",
      },
      {
        question: "¿Qué comprobamos al terminar?",
        answer:
          "Cobertura en las zonas acordadas, conexión de POS e impresoras y separación de invitados. La prueba se realiza con los equipos que usa el negocio.",
      },
    ],
    href: "/guias/wifi-restaurantes/",
    title: "¿Cómo mejorar el Wi-Fi de un restaurante?",
    description:
      "Una revisión práctica de cobertura, dispositivos y separación de redes antes de comprar más equipos.",
    service: "/redes-e-infraestructura/",
    sections: [
      {
        title: "Distingue internet de cobertura",
        body: "Anota dónde y cuándo ocurre el fallo, cuántos dispositivos están conectados y qué aplicación falla. Compara una conexión por cable con una inalámbrica. Si ambas fallan al mismo tiempo, la investigación no debe centrarse únicamente en añadir puntos de acceso.",
      },
      {
        title: "Separa clientes y operación",
        body: "Una red de invitados está pensada para visitantes que necesitan internet. Revisa con el instalador las restricciones entre esa red, los equipos de trabajo y los sistemas de administración. Un nombre de Wi-Fi diferente no demuestra por sí solo que exista aislamiento.",
      },
      {
        title: "Evalúa el espacio con actividad real",
        body: "Incluye salón, terraza, cocina y caja en el recorrido de prueba. Registra cortes y zonas débiles con los dispositivos que realmente utiliza el equipo. La ubicación de los puntos de acceso y el cableado se decide después de evaluar el espacio, no solo por la superficie del local.",
      },
      {
        title: "Planifica la intervención",
        body: "Prepara un inventario de router, switches, puntos de acceso, terminales POS e impresoras. Acuerda una ventana de intervención, un respaldo de configuración cuando sea posible y una forma de volver al estado anterior si una prueba falla.",
      },
      {
        title: "Qué debe validar la entrega",
        body: "Solicita pruebas de las funciones acordadas: terminales conectados, impresión de pedidos, acceso de invitados y continuidad al moverse por las zonas necesarias. Conserva el inventario y una explicación de cómo solicitar soporte. Las pruebas deben ajustarse a las funciones de tus equipos.",
      },
    ],
    source:
      "https://instant-on.hpe.com/techdocs/en/content/networks/mobile/guest_nwk.htm",
    sourceLabel: "HPE Networking Instant On — Guest Network",
  },
  {
    slug: "vision-artificial-almacenes",
    answer:
      "Un almacén necesita un evento visible, una definición de la métrica, acceso autorizado al video y una referencia manual para validar. Empieza por una zona y una decisión operativa antes de ampliar el análisis.",
    questions: [
      {
        question: "¿Qué puede medir un piloto?",
        answer:
          "Unidades que cruzan una zona, tiempos entre eventos visibles o acumulación de materiales. La visibilidad y las reglas del proceso determinan qué es viable.",
      },
      {
        question: "¿Qué debe incluir una propuesta?",
        answer:
          "Zona, métrica, criterios de aceptación, panel o exportación, permisos, almacenamiento, mantenimiento y costes recurrentes. El alcance se acuerda después de evaluar la operación.",
      },
    ],
    href: "/guias/vision-artificial-almacenes/",
    title: "¿Qué necesita un almacén para implementar visión artificial?",
    description:
      "Cómo definir un piloto de conteo y tiempos de proceso con objetivos, muestras y criterios de validación.",
    service: "/ia-y-automatizacion/",
    sections: [
      {
        title: "Selecciona una sola decisión",
        body: "Empieza por la decisión que quieres mejorar: ajustar una estación, entender una cola o comprobar unidades que pasan por una zona. Describe quién utilizará el dato y qué hará con él. Esta propuesta de piloto se centra en procesos y zonas, sin asignar puntuaciones individuales a trabajadores.",
      },
      {
        title: "Define la unidad y el intervalo",
        body: "Aclara si contarás cajas, pallets o movimientos. Define cuándo empieza y termina un ciclo y cómo tratar devoluciones o repeticiones. Dos equipos pueden interpretar productividad de forma distinta si estas reglas no están escritas antes de medir.",
      },
      {
        title: "Prepara una muestra representativa",
        body: "La prueba debe contemplar los cambios relevantes de la operación: turnos, iluminación, acumulación de materiales y objetos parcialmente ocultos. Comprueba que el evento sea visible. Si no lo es, puede hacer falta cambiar el ángulo o elegir otra fuente de datos.",
      },
      {
        title: "Compara con una referencia humana",
        body: "Elige intervalos que una persona pueda revisar y compara ambos conteos sobre los mismos eventos. Documenta errores y acuerda un criterio de aceptación. Si el resultado no sirve para la decisión inicial, ajusta el piloto antes de extenderlo a más zonas.",
      },
      {
        title: "Define entrega y operación",
        body: "La propuesta debe especificar métrica, área, panel o exportación, responsables de acceso y revisión, almacenamiento y costes recurrentes. Una demostración visual no sustituye un piloto validado con la operación real. Lleva un esquema del proceso y el inventario de cámaras a la consulta inicial.",
      },
    ],
    source:
      "https://whitepapers.axis.com/download/wp_counting_solutions_t10157830_2507.pdf",
    sourceLabel: "Axis — Counting solutions",
  },
];
