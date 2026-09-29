export const industrySolutions = [
  {
    slug: "restaurantes",
    icon: "restaurant",
    title: "Restaurantes y cafeterías",
    description:
      "Conecta la atención, los pedidos y la infraestructura de tu local.",
    links: [
      {
        label: "POS y Wi-Fi para tu operación",
        href: "/industrias/restaurantes/",
      },
      {
        label: "Reservas y consultas automatizadas",
        href: "/ia-y-automatizacion/",
      },
      {
        label: "Medición de tiempos con cámaras",
        href: "/medicion-de-productividad/",
      },
    ],
    href: "/industrias/restaurantes/",
    cta: "Ver soluciones para restaurantes",
    detail:
      "Evaluamos cómo se conectan caja, salón, cocina y atención al cliente. Definimos prioridades de integración, cobertura y seguimiento de pedidos según los sistemas que utilizas.",
    requirements:
      "Nombre de tu POS, zonas con fallos de conexión y el proceso que quieres mejorar.",
  },
  {
    slug: "almacenes",
    icon: "warehouse",
    title: "Almacenes y logística",
    description:
      "Observa el flujo de materiales y conecta las zonas de trabajo.",
    links: [
      {
        label: "Conteo de unidades con cámaras",
        href: "/medicion-de-productividad/",
      },
      {
        label: "Tiempos de ciclo y flujo de materiales",
        href: "/industrias/warehouse/",
      },
      {
        label: "Redes y videovigilancia",
        href: "/seguridad-y-control/",
      },
    ],
    href: "/industrias/warehouse/",
    cta: "Ver soluciones para almacenes",
    detail:
      "Empezamos por una zona y un evento observable: una unidad que pasa, una espera o el inicio y fin de un ciclo. Validamos el piloto antes de plantear una ampliación.",
    requirements:
      "Un esquema del proceso, inventario de cámaras y la métrica que necesitas para decidir.",
  },
  {
    slug: "comercios",
    icon: "store",
    title: "Comercios y tiendas",
    description:
      "Conecta ventas, inventario y atención para dar continuidad a cada consulta.",
    links: [
      {
        label: "Integración de inventario y ventas",
        href: "/software-a-medida/",
      },
      {
        label: "Seguimiento de clientes",
        href: "/ia-y-automatizacion/",
      },
      {
        label: "Cámaras y control de acceso",
        href: "/seguridad-y-control/",
      },
    ],
    href: "/industrias/#comercios",
    cta: "Ver soluciones para comercios",
    detail:
      "Revisamos cómo registras ventas, actualizas existencias y respondes consultas. Proponemos conexiones entre herramientas y controles para reducir tareas repetidas, según la compatibilidad de tus sistemas.",
    requirements:
      "Herramientas de venta e inventario, canales de atención y tareas que hoy repites manualmente.",
  },
  {
    slug: "oficinas",
    icon: "office",
    title: "Oficinas y empresas de servicios",
    description:
      "Organiza consultas, herramientas y soporte para que tu equipo pueda trabajar.",
    links: [
      {
        label: "Automatización de consultas y citas",
        href: "/ia-y-automatizacion/",
      },
      {
        label: "Software e integraciones",
        href: "/software-a-medida/",
      },
      {
        label: "Soporte IT y redes",
        href: "/soporte-it/",
      },
    ],
    href: "/industrias/#oficinas",
    cta: "Ver soluciones para oficinas",
    detail:
      "Identificamos dónde se pierde información entre consultas, agendas y sistemas internos. Definimos un flujo de trabajo y las necesidades de red, acceso y soporte del equipo.",
    requirements:
      "Número de usuarios, herramientas actuales y principales incidencias o tareas repetitivas.",
  },
] as const;
