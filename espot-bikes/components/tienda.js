// Componente de Instalaciones / La Tienda - Espot Bikes

export function renderTienda(container) {
    container.innerHTML = `
        <div class="view-container">
            <div class="section-header" style="margin-bottom: 2.5rem;">
                <h2>Nuestra Tienda</h2>
                <p>Un punto de encuentro para ciclistas en el corazón de Espot, junto al acceso al Parque Nacional d'Aigüestortes. Ven a visitarnos y conoce nuestras instalaciones.</p>
            </div>

            <!-- Galería de fotos de la tienda -->
            <div class="gallery-grid">
                <div class="gallery-item">
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
                <div class="gallery-item">
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
        </div>
    `;
}
