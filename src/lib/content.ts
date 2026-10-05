import type { ComponentType } from "react";
import * as lucide from "lucide-react";

export const services = [
  {
    slug: "ia-y-automatizacion",
    name: "IA y Automatización",
    short: "Menos tareas repetitivas. Más posibilidades.",
    description:
      "Conecta tus herramientas, automatiza procesos y convierte la inteligencia artificial en una ventaja para tu negocio.",
    icon: "Cpu",
    tag: "INTELIGENCIA APLICADA",
    items: [
      "Asistentes de IA para atención y operaciones",
      "Automatización de flujos de trabajo",
      "Integración de herramientas y datos",
    ],
  },
  {
    slug: "marketing-digital",
    name: "Marketing Digital",
    short: "Haz que las personas correctas te encuentren.",
    description:
      "Construye una presencia digital coherente con tu marca y una estrategia enfocada en atraer oportunidades de negocio.",
    icon: "TrendingUp",
    tag: "CRECIMIENTO DIGITAL",
    items: [
      "Estrategia y presencia de marca",
      "Campañas digitales y contenido",
      "Analítica y optimización de conversiones",
    ],
  },
  {
    slug: "software-a-medida",
    name: "Software a Medida",
    short: "Tu forma de trabajar. Tu propio software.",
    description:
      "Diseñamos aplicaciones web e integraciones que responden a los procesos de tu empresa y pueden evolucionar contigo.",
    icon: "Braces",
    tag: "DESARROLLO CON PROPÓSITO",
    items: [
      "Aplicaciones web y portales empresariales",
      "Integraciones entre sistemas",
      "Diseño de interfaces y experiencia de usuario",
    ],
  },
  {
    slug: "redes-e-infraestructura",
    name: "Redes e Infraestructura",
    short: "La base sólida de un negocio conectado.",
    description:
      "Planificamos redes y entornos tecnológicos para que tu equipo trabaje conectado, con una infraestructura ordenada y escalable.",
    icon: "Network",
    tag: "CONEXIÓN Y CONTINUIDAD",
    items: [
      "Diseño e instalación de redes",
      "Wi-Fi empresarial y conectividad",
      "Configuración de servidores e infraestructura",
    ],
  },
  {
    slug: "seguridad-y-control",
    name: "Seguridad y Control",
    short: "Más visibilidad. Mayor tranquilidad.",
    description:
      "Integra herramientas de protección, monitoreo y control de acceso adaptadas a las necesidades de tu operación.",
    icon: "ShieldCheck",
    tag: "PROTECCIÓN INTEGRAL",
    items: [
      "Videovigilancia y monitoreo",
      "Control de acceso",
      "Configuración de seguridad y respaldos",
    ],
  },
  {
    slug: "soporte-it",
    name: "Soporte IT",
    short: "Tu equipo avanza. Nosotros te acompañamos.",
    description:
      "Te ayudamos a resolver incidencias, mantener tus equipos y planificar mejoras para que la tecnología facilite el trabajo diario.",
    icon: "Headset",
    tag: "ACOMPAÑAMIENTO TECNOLÓGICO",
    items: [
      "Diagnóstico y resolución de incidencias",
      "Mantenimiento preventivo",
      "Asesoría y soporte remoto o presencial",
    ],
  },
] as const;

export type ServiceIcon = (typeof services)[number]["icon"];

/**
 * Mapa explícito y tipado entre el nombre de icono declarado en cada servicio
 * y el componente real de Lucide. Si se añade un servicio con un icono nuevo,
 * TypeScript obliga a registrarlo aquí (evita datos muertos o desincronizados).
 */
export const serviceIcons: Record<ServiceIcon, ComponentType<{ size?: number }>> = {
  Cpu: lucide.Cpu,
  TrendingUp: lucide.TrendingUp,
  Braces: lucide.Braces,
  Network: lucide.Network,
  ShieldCheck: lucide.ShieldCheck,
  Headset: lucide.Headset,
};

export const siteUrl = "https://www.datalinkcorporation.com";

export const contact = {
  email: "datalinkprotech@gmail.com",
  phone: "+1 (786) 402-2741",
  tel: "+17864022741",
  whatsapp: "https://wa.me/17864022741",
};
