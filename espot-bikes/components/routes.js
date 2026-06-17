// Componente de Rutas e Información de Mapas - Espot Bikes

import { routesData } from '../data.js';

export function renderRoutes(container) {
    let activeRouteId = routesData[0].id;
    let selectedDifficulty = 'all';
    let map;
    let routePolylines = {};

    // Función para renderizar el HTML principal de la vista
    function initHTML() {
        container.innerHTML = `
            <div class="view-container">
                <div class="section-header">
                    <h2>Rutas de Montaña en Espot</h2>
                    <p>Encuentra el recorrido perfecto para tu nivel. Desde pistas familiares por el fondo del valle hasta bajadas técnicas y empinadas de puro Enduro y Descenso.</p>
                </div>
                
                <div class="routes-layout">
                    <!-- Left Sidebar: Filters & List -->
                    <div class="routes-sidebar-wrapper">
                        <div class="routes-filter-bar mb-2">
                            <button class="filter-btn active" data-difficulty="all">Todos</button>
                            <button class="filter-btn" data-difficulty="easy">Fácil</button>
                            <button class="filter-btn" data-difficulty="medium">Medio</button>
                            <button class="filter-btn" data-difficulty="hard">Difícil</button>
                            <button class="filter-btn" data-difficulty="expert">Experto</button>
                        </div>
                        <div class="routes-sidebar" id="routes-list-container">
                            <!-- Las tarjetas de rutas se inyectan aquí -->
                        </div>
                    </div>

                    <!-- Right Column: Interactive Map & Elevation Profile -->
                    <div class="map-panel">
                        <div class="map-viewport-wrapper" style="position: relative;">
                            <!-- Leaflet Real Map Div -->
                            <div id="leaflet-map" style="width: 100%; height: 100%; z-index: 1; border-radius: 16px;"></div>
                        </div>

                        <!-- Elevation Profile Widget -->
                        <div class="glass-card elevation-profile-card" id="elevation-profile-container">
                            <!-- Inyectado dinámicamente -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Inicializa el mapa de Leaflet
    function initMap() {
        const mapEl = container.querySelector('#leaflet-map');
        if (!mapEl) return;

        // Comprobamos si Leaflet está cargado
        if (typeof L === 'undefined') {
            mapEl.innerHTML = `<div style="padding: 2rem; text-align: center; color: var(--text-secondary);">
                <i class="fa-solid fa-circle-exclamation" style="font-size: 2rem; color: var(--primary-dark-readable); margin-bottom: 1rem;"></i>
                <p>Error: No se pudo cargar el mapa. Verifica tu conexión a Internet.</p>
            </div>`;
            return;
        }

        // Crear mapa centrado en Espot
        map = L.map(mapEl, {
            center: [42.5768, 1.05],
            zoom: 12,
            zoomControl: true,
            attributionControl: false
        });

        // Capa de relieve topográfico (OpenTopoMap) - Ideal para senderos y montaña
        L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            maxZoom: 17
        }).addTo(map);

        // Crear las líneas de las rutas
        routesData.forEach(route => {
            let diffColor = '#10b981';
            if (route.difficulty === 'easy') diffColor = '#00e676'; // verde neón
            else if (route.difficulty === 'medium') diffColor = '#00b0ff'; // azul/cian eléctrico
            else if (route.difficulty === 'hard') diffColor = '#ff1744'; // rojo neón brillante
            else if (route.difficulty === 'expert') diffColor = '#d500f9'; // violeta neón

            // 1. Línea de borde negro (Casing) para dar alto contraste
            const casing = L.polyline(route.coordinates, {
                color: '#000000',
                weight: 9,
                opacity: 0.75,
                lineJoin: 'round'
            }).addTo(map);

            // 2. Línea de color central (Core)
            const core = L.polyline(route.coordinates, {
                color: diffColor,
                weight: 4.5,
                opacity: 0.9,
                lineJoin: 'round'
            }).addTo(map);

            // Guardar ambas referencias para actualizarlas en caliente
            routePolylines[route.id] = { casing, core };

            // Tooltip interactivo
            core.bindTooltip(`<strong>${route.name}</strong><br>${route.distance} km | +${route.elevationGain}m`, {
                sticky: true
            });

            // Evento al hacer clic en el trazado
            const clickHandler = () => setActiveRoute(route.id);
            core.on('click', clickHandler);
            casing.on('click', clickHandler);
        });

        // Marcadores de puntos clave
        // Espot Pueblo
        L.marker([42.5768, 1.0857]).addTo(map)
            .bindTooltip("<strong>ESPOT (1300m)</strong>", { permanent: true, direction: 'bottom' });

        // Estany de Sant Maurici
        L.marker([42.5806, 0.9906]).addTo(map)
            .bindTooltip("<strong>E. Sant Maurici (1910m)</strong>", { permanent: false, direction: 'top' });

        // Cota 2000
        L.marker([42.5658, 1.0125]).addTo(map)
            .bindTooltip("<strong>Espot Cota 2000</strong>", { permanent: false, direction: 'top' });
    }

    // Renderiza la lista de rutas laterales basándose en los filtros
    function renderRoutesList() {
        const listContainer = container.querySelector('#routes-list-container');
        if (!listContainer) return;

        const filteredRoutes = routesData.filter(route => {
            return selectedDifficulty === 'all' || route.difficulty === selectedDifficulty;
        });

        if (filteredRoutes.length === 0) {
            listContainer.innerHTML = `
                <div style="padding: 2rem; text-align: center; color: var(--text-secondary);">
                    <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; color: var(--primary-dark-readable); margin-bottom: 1rem;"></i>
                    <p>No se encontraron rutas para esta categoría.</p>
                </div>
            `;
            return;
        }

        listContainer.innerHTML = filteredRoutes.map(route => {
            const isActive = route.id === activeRouteId ? 'active' : '';
            let difficultyBadge = '';
            
            if (route.difficulty === 'easy') difficultyBadge = '<span class="badge badge-easy">Fácil</span>';
            else if (route.difficulty === 'medium') difficultyBadge = '<span class="badge badge-medium">Medio</span>';
            else if (route.difficulty === 'hard') difficultyBadge = '<span class="badge badge-hard">Difícil</span>';
            else if (route.difficulty === 'expert') difficultyBadge = '<span class="badge badge-expert">Experto</span>';

            return `
                <div class="route-list-card difficulty-${route.difficulty} ${isActive}" data-route-id="${route.id}">
                    <div class="route-card-header">
                        <h3>${route.name}</h3>
                        ${difficultyBadge}
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                        ${route.description}
                    </p>
                    <div class="route-card-stats">
                        <span><i class="fa-solid fa-arrows-left-right"></i> ${route.distance} km</span>
                        <span><i class="fa-solid fa-arrow-trend-up"></i> +${route.elevationGain}m</span>
                        <span><i class="fa-solid fa-stopwatch"></i> ${route.duration}</span>
                    </div>
                </div>
            `;
        }).join('');

        // Eventos en las tarjetas
        listContainer.querySelectorAll('.route-list-card').forEach(card => {
            card.addEventListener('click', () => {
                const routeId = card.getAttribute('data-route-id');
                setActiveRoute(routeId);
            });
        });
    }

    // Actualiza el estado visual de la ruta activa en la lista, el mapa y el perfil de elevación
    function setActiveRoute(routeId) {
        activeRouteId = routeId;

        // Actualizar clase activa en las tarjetas de la lista
        container.querySelectorAll('.route-list-card').forEach(card => {
            if (card.getAttribute('data-route-id') === routeId) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        // Actualizar estilos de las polilíneas de Leaflet (casing + core)
        Object.keys(routePolylines).forEach(id => {
            const { casing, core } = routePolylines[id];
            if (casing && core) {
                const route = routesData.find(r => r.id === id);
                let diffColor = '#10b981';
                if (route) {
                    if (route.difficulty === 'easy') diffColor = '#00e676';
                    else if (route.difficulty === 'medium') diffColor = '#00b0ff';
                    else if (route.difficulty === 'hard') diffColor = '#ff1744';
                    else if (route.difficulty === 'expert') diffColor = '#d500f9';
                }
                
                if (id === routeId) {
                    // Resaltar ruta activa con trazado más grueso y opacidad completa
                    casing.setStyle({
                        weight: 13,
                        opacity: 0.95
                    });
                    core.setStyle({
                        color: diffColor,
                        weight: 7,
                        opacity: 1
                    });
                    casing.bringToFront();
                    core.bringToFront();
                    
                    // Enfocar el mapa sobre la ruta seleccionada con holgura
                    if (map) {
                        map.fitBounds(core.getBounds(), {
                            padding: [40, 40],
                            maxZoom: 14,
                            animate: true,
                            duration: 0.8
                        });
                    }
                } else {
                    // Atenuar rutas inactivas manteniendo legibilidad
                    casing.setStyle({
                        weight: 7,
                        opacity: 0.5
                    });
                    core.setStyle({
                        color: diffColor,
                        weight: 3.5,
                        opacity: 0.75
                    });
                }
            }
        });

        // Renderizar el perfil de elevación correspondiente
        renderElevationProfile(routeId);
    }

    // Renderiza el gráfico de barras CSS del perfil de elevación para la ruta activa
    function renderElevationProfile(routeId) {
        const profileContainer = container.querySelector('#elevation-profile-container');
        if (!profileContainer) return;

        const route = routesData.find(r => r.id === routeId);
        if (!route) return;

        // Calcular el rango del perfil de elevación
        const heights = route.elevationProfile;
        const minHeight = Math.min(...heights);
        const maxHeight = Math.max(...heights);
        const heightRange = maxHeight - minHeight || 1;

        // Color de la dificultad para usarlo en el perfil
        let difficultyColor = 'var(--primary)';
        if (route.difficulty === 'easy') difficultyColor = 'var(--difficulty-easy)';
        else if (route.difficulty === 'medium') difficultyColor = 'var(--difficulty-medium)';
        else if (route.difficulty === 'hard') difficultyColor = 'var(--difficulty-hard)';
        else if (route.difficulty === 'expert') difficultyColor = 'var(--difficulty-expert)';

        // Generar barras HTML
        const barsHTML = heights.map((height, index) => {
            // Calcular porcentaje de altura relativa para las barras
            const percent = ((height - minHeight) / heightRange) * 85 + 15; // Mínimo 15% para que no quede vacía
            // Calcular la distancia correspondiente a esta barra
            const distanceAtPoint = ((route.distance / (heights.length - 1)) * index).toFixed(1);

            return `
                <div class="elevation-chart-bar" style="height: ${percent}%; background: linear-gradient(to top, rgba(15, 23, 42, 0.05) 0%, ${difficultyColor} 100%);">
                    <div class="elevation-chart-tooltip">
                        <strong>${height}m</strong><br>
                        <span>Km ${distanceAtPoint}</span>
                    </div>
                </div>
            `;
        }).join('');

        profileContainer.innerHTML = `
            <div class="elevation-profile-header">
                <h4>Perfil de Elevación: <strong>${route.name}</strong></h4>
                <div class="elevation-stats">
                    <div>
                        <span>Alt. Mínima</span>
                        <strong>${minHeight} m</strong>
                    </div>
                    <div>
                        <span>Alt. Máxima</span>
                        <strong>${maxHeight} m</strong>
                    </div>
                    <div>
                        <span>Desnivel Acum.</span>
                        <strong>+${route.elevationGain}m / -${route.elevationLoss}m</strong>
                    </div>
                </div>
            </div>
            
            <div class="elevation-chart-container">
                ${barsHTML}
            </div>
            <div class="chart-axis-labels">
                <span>Salida (0.0 km)</span>
                <span>Mitad</span>
                <span>Llegada (${route.distance} km)</span>
            </div>
        `;
    }

    // Inicializar todo
    initHTML();
    initMap();
    renderRoutesList();
    
    // Pequeño retardo para asegurar que Leaflet calcula las dimensiones del contenedor correctamente
    setTimeout(() => {
        if (map) {
            map.invalidateSize();
            setActiveRoute(activeRouteId);
        }
    }, 150);

    // Event listeners para los filtros de dificultad
    const filterButtons = container.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedDifficulty = btn.getAttribute('data-difficulty');
            
            renderRoutesList();

            // Si la ruta activa ya no está en la lista filtrada, seleccionar la primera disponible
            const filteredRoutes = routesData.filter(r => selectedDifficulty === 'all' || r.difficulty === selectedDifficulty);
            if (filteredRoutes.length > 0 && !filteredRoutes.find(r => r.id === activeRouteId)) {
                setActiveRoute(filteredRoutes[0].id);
            }
        });
    });
}
