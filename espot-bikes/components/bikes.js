// Componente de Catálogo de Bicicletas (Bikes) - Espot Bikes

import { bikesData } from '../data.js';

export function renderBikes(container) {
    // Función para renderizar el HTML principal
    function initHTML() {
        container.innerHTML = `
            <div class="view-container">
                <div class="section-header" style="margin-bottom: 2.5rem;">
                    <h2>Nuestra Flota de Alquiler</h2>
                    <p>Bicicletas de gama alta preparadas para los exigentes senderos del Pallars Sobirà. En el precio de todas nuestras bicicletas se incluye equipamiento completo de seguridad y confort de serie para que no tengas que preocuparte por nada.</p>
                </div>

                <!-- Accesorios Incluidos Globalmente -->
                <div style="margin: 0 auto 2.5rem auto; max-width: 800px; padding: 1.5rem; border: 1px solid var(--border-color); display: flex; flex-direction: column; gap: 1.25rem; background: var(--bg-surface-solid); text-align: left; border-radius: 16px; box-shadow: var(--shadow-premium);">
                    <h4 style="font-size: 1.15rem; font-weight: 800; font-family: var(--font-heading); text-transform: uppercase; color: var(--primary-dark-readable); margin-bottom: 0.25rem; text-align: center; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                        <i class="fa-solid fa-circle-check"></i> Accesorios premium incluidos en todas las bicicletas
                    </h4>
                    <div class="included-accessories-grid">
                        <div class="gallery-item" style="aspect-ratio: 16/10; height: auto;">
                            <img src="bici_detalle_manillar.png" alt="GPS de navegación DURA y pantalla Bosch Smart System incluidos en todas las bicis de alquiler" loading="lazy" />
                            <div class="gallery-caption" style="padding: 0.75rem 1rem 0.5rem 1rem; font-size: 0.8rem; background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 70%, transparent 100%);">
                                <i class="fa-solid fa-location-crosshairs"></i>
                                <span>GPS DURA de Navegación Guiada</span>
                            </div>
                        </div>
                        <div class="gallery-item" style="aspect-ratio: 16/10; height: auto;">
                            <img src="bici_detalle_cuadro.png" alt="Bidón de agua Fox original incluido de regalo y montado en el portabidones del cuadro" loading="lazy" />
                            <div class="gallery-caption" style="padding: 0.75rem 1rem 0.5rem 1rem; font-size: 0.8rem; background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.4) 70%, transparent 100%);">
                                <i class="fa-solid fa-bottle-water"></i>
                                <span>Bidón Fox de Agua Incluido</span>
                            </div>
                        </div>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); text-align: center; margin: 0; line-height: 1.5; font-family: var(--font-body);">
                        Todas las tarifas de alquiler incluyen: <strong>GPS de navegación DURA</strong> (con mapas y rutas guiadas), <strong>bidón de agua Fox</strong>, <strong>casco de seguridad</strong>, <strong>candado de combinación</strong>, <strong>sillín de silicona ergonómico</strong> y protección antipinchazos <strong>Tannus Armour</strong> de serie.
                    </p>
                </div>

                <!-- Promo Banner Junio -->
                <div class="promo-banner" style="background: linear-gradient(135deg, var(--primary-dark-readable) 0%, #0c3e1e 100%); color: #ffffff; padding: 1.25rem 2rem; border-radius: 12px; margin: 0 auto 2.5rem auto; max-width: 800px; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; box-shadow: var(--shadow-premium); border-left: 5px solid var(--primary);">
                    <div>
                        <span style="background: var(--primary); color: #000; font-weight: 800; font-size: 0.75rem; padding: 0.25rem 0.6rem; border-radius: 9999px; text-transform: uppercase; font-family: var(--font-heading); margin-right: 0.5rem; display: inline-block;">PROMO JUNIO</span>
                        <h4 style="font-size: 1.35rem; font-weight: 700; margin-top: 0.35rem; margin-bottom: 0;">¡Oferta Especial de Junio!</h4>
                        <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: rgba(255,255,255,0.85);">Precios rebajados en alquiler de bicicletas de adulto durante todo este mes.</p>
                    </div>
                    <div style="display: flex; gap: 0.75rem; align-items: center; font-family: var(--font-heading); font-weight: 800;">
                        <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 0.4rem 0.8rem; border-radius: 8px; min-width: 80px;">
                            <span style="font-size: 0.65rem; color: rgba(255,255,255,0.7); display: block; text-transform: uppercase; font-weight: 500; line-height: 1;">1/2 Día</span>
                            <span style="font-size: 1.35rem; line-height: 1.2; margin-top: 0.15rem; display: block;">50€</span>
                        </div>
                        <div style="text-align: center; background: rgba(255,255,255,0.1); padding: 0.4rem 0.8rem; border-radius: 8px; min-width: 80px;">
                            <span style="font-size: 0.65rem; color: rgba(255,255,255,0.7); display: block; text-transform: uppercase; font-weight: 500; line-height: 1;">1 Día</span>
                            <span style="font-size: 1.35rem; line-height: 1.2; margin-top: 0.15rem; display: block;">80€</span>
                        </div>
                    </div>
                </div>

                <div class="bikes-grid" id="bikes-grid-container">
                    <!-- Las tarjetas de bicis se inyectan aquí -->
                </div>

                <!-- Banner Informativo / Reservas -->
                <div class="glass-card text-center" style="margin-top: 4rem; padding: 3rem 2rem; border: 1px solid rgba(212, 241, 8, 0.2); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: radial-gradient(circle, rgba(212, 241, 8, 0.1) 0%, transparent 70%); pointer-events: none;"></div>
                    <h3 style="font-size: 1.8rem; margin-bottom: 1rem; text-transform: uppercase; font-family: var(--font-heading);">¿Quieres asegurar tu bici?</h3>
                    <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem auto; font-size: 1rem;">
                        Las e-bikes de talla específica son limitadas durante la temporada alta. Te recomendamos reservar con antelación por llamada o WhatsApp.
                    </p>
                    <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap;">
                        <a href="tel:665073277" class="btn btn-primary btn-lg" style="border-radius: 9999px; font-weight: 800; text-transform: uppercase;">
                            <i class="fa-solid fa-phone"></i> Llamar al 665 07 32 77
                        </a>
                        <a href="#contacto" id="bikes-btn-info" class="btn btn-secondary btn-lg" style="border-radius: 9999px;">
                            <i class="fa-solid fa-circle-info"></i> Ubicación y Horarios
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Event listener para el enlace a contacto dentro de la vista
        const infoBtn = container.querySelector('#bikes-btn-info');
        if (infoBtn) {
            infoBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.hash = '#contacto';
            });
        }
    }

    // Renderiza la lista de bicicletas
    function renderBikesList() {
        const gridContainer = container.querySelector('#bikes-grid-container');
        if (!gridContainer) return;

        const filteredBikes = bikesData;

        gridContainer.innerHTML = filteredBikes.map(bike => {
            const isEbike = bike.type.toLowerCase().includes('e-bike') || bike.specs.engine.toLowerCase().includes('nm');
            const isJunior = bike.type.toLowerCase().includes('infantil') || bike.type.toLowerCase().includes('junior');

            const typeBadge = isEbike 
                ? '<span class="badge badge-easy" style="background: rgba(21, 128, 61, 0.08); color: var(--primary-dark-readable); border: 1px solid rgba(21, 128, 61, 0.25);"><i class="fa-solid fa-bolt"></i> Eléctrica</span>'
                : '<span class="badge badge-medium" style="background: rgba(37, 99, 235, 0.08); color: var(--difficulty-medium); border: 1px solid rgba(37, 99, 235, 0.25);"><i class="fa-solid fa-mountain"></i> Muscular</span>';

            const promoBadge = isJunior 
                ? '' 
                : '<span class="badge" style="background: rgba(212, 241, 8, 0.15); color: #7aa000; border: 1px solid rgba(212, 241, 8, 0.35); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; margin-top: 0.25rem; display: inline-block;"><i class="fa-solid fa-tag"></i> Promo Junio</span>';

            const halfDayPriceHTML = isJunior
                ? `<span style="font-size: 0.95rem; font-weight: 800; color: var(--primary-dark-readable); font-family: var(--font-heading);">${bike.priceHalfDay}€</span>`
                : `<span style="font-size: 0.8rem; text-decoration: line-through; color: var(--text-muted); font-weight: 500; margin-right: 0.25rem;">55€</span><span style="font-size: 0.95rem; font-weight: 800; color: var(--primary-dark-readable); font-family: var(--font-heading);">50€</span>`;

            const fullDayPriceHTML = isJunior
                ? `<span style="font-size: 1.1rem; font-weight: 800; color: var(--primary-dark-readable); font-family: var(--font-heading);">${bike.priceFullDay}€</span>`
                : `<span style="font-size: 0.85rem; text-decoration: line-through; color: var(--text-muted); font-weight: 500; margin-right: 0.25rem;">85€</span><span style="font-size: 1.1rem; font-weight: 800; color: var(--primary-dark-readable); font-family: var(--font-heading);">80€</span>`;

            const isPng = bike.image.endsWith('.png');
            const imgStyle = isPng 
                ? 'max-width: 85%; max-height: 85%; object-fit: contain;'
                : 'width: 100%; height: 100%; object-fit: cover;';

            const thumbnailsHTML = bike.images && bike.images.length > 1
                ? `
                    <div class="bike-thumbnails" style="display: flex; gap: 0.5rem; margin-top: -0.5rem; margin-bottom: 1rem; justify-content: center; z-index: 10; position: relative;">
                        ${bike.images.map((img, idx) => {
                            const activeBorder = idx === 0 ? 'border: 2px solid var(--primary-dark-readable);' : 'border: 1px solid var(--border-color);';
                            return `
                                <img class="bike-thumb" data-bike-id="${bike.id}" data-img-src="${img}" src="${img}" alt="${bike.name} detalle ${idx + 1}" style="width: 50px; height: 38px; object-fit: cover; border-radius: 6px; cursor: pointer; transition: all 0.2s; ${activeBorder}" />
                            `;
                        }).join('')}
                    </div>
                `
                : '';

            return `
                <div class="bike-card review-card" style="cursor: default;">
                    <div class="bike-image-container" style="background: #f1f5f9; height: 200px; display: flex; align-items: center; justify-content: center; border-radius: 12px; position: relative; overflow: hidden; margin-bottom: 1.25rem; border: 1px solid var(--border-color);">
                        <img id="bike-img-${bike.id}" src="${bike.image}" alt="${bike.name}" style="${imgStyle} z-index: 2; position: relative; filter: drop-shadow(0 8px 16px rgba(15,23,42,0.15)); border-radius: 10px;" />
                    </div>
                    
                    ${thumbnailsHTML}
                    
                    <div class="bike-card-body" style="flex-grow: 1; display: flex; flex-direction: column;">
                        <!-- Tipo y Precio Separados sin superposición -->
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; gap: 0.5rem;">
                            <div style="display: flex; flex-direction: column; align-items: flex-start;">
                                ${typeBadge}
                                ${promoBadge}
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: flex-end; text-align: right; line-height: 1.25;">
                                <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">
                                    Medio día: ${halfDayPriceHTML}
                                </div>
                                <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600; margin-top: 0.15rem;">
                                    Día entero: ${fullDayPriceHTML}
                                </div>
                            </div>
                        </div>
                        
                        <span style="color: var(--text-muted); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.25rem;">${bike.type}</span>
                        <h3 style="font-size: 1.35rem; font-weight: 800; font-family: var(--font-heading); color: var(--text-primary); margin-bottom: 0.75rem; line-height: 1.2;">${bike.name}</h3>
                        <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">${bike.description}</p>
                        
                        <!-- Especificaciones -->
                        <div class="bike-specs" style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: 8px; padding: 0.75rem; display: flex; justify-content: space-between; gap: 0.5rem; margin-bottom: 1.25rem; font-size: 0.75rem;">
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1; text-align: center;">
                                <span style="color: var(--text-muted); font-size: 0.65rem; text-transform: uppercase;">Peso</span>
                                <strong style="color: var(--text-primary); margin-top: 0.15rem;"><i class="fa-solid fa-weight-hanging" style="color: var(--primary-dark-readable); font-size: 0.7rem;"></i> ${bike.specs.weight}</strong>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1; text-align: center; border-left: 1px solid var(--border-color); border-right: 1px solid var(--border-color);">
                                <span style="color: var(--text-muted); font-size: 0.65rem; text-transform: uppercase;">Recorrido</span>
                                <strong style="color: var(--text-primary); margin-top: 0.15rem;"><i class="fa-solid fa-arrows-up-down" style="color: var(--primary-dark-readable); font-size: 0.7rem;"></i> ${bike.specs.travel}</strong>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: center; flex: 1; text-align: center;">
                                <span style="color: var(--text-muted); font-size: 0.65rem; text-transform: uppercase;">Motor</span>
                                <strong style="color: var(--text-primary); margin-top: 0.15rem; font-size: 0.7rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 75px;" title="${bike.specs.engine}"><i class="fa-solid fa-gears" style="color: var(--primary-dark-readable); font-size: 0.7rem;"></i> ${bike.specs.engine}</strong>
                            </div>
                        </div>

                        <!-- Tallas -->
                        <div class="size-selector" style="margin-bottom: 0.5rem;">
                            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Tallas Disponibles:</span>
                            <div class="size-btn-group" style="margin-top: 0.4rem; gap: 0.5rem;">
                                ${bike.sizes.map(size => `<span class="size-btn" style="cursor: default; user-select: none;">${size}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Interactividad de las miniaturas de las fotos
        gridContainer.querySelectorAll('.bike-thumb').forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                const bikeId = thumb.getAttribute('data-bike-id');
                const imgSrc = thumb.getAttribute('data-img-src');
                
                // Actualizar imagen principal
                const mainImg = gridContainer.querySelector(`#bike-img-${bikeId}`);
                if (mainImg) {
                    mainImg.src = imgSrc;
                    
                    // Ajustar object-fit si cambia de formato
                    const isPng = imgSrc.endsWith('.png');
                    if (isPng) {
                        mainImg.style.width = 'auto';
                        mainImg.style.height = 'auto';
                        mainImg.style.maxWidth = '85%';
                        mainImg.style.maxHeight = '85%';
                        mainImg.style.objectFit = 'contain';
                    } else {
                        mainImg.style.width = '100%';
                        mainImg.style.height = '100%';
                        mainImg.style.maxWidth = 'none';
                        mainImg.style.maxHeight = 'none';
                        mainImg.style.objectFit = 'cover';
                    }
                }
                
                // Actualizar bordes activos en miniaturas de esta bici
                gridContainer.querySelectorAll(`.bike-thumb[data-bike-id="${bikeId}"]`).forEach(t => {
                    t.style.border = '1px solid var(--border-color)';
                });
                thumb.style.border = '2px solid var(--primary-dark-readable)';
            });
        });
    }

    // Inicializar todo
    initHTML();
    renderBikesList();
}
