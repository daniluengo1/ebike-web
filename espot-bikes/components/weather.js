// Componente de Clima (WeatherWidget) - Espot Bikes

import { weatherDataMock } from '../data.js';

export function renderWeather(container) {
    // Generar estructura básica
    container.innerHTML = `
        <div class="glass-card weather-panel">
            <div class="weather-info">
                <i class="fa-solid ${weatherDataMock.icon} weather-icon-large" id="weather-icon"></i>
                <div class="weather-temp">
                    <h4 id="temp-display">${weatherDataMock.temp}°C</h4>
                    <p id="status-display">${weatherDataMock.status}</p>
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

    // Event listeners
    const updateBtn = container.querySelector('#btn-update-weather');
    const tempDisplay = container.querySelector('#temp-display');
    const statusDisplay = container.querySelector('#status-display');
    const windDisplay = container.querySelector('#wind-display');
    const humidityDisplay = container.querySelector('#humidity-display');
    const precipDisplay = container.querySelector('#precip-display');
    const trailStatusBadge = container.querySelector('#trail-status-badge');
    const trailStatusText = container.querySelector('#trail-status-text');
    const weatherIcon = container.querySelector('#weather-icon');

    if (updateBtn) {
        updateBtn.addEventListener('click', () => {
            // Animación de carga en el botón
            updateBtn.disabled = true;
            const originalText = updateBtn.innerHTML;
            updateBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Consultando...`;

            setTimeout(() => {
                // Generar cambios aleatorios ligeros simulando clima de montaña real
                const rand = Math.random();
                let temp, status, icon, wind, humidity, precip, trailOpen;

                if (rand < 0.4) {
                    // Soleado y cálido
                    temp = Math.floor(Math.random() * 6) + 16; // 16-21
                    status = "soleado";
                    icon = "fa-sun";
                    wind = Math.floor(Math.random() * 8) + 8; // 8-15
                    humidity = Math.floor(Math.random() * 15) + 35; // 35-50
                    precip = Math.floor(Math.random() * 10); // 0-9
                    trailOpen = true;
                } else if (rand < 0.8) {
                    // Parcialmente nublado
                    temp = Math.floor(Math.random() * 5) + 12; // 12-16
                    status = "nublado";
                    icon = "fa-cloud-sun";
                    wind = Math.floor(Math.random() * 15) + 10; // 10-24
                    humidity = Math.floor(Math.random() * 20) + 50; // 50-69
                    precip = Math.floor(Math.random() * 25); // 0-24
                    trailOpen = true;
                } else {
                    // Tormenta alpina / Lluvia
                    temp = Math.floor(Math.random() * 4) + 8; // 8-11
                    status = "lluvia alpina";
                    icon = "fa-cloud-showers-heavy";
                    wind = Math.floor(Math.random() * 20) + 20; // 20-39
                    humidity = Math.floor(Math.random() * 20) + 75; // 75-94
                    precip = Math.floor(Math.random() * 40) + 50; // 50-89
                    trailOpen = false;
                }

                // Actualizar interfaz
                tempDisplay.textContent = `${temp}°C`;
                statusDisplay.textContent = status;
                windDisplay.textContent = `${wind} km/h`;
                humidityDisplay.textContent = `${humidity}%`;
                precipDisplay.textContent = `${precip}%`;

                // Cambiar icono con efecto de escala
                weatherIcon.className = `fa-solid ${icon} weather-icon-large`;
                if (icon === "fa-sun") {
                    weatherIcon.style.color = "#f59e0b";
                } else if (icon === "fa-cloud-sun") {
                    weatherIcon.style.color = "#94a3b8";
                } else {
                    weatherIcon.style.color = "#06b6d4";
                }

                // Actualizar badge de pistas
                if (trailOpen) {
                    trailStatusBadge.className = "trail-status status-open";
                    trailStatusBadge.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span id="trail-status-text">Senderos Abiertos</span>`;
                } else {
                    trailStatusBadge.className = "trail-status status-closed";
                    trailStatusBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> <span id="trail-status-text">Precaución: Pistas Cerradas</span>`;
                }

                // Restaurar botón
                updateBtn.disabled = false;
                updateBtn.innerHTML = originalText;
            }, 800);
        });
    }
}
