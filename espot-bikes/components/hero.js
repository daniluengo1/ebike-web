// Componente de Portada (Hero) - Espot Bikes

import { renderWeather } from './weather.js';

export function renderHero(container) {
    container.innerHTML = `
        <div class="view-container" style="padding: 0;">
            <!-- Hero Banner Parallax -->
            <section class="hero-banner-wrapper">
                <!-- Solo se muestra la foto de fondo sin textos ni overlays oscuros -->
            </section>

            <!-- Wrap sections inside normal padding wrapper -->
            <div style="padding: 0 1.5rem;">
                <!-- Weather Section Container -->
                <section style="padding: 2rem 0;" id="weather-section-container">
                    <!-- Se inyectará el widget meteorológico -->
                </section>

                <!-- Features Grid -->
                <section style="padding-top: 2rem; padding-bottom: 3rem;">
                    <div class="section-header">
                        <h2>Guía de Montaña en los Pirineos</h2>
                        <p>Espot Bikes te ofrece una selección de senderos preparados y el clima de montaña en tiempo real en asociación con Hostal Casa Palmira.</p>
                    </div>
                    <div class="features-grid">
                        <div class="feature-card review-card">
                            <div class="feature-icon" style="background: rgba(21, 128, 61, 0.08); border: 1px solid rgba(21, 128, 61, 0.2); width: 65px; height: 65px; display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1.5rem;">
                                <i class="fa-solid fa-sliders" style="color: var(--primary-dark-readable); font-size: 2.2rem;"></i>
                            </div>
                            <h3>Ajuste Personalizado</h3>
                            <p>Configuramos la presión de suspensiones, neumáticos y manetas a tu medida antes de salir para garantizar la mejor experiencia en montaña.</p>
                        </div>
                        <div class="feature-card review-card">
                            <div class="feature-icon" style="background: rgba(21, 128, 61, 0.08); border: 1px solid rgba(21, 128, 61, 0.2); width: 65px; height: 65px; display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1.5rem;">
                                <i class="fa-solid fa-hotel" style="color: var(--primary-dark-readable); font-size: 2.2rem;"></i>
                            </div>
                            <h3>Alojamiento y Logística</h3>
                            <p>Punto de recogida céntrico en Espot, Lleida. Hospédate en el Hostal Casa Palmira y ten tu plan de montaña resuelto a pocos pasos.</p>
                        </div>
                        <div class="feature-card review-card">
                            <div class="feature-icon" style="background: rgba(21, 128, 61, 0.08); border: 1px solid rgba(21, 128, 61, 0.2); width: 65px; height: 65px; display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1.5rem;">
                                <i class="fa-solid fa-route" style="color: var(--primary-dark-readable); font-size: 2.2rem;"></i>
                            </div>
                            <h3>Explora el Valle de Àneu</h3>
                            <p>Senderos señalizados desde nivel familiar a lo largo del río Escrit hasta descensos más técnicos por bosques alpinos.</p>
                        </div>
                        <div class="feature-card review-card">
                            <div class="feature-icon" style="background: rgba(21, 128, 61, 0.08); border: 1px solid rgba(21, 128, 61, 0.2); width: 65px; height: 65px; display: flex; align-items: center; justify-content: center; border-radius: 12px; margin-bottom: 1.5rem;">
                                <i class="fa-solid fa-shield-halved" style="color: var(--primary-dark-readable); font-size: 2.2rem;"></i>
                            </div>
                            <h3>Accesorios y Seguridad</h3>
                            <p>Todas nuestras bicis de alquiler incluyen GPS DURA con rutas pregrabadas, casco de seguridad, bidón Fox, candado y sistema antipinchazos Tannus Armour de serie.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `;

    // Render weather widget
    const weatherContainer = container.querySelector('#weather-section-container');
    if (weatherContainer) {
        renderWeather(weatherContainer);
    }


}
