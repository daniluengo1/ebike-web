// Componente de Clima (WeatherWidget) - Espot Bikes

import { weatherDataMock } from '../data.js';

// Mapear los códigos meteorológicos WMO de Open-Meteo a descripciones, iconos y colores
function mapWMOToWeather(code) {
    switch (code) {
        case 0:
            return { status: "Soleado", icon: "fa-sun", color: "#f59e0b" };
        case 1:
        case 2:
        case 3:
            return { status: "Parcialmente Nublado", icon: "fa-cloud-sun", color: "#94a3b8" };
        case 45:
        case 48:
            return { status: "Niebla", icon: "fa-smog", color: "#64748b" };
        case 51:
        case 53:
        case 55:
            return { status: "Llovizna", icon: "fa-cloud-rain", color: "#06b6d4" };
        case 56:
        case 57:
            return { status: "Llovizna Helada", icon: "fa-cloud-meatball", color: "#0891b2" };
        case 61:
        case 63:
        case 65:
            return { status: "Lluvia", icon: "fa-cloud-showers-heavy", color: "#06b6d4" };
        case 66:
        case 67:
            return { status: "Lluvia Helada", icon: "fa-cloud-showers-water", color: "#0891b2" };
        case 71:
        case 73:
        case 75:
            return { status: "Nieve", icon: "fa-snowflake", color: "#38bdf8" };
        case 77:
            return { status: "Granizo", icon: "fa-snowflake", color: "#38bdf8" };
        case 80:
        case 81:
        case 82:
            return { status: "Chubascos", icon: "fa-cloud-showers-heavy", color: "#06b6d4" };
        case 85:
        case 86:
            return { status: "Chubascos de Nieve", icon: "fa-snowflake", color: "#38bdf8" };
        case 95:
        case 96:
        case 99:
            return { status: "Tormenta", icon: "fa-cloud-bolt", color: "#1e293b" };
        default:
            return { status: "Despejado", icon: "fa-sun", color: "#f59e0b" };
    }
}

// Función asíncrona para consultar la API de Open-Meteo
async function fetchLiveWeather() {
    const lat = 42.5768;
    const lon = 1.0857;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation&hourly=precipitation_probability&timezone=Europe/Madrid`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error al obtener datos meteorológicos de la API');
    }
    const data = await response.json();

    // Obtener la probabilidad de precipitación para la hora actual (redondeando a la hora en punto)
    let precipChance = 0;
    if (data.current && data.hourly && data.hourly.time) {
        const currentHourISO = data.current.time.substring(0, 13) + ":00";
        const index = data.hourly.time.indexOf(currentHourISO);
        if (index !== -1 && data.hourly.precipitation_probability) {
            precipChance = data.hourly.precipitation_probability[index];
        }
    }

    const temp = Math.round(data.current.temperature_2m);
    const humidity = data.current.relative_humidity_2m;
    const wind = Math.round(data.current.wind_speed_10m);
    const precip = data.current.precipitation;
    const weatherCode = data.current.weather_code;

    const weatherMapped = mapWMOToWeather(weatherCode);

    // Las pistas se cierran por precaución si:
    // - Hay lluvia/nieve/tormenta intensa (códigos WMO >= 61)
    // - Hay precipitación acumulada mayor a 0.5mm en la última hora
    // - La velocidad del viento supera los 35 km/h (riesgo en alta montaña)
    const isSevereWeather = [61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99].includes(weatherCode);
    const trailOpen = !(precip > 0.5 || wind > 35 || isSevereWeather);

    return {
        temp,
        status: weatherMapped.status,
        icon: weatherMapped.icon,
        color: weatherMapped.color,
        wind,
        humidity,
        precipChance,
        trailOpen
    };
}

export function renderWeather(container) {
    // Generar estructura básica con datos mock iniciales como placeholder
    container.innerHTML = `
        <div class="glass-card weather-panel">
            <div class="weather-info">
                <i class="fa-solid ${weatherDataMock.icon} weather-icon-large" id="weather-icon" style="color: #f59e0b;"></i>
                <div class="weather-temp">
                    <h4 id="temp-display">${weatherDataMock.temp}°C</h4>
                    <p id="status-display" style="text-transform: capitalize;">${weatherDataMock.status}</p>
                </div>
            </div>
            
            <div class="weather-details">
                <div class="weather-detail-item">
                    <span>Viento</span>
                    <strong id="wind-display">${weatherDataMock.wind} km/h</strong>
                </div>
                <div class="weather-detail-item">
                    <span>Humedad</span>
                    <strong id="humidity-display">${weatherDataMock.humidity}%</strong>
                </div>
                <div class="weather-detail-item">
                    <span>Precipitaciones</span>
                    <strong id="precip-display">${weatherDataMock.precipChance}%</strong>
                </div>
            </div>

            <div class="weather-status-badge">
                <div class="trail-status status-open" id="trail-status-badge">
                    <i class="fa-solid fa-circle-check"></i> <span id="trail-status-text">Senderos Abiertos</span>
                </div>
                <button class="btn btn-secondary btn-sm mt-1" id="btn-update-weather" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; display: block; margin-left: auto;">
                    <i class="fa-solid fa-arrows-rotate"></i> Actualizar
                </button>
            </div>
        </div>
    `;

    // Referencias a elementos del DOM
    const updateBtn = container.querySelector('#btn-update-weather');
    const tempDisplay = container.querySelector('#temp-display');
    const statusDisplay = container.querySelector('#status-display');
    const windDisplay = container.querySelector('#wind-display');
    const humidityDisplay = container.querySelector('#humidity-display');
    const precipDisplay = container.querySelector('#precip-display');
    const trailStatusBadge = container.querySelector('#trail-status-badge');
    const weatherIcon = container.querySelector('#weather-icon');

    // Función para actualizar la interfaz gráfica con datos reales
    function updateUI(weather) {
        tempDisplay.textContent = `${weather.temp}°C`;
        statusDisplay.textContent = weather.status;
        windDisplay.textContent = `${weather.wind} km/h`;
        humidityDisplay.textContent = `${weather.humidity}%`;
        precipDisplay.textContent = `${weather.precipChance}%`;

        // Icono y color dinámico
        weatherIcon.className = `fa-solid ${weather.icon} weather-icon-large`;
        weatherIcon.style.color = weather.color;

        // Estado de senderos
        if (weather.trailOpen) {
            trailStatusBadge.className = "trail-status status-open";
            trailStatusBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span id="trail-status-text">Senderos Abiertos</span>`;
        } else {
            trailStatusBadge.className = "trail-status status-closed";
            trailStatusBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span id="trail-status-text">Precaución: Pistas Cerradas</span>`;
        }
    }

    // Cargar datos del clima en directo
    async function loadLiveData() {
        try {
            const weather = await fetchLiveWeather();
            updateUI(weather);
        } catch (error) {
            console.error("No se pudo cargar el clima en directo de Espot:", error);
            // Mantiene los valores placeholders definidos arriba sin colapsar la UI
        }
    }

    // Petición inicial al renderizar el componente
    loadLiveData();

    // Event listener para actualización manual
    if (updateBtn) {
        updateBtn.addEventListener('click', async () => {
            updateBtn.disabled = true;
            const originalText = updateBtn.innerHTML;
            updateBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Consultando...`;

            try {
                const weather = await fetchLiveWeather();
                // Pequeña espera artificial para una experiencia de usuario más fluida y premium
                await new Promise(resolve => setTimeout(resolve, 500));
                updateUI(weather);
            } catch (error) {
                console.error("Error actualizando el clima:", error);
            } finally {
                updateBtn.disabled = false;
                updateBtn.innerHTML = originalText;
            }
        });
    }
}
