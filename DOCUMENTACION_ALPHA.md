# Documentación Técnica: Weather Alpha SPA (Versión Alpha)

Esta documentación detalla el funcionamiento, arquitectura y diseño de la aplicación **Weather Alpha**, una Single Page Application (SPA) moderna desarrollada para proporcionar información meteorológica en tiempo real.

## 1. Stack Tecnológico
- **Frontend Library:** React 19 (Hooks: `useState`, `useEffect`).
- **Styling:** Tailwind CSS (Diseño responsivo y utilitario).
- **Build Tool:** Vite (Para un desarrollo ultra-rápido).
- **Data Source:** Open-Meteo API (Servicio meteorológico gratuito y preciso).
- **Deployment:** Vercel (Integración continua y despliegue automático).

## 2. Arquitectura de la Aplicación

### Gestión de Estado
La aplicación utiliza un patrón de estado centralizado en el componente principal `App.jsx`:
- `location`: Almacena la ubicación actual (Campeche, MX).
- `weatherData`: Almacena el objeto JSON retornado por la API.
- `isLoading`: Booleano que controla la visualización de los estados de carga.
- `error`: Almacena mensajes de error en caso de fallos en la red o la API.

### Ciclo de Vida y Data Fetching
Al montarse la aplicación (`useEffect`), se dispara la función asíncrona `fetchWeather`:
1. Establece `isLoading` en `true`.
2. Realiza una petición `fetch` a la API de Open-Meteo usando coordenadas geográficas específicas.
3. Procesa la respuesta y la guarda en `weatherData`.
4. Maneja excepciones mediante bloques `try/catch`.
5. Finaliza el estado de carga en el bloque `finally`.

## 3. Interfaz de Usuario (UI)

La UI está diseñada con una estética "Dark Mode" moderna, utilizando gradientes y sombras profundas para una apariencia de alta gama.

### Estados de Visualización:
1. **Estado de Carga (LoadingState):** Utiliza "Skeletons" con animaciones de pulso (`animate-pulse`) para mejorar la percepción de velocidad del usuario mientras los datos se descargan.
2. **Estado de Error (ErrorState):** Muestra una alerta visual clara con un botón de "Reintentar" para mejorar la resiliencia de la app.
3. **Estado de Éxito (SuccessState):** Muestra la tarjeta meteorológica principal:
   - **Encabezado:** Ubicación y fecha formateada localmente.
   - **Cuerpo Central:** Temperatura actual destacada con un gradiente azul/índigo.
   - **Detalles Inferiores:** Una cuadrícula de 3 columnas que muestra Sensación Térmica, Humedad y Velocidad del Viento.

## 4. Características de Ingeniería
- **Formato de Fecha Proactivo:** Utiliza `Intl.DateTimeFormat` para mostrar la fecha en español de México de forma dinámica.
- **Diseño Responsivo:** Adaptado para dispositivos móviles y escritorio mediante clases utilitarias de Tailwind.
- **Despliegue Automatizado:** Cualquier cambio en la rama `main` activa un build en Vercel, asegurando que la versión Alpha esté siempre actualizada.

---
**Desarrollado por Gemini CLI (Modo Automatizado)**
*Fecha: Junio 2026*
