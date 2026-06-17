// Componente de Portada (Hero) - Espot Bikes

import { renderWeather } from './weather.js';

export function renderHero(container) {
    container.innerHTML = `
        <div class="view-container" style="padding: 0;">
            <!-- Hero Banner Parallax -->
            <section class="hero-banner-wrapper">
                <div class="hero-overlay"></div>
                <div class="hero-content-container">

                    <h1 class="poster-title" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">
                        <span class="white-part">Descubre el Estany de Sant Maurici</span>
                        <span class="yellow-part">y mucho más</span>
                    </h1>
                    
                    <div class="poster-subtitle">
                        Alquiler de bicis eléctricas
                    </div>
                    
                    <p style="color: var(--primary); font-family: var(--font-heading); font-weight: 800; font-size: 1.25rem; letter-spacing: 0.02em; text-transform: uppercase; margin-bottom: 2rem;">
                        ¡Tu plan de montaña empieza aquí!
                    </p>

                    <!-- Tres características destacadas del afiche -->
                    <div class="poster-feature-banner mb-4">
                        <div class="poster-feature-item">
                            <i class="fa-solid fa-bolt-lightning"></i>
                            <div>
                                <span>Bicis Eléctricas</span>
                                <span class="sub" style="color: rgba(255,255,255,0.7);">De alta calidad</span>
                            </div>
                        </div>
                        <div class="poster-feature-item">
                            <i class="fa-solid fa-mountain"></i>
                            <div>
                                <span>Rutas Locales</span>
                                <span class="sub" style="color: rgba(255,255,255,0.7);">Todos los niveles</span>
                            </div>
                        </div>
                        <div class="poster-feature-item">
                            <i class="fa-solid fa-location-dot"></i>
                            <div>
                                <span>Recogida Fácil</span>
                                <span class="sub" style="color: rgba(255,255,255,0.7);">En Espot</span>
                            </div>
                        </div>
                    </div>

                    <!-- Botón de Reserva del Afiche -->
                    <div class="poster-cta-banner">
                        <a href="tel:665073277" class="btn-poster-cta">
                            <span>Reserva tu Bici</span>
                            <strong>665 07 32 77</strong>
                        </a>
                    </div>

                    <div class="hero-ctas" style="margin-top: 1.5rem; gap: 1rem; display: flex; justify-content: center; z-index: 10;">
                        <button class="btn btn-secondary btn-sm" id="hero-btn-routes" style="background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.25);">
                            <i class="fa-solid fa-compass"></i> Ver Rutas en Mapa
                        </button>
                        <button class="btn btn-secondary btn-sm" id="hero-btn-info" style="background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.25);">
                            <i class="fa-solid fa-circle-info"></i> Horarios y FAQs
                        </button>
                    </div>
                </div>
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

                <!-- Google Reviews Section -->
                <section class="reviews-section" style="padding: 3rem 0 4rem 0;">
                    <div class="section-header">
                        <h2>Opiniones de Ciclistas</h2>
                        <p>La satisfacción de quienes nos visitan es nuestra mejor garantía. Descubre lo que opinan sobre nuestras e-bikes y servicio en Google.</p>
                    </div>
                    
                    <div class="reviews-summary">
                        <div class="google-rating">
                            <span>4.9</span>
                            <div class="reviewer-stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="google-brand">
                            <i class="fa-brands fa-google"></i>
                            <span>Google Reviews · 120+ opiniones de clientes</span>
                        </div>
                    </div>

                    <div class="reviews-grid">
                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <div class="reviewer-avatar">MG</div>
                                    <div>
                                        <div class="reviewer-name" style="color: var(--text-primary);">Marta Gómez</div>
                                        <div class="reviewer-stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <span class="review-date">Hace 1 semana</span>
                            </div>
                            <p class="review-text">"El mejor sitio de Espot para alquilar e-bikes. El trato fue inmejorable y las bicis Moustache con motor Bosch de 5ª generación están impecables. Nos explicaron la ruta al Estany de Sant Maurici al detalle."</p>
                        </div>

                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <div class="reviewer-avatar">JP</div>
                                    <div>
                                        <div class="reviewer-name" style="color: var(--text-primary);">Jordi Pujol</div>
                                        <div class="reviewer-stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <span class="review-date">Hace 3 semanas</span>
                            </div>
                            <p class="review-text">"Alquilamos una Trek para hacer la Obaga de la Coma. Muy profesionales y atentos. La tija telescópica y el mantenimiento de las bicis excelente. ¡Repetiremos seguro!"</p>
                        </div>

                        <div class="review-card">
                            <div class="review-header">
                                <div class="reviewer-info">
                                    <div class="reviewer-avatar">MV</div>
                                    <div>
                                        <div class="reviewer-name" style="color: var(--text-primary);">Marc V.</div>
                                        <div class="reviewer-stars">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <span class="review-date">Hace 1 mes</span>
                            </div>
                            <p class="review-text">"Increíble experiencia rodando por los senderos de Espot. El material es de primera calidad y las bicis están muy bien cuidadas. El personal es súper amable."</p>
                        </div>
                    </div>
                </section>

                <!-- Galería de fotos de la tienda -->
                <section style="padding: 2rem 0 5rem 0;">
                    <div class="section-header">
                        <h2>Nuestra Tienda</h2>
                        <p>Un punto de encuentro para ciclistas en el corazón de Espot, junto al acceso al Parque Nacional d'Aigüestortes.</p>
                    </div>
                    <div class="gallery-grid">
                        <div class="gallery-item gallery-item--large">
                            <img src="exterior.png" alt="Exterior de Espot Bikes — fachada de la tienda en Espot" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-store"></i>
                                <span>Exterior · Tienda en Espot</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="tienda_flota1.jpg" alt="Nuestra flota premium de e-bikes Moustache listas para el alquiler en Espot" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-bolt"></i>
                                <span>Flota · Moustache E-Bikes Premium</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="tienda_flota2.jpg" alt="Bicicletas eléctricas Moustache con motores Bosch Gen 5 en exposición" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-gauge-high"></i>
                                <span>Flota · Motor Bosch Gen 5 (Smart System)</span>
                            </div>
                        </div>
                        <div class="gallery-item gallery-item--large">
                            <img src="tienda_interior.jpg" alt="Interior de la tienda Espot Bikes mostrando el mostrador, bar cafetería y bicicletas de montaña" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-mug-hot"></i>
                                <span>Interior · Barra Cafetería y Recepción</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="taller1.jpg" alt="Taller mecánico de Espot Bikes con soporte profesional" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-screwdriver-wrench"></i>
                                <span>Taller · Soporte Técnico Profesional</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="cascos.jpg" alt="Expositor de cascos y accesorios Fox en Espot Bikes" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-shield-halved"></i>
                                <span>Accesorios · Cascos Fox de Gama Alta</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="taller2.jpg" alt="Herramientas y equipamiento especializado del taller" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-gears"></i>
                                <span>Servicio Técnico · Puesta a Punto</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="barra.jpg" alt="Zona de barra y cafetería para ciclistas en Espot Bikes" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-mug-hot"></i>
                                <span>Social · Barra Cafetería Original</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="nutricion.jpg" alt="Expositor de suplementación y nutrición deportiva Crown en Espot Bikes" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-cookie-bite"></i>
                                <span>Nutrición · Barritas y Geles Energéticos</span>
                            </div>
                        </div>
                        <div class="gallery-item">
                            <img src="ropa.jpg" alt="Camisetas y ropa oficial de Espot Bikes en exposición" loading="lazy" />
                            <div class="gallery-caption">
                                <i class="fa-solid fa-shirt"></i>
                                <span>Merchandising · Ropa Oficial y Camisetas</span>
                            </div>
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

    // Set up CTA navigation button listeners
    const routesBtn = container.querySelector('#hero-btn-routes');
    const infoBtn = container.querySelector('#hero-btn-info');

    if (routesBtn) {
        routesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#rutas';
        });
    }

    if (infoBtn) {
        infoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#contacto';
        });
    }
}
