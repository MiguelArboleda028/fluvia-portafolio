# FLUVIA — Portafolio Web
> Código que fluye. Datos que hablan.

Portafolio profesional de **Miguel Ángel Arboleda Rojas** & **Sergio Andrés Guerra Corrales**  
Desde Envigado, Colombia 🇨🇴

---

## 🚀 Despliegue en Vercel (2 minutos)

### Opción A — Drag & Drop (más fácil)
1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. En el Dashboard haz clic en **"Add New Project"**
3. Selecciona **"Deploy from existing files"** o arrastra la carpeta directamente
4. Vercel detecta automáticamente que es un sitio estático
5. Haz clic en **"Deploy"** — listo ✅

### Opción B — CLI
```bash
npm install -g vercel
cd fluvia-portfolio
vercel --prod
```

---

## ✏️ Cómo actualizar el contenido

**Todo el contenido editable está en un solo archivo: `js/data.js`**

### Agregar un proyecto
Abre `js/data.js` y añade un bloque al array `projects`:
```javascript
{
  title: "Nombre del Proyecto",
  category: "Web App",                    // etiqueta de categoría
  desc: "Descripción corta del proyecto.",
  tags: ["React", "Node.js", "MongoDB"],
  repo: "https://github.com/usuario/repo",
  demo: "https://mi-demo.vercel.app",
  media: "assets/proyecto-preview.jpg",   // o URL externa
  mediaType: "image",                     // "image" o "video"
  author: "Equipo",                       // "Miguel", "Sergio" o "Equipo"
},
```

### Agregar una foto de evento/conferencia
```javascript
{
  title: "Colombia 4.0",
  date: "Oct 2025",
  place: "Medellín, Colombia",
  desc: "Evento de economía digital.",
  photo: "assets/colombia40.jpg",
},
```

### Agregar fotos del equipo
- Guarda las fotos como `assets/miguel.jpg` y `assets/sergio.jpg`
- Se mostrarán automáticamente en las tarjetas de los miembros

### Cambiar número de WhatsApp
En `js/data.js`, modifica:
```javascript
whatsapp: "573219639578",   // formato: 57 + número sin espacios
```

---

## 📁 Estructura del proyecto

```
fluvia-portfolio/
├── index.html          ← Estructura HTML (no tocar a menos que agregues secciones)
├── vercel.json         ← Configuración de Vercel
├── README.md           ← Este archivo
├── css/
│   └── styles.css      ← Todos los estilos (colores, tipografía, layout)
├── js/
│   ├── data.js         ← ⭐ AQUÍ editas todo el contenido
│   ├── main.js         ← Renderiza el contenido dinámicamente
│   └── animations.js   ← Partículas, cursor, animaciones scroll
└── assets/
    ├── miguel.jpg      ← Foto del equipo (agregar manualmente)
    ├── sergio.jpg      ← Foto del equipo (agregar manualmente)
    └── ...             ← Imágenes de proyectos y eventos
```

---

## 🎨 Personalización de colores

En `css/styles.css`, modifica las variables CSS al inicio:
```css
:root {
  --cyan:   #00D4FF;   /* Color principal */
  --violet: #7B2FFF;   /* Color secundario */
  --bg:     #04080F;   /* Fondo principal */
}
```

---

## 📝 Secciones del portafolio

| Sección    | Descripción                                      |
|------------|--------------------------------------------------|
| Hero       | Portada con animación de partículas neural       |
| Nosotros   | Perfiles del equipo + manifiesto                 |
| Servicios  | Servicios que ofrecen                            |
| Proyectos  | Proyectos con media, descripción y links         |
| Stack      | Tecnologías del equipo                           |
| Galería    | Fotos de eventos y conferencias                  |
| Contacto   | Email y WhatsApp                                 |

---

## ⚡ Características técnicas

- ✅ HTML + CSS + JS vanilla (sin frameworks, velocidad máxima)
- ✅ Red neuronal animada en canvas (hero)
- ✅ Cursor magnético personalizado
- ✅ Animaciones de scroll reveal con IntersectionObserver
- ✅ Efecto 3D tilt en tarjetas de proyectos y miembros
- ✅ Navegación activa con highlight automático
- ✅ WhatsApp bubble flotante
- ✅ 100% responsive (mobile, tablet, desktop)
- ✅ Listo para Vercel (sin base de datos, sin build step)

---

## 👥 Autores

**Miguel Ángel Arboleda Rojas** · Data Scientist & AI Engineer  
**Sergio Andrés Guerra Corrales** · Backend Developer  

© 2026 FLUVIA · Todos los derechos reservados
