import React, { useState, useEffect } from 'react';

/**
 * Weather Alpha SPA
 * Senior Frontend Engineer implementation using React & Tailwind CSS.
 */
function App() {
  // --- Architecture de Estado ---
  const [location] = useState("Campeche, MX");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=19.8301&longitude=-90.5349&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=auto";

  // --- Data Fetching ---
  const fetchWeather = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("No se pudo obtener la información meteorológica.");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  // --- Helper: Formato de Fecha ---
  const currentDate = new Intl.DateTimeFormat('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date());

  // --- UI Components ---

  // Estado 1: Carga (Skeletons)
  const LoadingState = () => (
    <div className="w-full max-w-md mx-auto rounded-3xl shadow-2xl bg-slate-800 overflow-hidden animate-pulse">
      <div className="p-6 space-y-4">
        <div className="h-6 bg-slate-700 rounded w-1/3"></div>
        <div className="h-4 bg-slate-700 rounded w-1/2"></div>
      </div>
      <div className="h-64 bg-slate-700"></div>
      <div className="grid grid-cols-3 p-4 gap-4 bg-slate-900/50">
        <div className="h-12 bg-slate-700 rounded"></div>
        <div className="h-12 bg-slate-700 rounded"></div>
        <div className="h-12 bg-slate-700 rounded"></div>
      </div>
    </div>
  );

  // Estado 2: Error
  const ErrorState = () => (
    <div className="w-full max-w-md mx-auto rounded-3xl shadow-2xl bg-red-900/20 border-2 border-red-500 p-8 text-center space-y-4">
      <div className="text-red-500 text-5xl">⚠️</div>
      <h2 className="text-xl font-bold">Error de Conexión</h2>
      <p className="text-slate-400">{error}</p>
      <button 
        onClick={fetchWeather}
        className="px-6 py-2 bg-red-600 hover:bg-red-500 transition-colors rounded-full font-semibold"
      >
        Reintentar
      </button>
    </div>
  );

  // Estado 3: Éxito
  const SuccessState = () => {
    const { current, current_units } = weatherData;
    return (
      <div className="w-full max-w-md mx-auto rounded-3xl shadow-2xl bg-slate-800 overflow-hidden border border-slate-700">
        {/* Top Block: Ubicación y Fecha */}
        <div className="p-6 flex flex-col items-start">
          <h1 className="text-2xl font-bold tracking-tight">{location}</h1>
          <p className="text-slate-400 capitalize">{currentDate}</p>
        </div>

        {/* Center Block: Temperatura Principal */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 py-12 flex flex-col items-center justify-center relative">
          <span className="text-8xl font-black drop-shadow-lg">
            {Math.round(current.temperature_2m)}°
          </span>
          <p className="font-medium text-blue-100 uppercase tracking-widest mt-2">
            Actual
          </p>
        </div>

        {/* Bottom Block: Cuadrícula de Detalles */}
        <div className="grid grid-cols-3 divide-x divide-slate-700 bg-slate-900/50 p-6">
          <div className="flex flex-col items-center">
            <span className="text-xs text-slate-400 uppercase font-semibold">Sensación</span>
            <span className="text-lg font-bold">{current.apparent_temperature}{current_units.apparent_temperature}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-slate-400 uppercase font-semibold">Humedad</span>
            <span className="text-lg font-bold">{current.relative_humidity_2m}{current_units.relative_humidity_2m}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs text-slate-400 uppercase font-semibold">Viento</span>
            <span className="text-lg font-bold">{current.wind_speed_10m} <small className="text-[10px]">{current_units.wind_speed_10m}</small></span>
          </div>
        </div>
      </div>
    );
  };

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full flex flex-col items-center space-y-6">
        {/* Branding Header */}
        <div className="mb-4">
          <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">
            Weather App Alpha (Auto-Deploy Active)
          </span>
        </div>

        {isLoading && <LoadingState />}
        {error && <ErrorState />}
        {!isLoading && !error && weatherData && <SuccessState />}

        <footer className="mt-8 text-slate-500 text-xs text-center max-w-xs leading-relaxed">
          Powered by Open-Meteo API • Local Timezone Tracking
        </footer>
      </div>
    </div>
  );
}

export default App;
