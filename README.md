<div align="center">

# 🌤️ SPA AccuWeather (Alpha)

**Una aplicación del clima moderna, minimalista y ultrarrápida.**

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Open-Meteo](https://img.shields.io/badge/Open--Meteo-API-blue?style=for-the-badge)](https://open-meteo.com/)

[**🌐 Ver Demo en Vivo**](https://weather-alpha-spa.vercel.app/)

</div>

---

## 📖 Sobre el Proyecto

**SPA AccuWeather** es una aplicación web de una sola página (SPA) diseñada para mostrar información meteorológica precisa en tiempo real con una interfaz gráfica premium y minimalista ("Glassmorphism/Dark Mode").

Ha sido construida priorizando la experiencia del usuario (UX), el rendimiento y la facilidad de mantenimiento, implementando un diseño *mobile-first*.

### ✨ Características Principales

- **☁️ Datos en Tiempo Real:** Integración con la API meteorológica de [Open-Meteo](https://open-meteo.com/).
- **🎨 Diseño UI/UX Premium:** Interfaz oscura (Dark Mode), uso avanzado de Tailwind CSS (gradientes, shadows, backdrop-blur).
- **📱 Responsivo:** Perfectamente adaptable a cualquier tamaño de pantalla.
- **⚡ Ultrarrápida:** Empaquetada con Vite para tiempos de carga y desarrollo casi instantáneos.
- **🚀 Auto-Deploy:** Integración Continua / Despliegue Continuo (CI/CD) configurado con Vercel.

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología |
| :--- | :--- |
| **Frontend** | React 19 |
| **Estilos** | Tailwind CSS 3.4 |
| **Build Tool** | Vite 6 |
| **Datos / API** | Open-Meteo API |
| **Despliegue** | Vercel |

---

## 🚀 Empezando (Desarrollo Local)

Sigue estos pasos para obtener una copia local y ponerla en funcionamiento.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/INTERTEXAS/SPA--AccuWeather.git
   ```

2. **Navega al directorio del proyecto**
   ```bash
   cd SPA--AccuWeather
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre en tu navegador**
   Visita `http://localhost:5173` (o el puerto que te indique la consola).

---

## 📁 Estructura del Proyecto

```text
SPA--AccuWeather/
├── src/
│   ├── App.jsx         # Componente principal y lógica de estado/API
│   ├── main.jsx        # Punto de entrada de React
│   └── index.css       # Configuración global de Tailwind
├── index.html          # Plantilla HTML principal
├── tailwind.config.js  # Configuración de estilos y colores
├── vite.config.js      # Configuración del bundler
└── package.json        # Dependencias y scripts
```

---

## ⚙️ Despliegue

Este proyecto está configurado para desplegarse automáticamente en **Vercel**. Cualquier push a la rama `main` activará una nueva compilación y publicación.

Para un despliegue manual desde la terminal:
```bash
npx vercel --prod
```

---

## 👨‍💻 Autor

**Miguel Lagunes**
- Github: [@INTERTEXAS](https://github.com/INTERTEXAS)

---

<div align="center">
  <p>Construido con ❤️ usando React y Vite.</p>
</div>
