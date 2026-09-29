export const assistantScenarios = [
  {
    id: "restaurant",
    label: "Restaurante",
    turns: [
      "Quiero organizar las reservas de mi restaurante.",
      "¿Cómo recibes las solicitudes actualmente?",
      "Por teléfono y WhatsApp, pero algunas se quedan sin respuesta.",
      "El siguiente paso sería revisar tus canales y tu agenda para definir un flujo de atención.",
    ],
  },
  {
    id: "warehouse",
    label: "Almacén",
    turns: [
      "Necesito conectar las cámaras de mi almacén.",
      "¿Buscas acceso remoto o también medir un proceso?",
      "Quiero contar las cajas que pasan por una estación.",
      "Podemos evaluar la vista de tus cámaras y definir un piloto de conteo.",
    ],
  },
  {
    id: "support",
    label: "Soporte IT",
    turns: [
      "El Wi-Fi de mi negocio se desconecta a veces.",
      "¿Afecta a todos los equipos o a una zona concreta?",
      "Principalmente a los equipos del salón.",
      "El siguiente paso sería coordinar un diagnóstico de cobertura y conectividad.",
    ],
  },
] as const;
export const sampleOpportunities = [
  {
    name: "Restaurante · reservas",
    stage: "Consulta",
    next: "Revisar canales de atención",
  },
  {
    name: "Almacén · cámaras",
    stage: "Contactado",
    next: "Coordinar evaluación de cámaras",
  },
  {
    name: "Tienda · red",
    stage: "Propuesta",
    next: "Revisar alcance de instalación",
  },
  {
    name: "Oficina · soporte",
    stage: "Ganada",
    next: "Coordinar inicio del servicio",
  },
  {
    name: "Comercio · software",
    stage: "Perdida",
    next: "Registrar motivo del cierre",
  },
] as const;
