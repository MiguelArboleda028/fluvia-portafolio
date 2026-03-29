/**
 * FLUVIA — Archivo de Datos Central
 * ─────────────────────────────────
 * Edita este archivo para agregar proyectos, tecnologías, fotos de eventos, etc.
 * No necesitas tocar index.html ni styles.css para actualizar el contenido.
 */

const DATA = {

  /* ── EQUIPO ──────────────────────────────────────────────────── */
  team: {
    name: "FLUVIA",
    tagline: "Código que fluye. Datos que hablan.",
    subtag: "Soluciones Web · IA · Datos · Power BI",
    location: "Envigado, Colombia 🇨🇴",
    description: "Somos dos ingenieros informáticos de Envigado que nos adaptamos como el agua a tu proyecto. Traemos actitud primero, tecnología después — y siempre al precio que tiene sentido.",
    whatsapp: "573219639578",  // número sin + para el link de WhatsApp
    whatsappMsg: "Hola FLUVIA! Vi su portafolio y me interesa hablar sobre un proyecto.",
    email: "sergioco2807@gmail.com",
  },

  /* ── MIEMBROS ─────────────────────────────────────────────────── */
  members: [
    {
      name: "Miguel Ángel Arboleda",
      role: "Data Scientist & AI Engineer",
      emoji: "🤖",
      bio: "Inteligencia artificial, agentes de voz, ETL con PySpark y Databricks. Convierte datos en decisiones y automatiza procesos con IA generativa. Experiencia en Azure y monitoreo cloud.",
      tags: ["Python", "PySpark", "Databricks", "Azure", "Voice AI", "Prompt Eng.", "ETL", "SQL"],
      linkedin: "https://www.linkedin.com/in/miguel-angel-arboleda-rojas-179776258/",
      github: "https://github.com/MiguelArboleda028",
      photo: "assets/miguel.jpg",   // reemplaza con foto real
    },
    {
      name: "Sergio Andrés Guerra",
      role: "Backend Developer",
      emoji: "⚙️",
      bio: "Ingeniero de sistemas robusto y escalable. APIs REST en Rust, Node.js y Java, autenticación JWT, bases de datos relacionales y NoSQL. Apasionado por la seguridad y el rendimiento.",
      tags: ["Rust", "Node.js", "Java", "PostgreSQL", "MongoDB", "Express", "JWT", "GitHub"],
      linkedin: "https://www.linkedin.com/in/sergio-andr%C3%A9s-guerra-corrales-0041a8274/",
      github: "https://github.com/SergioGue28",
      photo: "assets/sergio.jpg",   
    }
  ],

  /* ── SERVICIOS ────────────────────────────────────────────────── */
  services: [
    {
      icon: "🌐",
      title: "Desarrollo Web",
      desc: "Páginas y aplicaciones web a medida: landing pages, e-commerce, sistemas internos. Rápidas, seguras y escalables desde el primer día.",
      highlight: true,
    },
    {
      icon: "🤖",
      title: "IA para tu Negocio",
      desc: "Integración de inteligencia artificial en tu sitio o procesos: chatbots, agentes de voz, automatizaciones, recomendadores y más.",
      highlight: false,
    },
    {
      icon: "📊",
      title: "Analítica de Datos",
      desc: "Tableros Power BI, pipelines de datos, reportes automatizados. Convierte tus datos en ventaja competitiva.",
      highlight: false,
    },
    {
      icon: "🔗",
      title: "APIs & Backend",
      desc: "Arquitecturas backend de alto rendimiento. APIs REST robustas, autenticación segura y bases de datos bien diseñadas.",
      highlight: false,
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      desc: "Despliegue en Azure, configuración de entornos y monitoreo. Tu proyecto en producción, sin dolores de cabeza.",
      highlight: false,
    },
    {
      icon: "⚡",
      title: "Consultoría Tech",
      desc: "¿No sabes por dónde empezar? Te ayudamos a definir la arquitectura, el stack y el plan de ejecución sin costo de entrada.",
      highlight: false,
    },
  ],

  /* ── STACK TECNOLÓGICO ────────────────────────────────────────── */
  stack: [
    { name: "Rust",        color: "#CE422B", icon: "🦀" },
    { name: "Python",      color: "#3572A5", icon: "🐍" },
    { name: "Node.js",     color: "#339933", icon: "💚" },
    { name: "JavaScript",  color: "#F7DF1E", icon: "⚡" },
    { name: "Java",        color: "#ED8B00", icon: "☕" },
    { name: "SQL",         color: "#4479A1", icon: "🗄️" },
    { name: "PostgreSQL",  color: "#336791", icon: "🐘" },
    { name: "MongoDB",     color: "#47A248", icon: "🍃" },
    { name: "PySpark",     color: "#E25A1C", icon: "🔥" },
    { name: "Databricks",  color: "#FF3621", icon: "🧱" },
    { name: "Azure",       color: "#0089D6", icon: "☁️" },
    { name: "Power BI",    color: "#F2C811", icon: "📊" },
    { name: "ElevenLabs",  color: "#8A2BE2", icon: "🎙️" },
    { name: "Docker",      color: "#2496ED", icon: "🐳" },
    { name: "Git",         color: "#F05032", icon: "📌" },
    { name: "Vercel",      color: "#FFFFFF", icon: "▲" },
  ],

  /* ── PROYECTOS ────────────────────────────────────────────────── */
  // Para agregar un proyecto: copia un bloque { } y pégalo antes del ] final
  projects: [
    {
      title: "Money Lender",
      category: "Web App",
      desc: "Plataforma web privada para prestamistas de dinero. Digitalizó la gestión de cuentas que antes era en papel, con dashboard de cobros, clientes y balances.",
      tags: ["Node.js", "MongoDB", "Express", "JWT"],
      repo: "https://github.com/SergioGue28",
      demo: "",          // URL del demo si existe
      media: "",         // URL de imagen o video del proyecto
      mediaType: "image", // "image" o "video"
      author: "Sergio y Miguel",
    },
    {
      title: "Portafolio Personal",
      category: "Web",
      desc: "Portafolio web personal que presenta certificados, proyectos y habilidades técnicas. Diseñado con foco en rendimiento y presentación limpia.",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/SergioGue28",
      demo: "https://portfolio-ten-sepia-10.vercel.app/",
      media: "",
      mediaType: "image",
      author: "Sergio",
    },
    {
      title: "Agente de Voz IA",
      category: "IA Generativa",
      desc: "Agente de voz inteligente con ElevenLabs para automatizar encuestas de satisfacción en producción. Prompt Engineering avanzado para flujo natural de conversación.",
      tags: ["Python", "ElevenLabs", "Azure", "Prompt Eng."],
      repo: "https://github.com/MiguelArboleda028/voice-ai-survey-automation",
      demo: "",
      media: "",
      mediaType: "image",
      author: "Miguel",
    },
    {
      title: "Pipeline ETL — WhatsApp Analytics",
      category: "Data Engineering",
      desc: "Pipeline de extracción, transformación y carga de historiales de conversaciones desde Genesys Cloud. Procesamiento masivo con PySpark en Databricks para alimentar modelos de ML.",
      tags: ["PySpark", "Databricks", "Python", "Genesys Cloud"],
      repo: "https://github.com/MiguelArboleda028",
      demo: "",
      media: "",
      mediaType: "image",
      author: "Miguel",
    },

    {
      title: "Gold Plus — PropTech Ecosystem",
      category: "Full-Stack & Business Strategy",
      desc: "Ecosistema digital avanzado para la gestión y promoción inmobiliaria en el Suroeste antioqueño. Transforma la experiencia de inversión y compra de inmuebles mediante una interfaz de alta gama, asesoría jurídica integrada y analítica de mercado local.",
      tags: ["React", "UI/UX Inmersivo", "Real Estate Tech", "Estrategia Digital"],
      repo: "https://github.com/SergioGue28",
      demo: "https://www.goldpluscolombia.co/",
      media: "",
      mediaType: "image",
      author: "Sergio",
    },

    // ─── Agrega más proyectos aquí ───
    // {
    //   title: "Nombre del Proyecto",
    //   category: "Categoría",
    //   desc: "Descripción del proyecto.",
    //   tags: ["Tech1", "Tech2"],
    //   repo: "https://github.com/...",
    //   demo: "https://...",
    //   media: "assets/proyecto.jpg",
    //   mediaType: "image",  // o "video"
    //   author: "Miguel" o "Sergio" o "Equipo",
    // },
  ],

  /* ── EVENTOS / GALERÍA ────────────────────────────────────────── */
  // Para agregar una foto de evento: copia un bloque { } y agrégalo
  events: [
    {
      title: "Próximo evento",
      date: "2026",
      place: "Medellín, Colombia",
      desc: "Agrega fotos de conferencias, hackathons y meetups aquí.",
      photo: "",
    },
    // ─── Agrega más eventos/fotos aquí ───
    // {
    //   title: "Colombia 4.0",
    //   date: "Oct 2025",
    //   place: "Medellín, Colombia",
    //   desc: "Asistimos al mayor evento de economía digital de América Latina.",
    //   photo: "assets/colombia40.jpg",
    // },
  ],

};
