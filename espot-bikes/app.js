// Controlador Principal de la Single Page Application (app.js) - Espot Bikes

import { renderHero } from './components/hero.js';
import { renderBikes } from './components/bikes.js';
import { renderRoutes } from './components/routes.js';
import { renderTienda } from './components/tienda.js';

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const logoBtn = document.getElementById('logo-btn');

    // -------------------------------------------------------------
    // MENÚ MÓVIL INTERACTIVO
    // -------------------------------------------------------------
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
            }
        });
    }

    // -------------------------------------------------------------
    // ENRUTADOR BASADO EN HASH (SPA ROUTER)
    // -------------------------------------------------------------
    const routes = {
        '#inicio': () => renderHero(appContainer),
        '#bicis': () => renderBikes(appContainer),
        '#rutas': () => renderRoutes(appContainer),
        '#tienda': () => renderTienda(appContainer),
        '#contacto': () => renderContact(appContainer)
    };

    function router() {
        const hash = window.location.hash || '#inicio';
        
        // Ejecutar loader antes de cambiar la vista
        appContainer.innerHTML = `
            <div class="loader-container">
                <div class="loader"></div>
                <p>Cargando sección...</p>
            </div>
        `;

        // Pequeño retardo artificial para simular transición y carga premium
        setTimeout(() => {
            const renderFn = routes[hash];
            if (renderFn) {
                renderFn();
            } else {
                // Ruta no encontrada, redirigir a inicio
                window.location.hash = '#inicio';
            }
            
            // Actualizar clase activa en la navegación
            updateActiveNavLink(hash);
            
            // Desplazar al inicio de la página al cambiar de vista
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 300);
    }

    function updateActiveNavLink(hash) {
        navLinks.forEach(link => {
            const linkView = '#' + link.getAttribute('data-view');
            if (linkView === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Escuchar cambios de hash y carga inicial
    window.addEventListener('hashchange', router);
    
    // Iniciar el enrutador
    if (!window.location.hash) {
        window.location.hash = '#inicio';
    } else {
        router();
    }

    // Enlace en el logotipo para volver a inicio
    if (logoBtn) {
        logoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#inicio';
        });
    }
    const logoBtnFooter = document.getElementById('logo-btn-footer');
    if (logoBtnFooter) {
        logoBtnFooter.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#inicio';
        });
    }

    // Permitir enlaces en el footer que actualizan la vista
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            const view = link.getAttribute('data-view');
            if (view) {
                e.preventDefault();
                window.location.hash = '#' + view;
            }
        });
    });

    // -------------------------------------------------------------
    // LIGHTBOX GLOBAL PARA AMPLIAR IMÁGENES
    // -------------------------------------------------------------
    let lightbox = document.getElementById('lightbox-modal');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox-modal';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-content" id="lightbox-img" alt="Imagen ampliada" />
            <div class="lightbox-caption" id="lightbox-caption"></div>
        `;
        document.body.appendChild(lightbox);

        // Eventos para cerrar el lightbox
        lightbox.addEventListener('click', (e) => {
            if (e.target.id === 'lightbox-modal' || e.target.classList.contains('lightbox-close')) {
                lightbox.classList.remove('active');
            }
        });
        
        // Cerrar con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }

    // Escuchar clics en imágenes de forma delegada
    document.addEventListener('click', (e) => {
        const isZoomableImg = e.target.tagName === 'IMG' && (
            e.target.closest('.hero-visual') || 
            e.target.closest('.gallery-item') || 
            e.target.closest('.bike-image-container')
        );

        if (isZoomableImg) {
            const imgUrl = e.target.src;
            const imgAlt = e.target.alt || 'Imagen de Espot Bikes';
            
            const lightboxImg = document.getElementById('lightbox-img');
            const lightboxCaption = document.getElementById('lightbox-caption');
            
            if (lightboxImg) {
                lightboxImg.src = imgUrl;
                lightboxImg.alt = imgAlt;
                if (lightboxCaption) {
                    lightboxCaption.textContent = imgAlt;
                }
                lightbox.classList.add('active');
            }
        }
    });
});

// -------------------------------------------------------------
// VISTA: CONTACTO & PREGUNTAS FRECUENTES (FAQ)
// -------------------------------------------------------------
function renderContact(container) {
    container.innerHTML = `
        <div class="view-container">
            <div class="section-header">
                <h2>Información y Contacto</h2>
                <p>¿Tienes preguntas? Estamos aquí para ayudarte. Consulta los horarios de atención y resuelve tus dudas frecuentes.</p>
            </div>

            <div class="contact-grid">
                <!-- FAQ Accordion -->
                <div>
                    <h3 class="mb-4"><i class="fa-solid fa-circle-question" style="color: var(--primary); margin-right: 0.5rem;"></i> Preguntas Frecuentes</h3>
                    <div class="faq-container">
                        <div class="faq-item">
                            <div class="faq-question">
                                <span>¿Qué incluye el precio del alquiler de bicicletas?</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                En el precio se incluye: <strong>GPS de navegación DURA con rutas guiadas pregrabadas, casco de seguridad, bidón de agua Fox, candado y sillín de silicona ergonómico</strong> para mayor comodidad, además del sistema antipinchazos <strong>Tannus Armour</strong> integrado. Asimismo, todos nuestros alquileres incluyen la bicicleta ajustada a tu medida, pedales (plataforma o automáticos SPD), kit de reparación básico y seguro de responsabilidad civil.
                            </div>
                        </div>

                        <div class="faq-item">
                            <div class="faq-question">
                                <span>¿Puedo cancelar o modificar mi reserva?</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                Sí, puedes cancelar o modificar tu reserva de forma totalmente gratuita hasta 24 horas antes del día del alquiler. Solo tienes que enviarnos un correo electrónico o llamarnos por teléfono indicando tu número de reserva.
                            </div>
                        </div>

                        <div class="faq-item">
                            <div class="faq-question">
                                <span>¿Es necesario tener mucha experiencia para rodar en Espot?</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                No necesariamente. Contamos con rutas verdes y fáciles como la Ruta del Río Escrit, ideales para familias y ciclistas ocasionales. Sin embargo, para los senderos de Enduro (Descens del Clot) y de Descenso (Camí dels Gariols) sí es necesario contar con experiencia previa y dominio técnico de bicicletas de montaña en terrenos empinados.
                            </div>
                        </div>

                        <div class="faq-item">
                            <div class="faq-question">
                                <span>¿Qué pasa si tengo una avería o problema con la bicicleta durante la ruta?</span>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <div class="faq-answer">
                                Todos nuestros alquileres incluyen un kit de reparación básico para pequeños imprevistos. Si sufres una avería o problema mayor que te impida continuar, disponemos de un <strong>servicio de rescate y asistencia en ruta</strong>. Este servicio tiene un coste adicional que se calcula según el kilometraje (la distancia de desplazamiento desde la tienda).
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Info & Contact Details -->
                <div class="info-details-panel">
                    <div class="glass-card review-card" style="padding: 2rem;">
                        <h3 class="mb-4" style="font-size: 1.3rem;"><i class="fa-solid fa-clock" style="color: var(--primary-dark-readable); margin-right: 0.5rem;"></i> Horarios de Apertura</h3>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; color: var(--text-secondary);">
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem 0; font-weight: 600; color: var(--text-primary);">Lunes a Viernes</td>
                                <td style="padding: 0.75rem 0; text-align: right;">9:00 - 14:00 | 16:00 - 20:00</td>
                            </tr>
                            <tr style="border-bottom: 1px solid var(--border-color);">
                                <td style="padding: 0.75rem 0; font-weight: 600; color: var(--text-primary);">Sábados y Domingos</td>
                                <td style="padding: 0.75rem 0; text-align: right;">9:00 - 14:00 | 16:00 - 20:00</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem 0; font-weight: 600; color: var(--text-primary);">Festivos Temporada</td>
                                <td style="padding: 0.75rem 0; text-align: right;">9:00 - 14:00 | 16:00 - 20:00</td>
                            </tr>
                        </table>
                    </div>

                    <div class="glass-card review-card" style="padding: 2rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1rem; box-shadow: var(--shadow-premium); border-radius: 12px; border: 1px solid var(--border-color); cursor: default;">
                        <i class="fa-solid fa-map-location-dot" style="font-size: 3rem; color: var(--primary-dark-readable); filter: drop-shadow(0 4px 6px rgba(21, 128, 61, 0.15));"></i>
                        <div>
                            <h4 style="color: var(--text-primary); margin-bottom: 0.5rem; font-size: 1.3rem; font-family: var(--font-heading); text-transform: uppercase;">Nuestra Ubicación</h4>
                            <p style="margin-bottom: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">Av. de la Flora, s/n, 25597 Espot, Lleida, España</p>
                            <p style="margin-bottom: 0; font-size: 0.9rem; color: var(--text-secondary); display: flex; align-items: center; justify-content: center; gap: 0.35rem;"><i class="fa-solid fa-globe" style="color: var(--primary-dark-readable);"></i> Web oficial: <a href="https://www.hostalpalmira.com/" target="_blank" style="color: var(--primary-dark-readable); font-weight: 700; text-decoration: underline;">www.hostalpalmira.com</a></p>
                        </div>
                        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.4;">Junto al aparcamiento principal de acceso al Parque Nacional d'Aigüestortes.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Configurar interacciones del acordeón FAQ
    const faqItems = container.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los demás ítems
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Si el ítem actual no estaba activo, abrirlo
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}
