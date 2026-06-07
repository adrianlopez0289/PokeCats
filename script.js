        /**
         * ==========================================
         * SECCIÓN DE CONFIGURACIÓN GLOBAL
         * Edite aquí los datos de contacto, redes sociales e información del director.
         * ==========================================
         */
        const CONFIG = {
            // Información de contacto
            whatsappNumber: "17789226558", // Formato internacional sin + ni espacios
            email: "contacto@pocketcats.com",
            phoneDisplay: "+57 300 123 4567",
            
            // Redes sociales (URLs completas)
            socialMedia: {
                facebook: "https://facebook.com/pocketcats",
                instagram: "https://instagram.com/pocketcats",
                tiktok: "https://tiktok.com/@pocketcats"
            },
            
            // Información del director
            director: {
                name: "Luceny Lopez Gallego",
                role: "Directora Ejecutivo & Criador Senior",
                bio: "Más de 15 años de experiencia en genética felina y crianza responsable de British Shorthair.",
                photo: "assets/images/about/ceo.jpeg", // Reemplazar con foto real
                certificate: "file:///C:/Users/Adria/Downloads/Documento%20sin%20t%C3%ADtulo%20(2).pdf" // Enlace al PDF si existe
            }
        };

        /**
         * ==========================================
         * CATÁLOGO DE GATOS (DATOS)
         * Para agregar un gato, copie un objeto {} dentro del array y modifique los datos.
         * ==========================================
         */
        const catsCatalog = [
            {
                id: 101,
                name: "Luna",
                age: "3 meses",
                color: "Azul Sólido",
                price: "$1.200.000 COP",
                status: "Disponible",
                personality: "Tranquila, observadora y muy mimosa.",
                description: "Luna es una hembra hermosa con un pelaje denso y ojos cobrizos perfectos. Es la compañera ideal para apartamentos.",
                images: [
                    "assets/images/catalog/luna.jpeg",
                    "assets/images/catalog/luna2.jpg",
                    "assets/images/catalog/luna3.jpg"
                ]
            },
            {
                id: 102,
                name: "Oliver",
                age: "4 meses",
                color: "Blue Point",
                price: "$1.500.000 COP",
                status: "Disponible",
                personality: "Juguetón, curioso y sociable.",
                description: "Oliver tiene una marca distintiva en su nariz y unas patitas blancas. Le encanta jugar con plumas y dormir en regazos.",
                images: [
                    "assets/images/catalog/oliver.jpeg",
                    "assets/images/catalog/oliver2.jpg"
                ]
            },
            {
                id: 103,
                name: "Simba",
                age: "3.5 meses",
                color: "Golden Shaded",
                price: "$2.000.000 COP",
                status: "Reservado",
                personality: "Enérgico y valiente.",
                description: "Un ejemplar espectacular de color dorado. Su pelaje brilla bajo la luz. Tiene un carácter fuerte pero muy leal.",
                images: [
                    "assets/images/catalog/simba.jpg",
                    "assets/images/catalog/simba2.jpg"
                ]
            },
            {
                id: 104,
                name: "Mia",
                age: "3 meses",
                color: "Gris",
                price: "$1.350.000 COP",
                status: "Disponible",
                personality: "Dulce y silenciosa.",
                description: "El color lila es muy buscado por su suavidad. Mia es una gata que ronronea apenas la tocas.",
                images: [
                    "assets/images/catalog/mia.jpeg",
                    "assets/images/catalog/mia2.jpg"
                ]
            },
            {
                id: 105,
                name: "Pan",
                age: "3 meses",
                color: "albino",
                price: "$1.350.000 COP",
                status: "Reservado",
                personality: "Dulce y silenciosa.",
                description: "El color lila es muy buscado por su suavidad. Mia es una gata que ronronea apenas la tocas.",
                images: [
                    "assets/images/catalog/pan.jpg",
                    "assets/images/catalog/mia2.jpg"
                ]
            },
            {
                id: 106,
                name: "Capuchino",
                age: "3 meses",
                color: "Capuchino",
                price: "$1.350.000 COP",
                status: "Disponible",
                personality: "Dulce y silenciosa.",
                description: "El color lila es muy buscado por su suavidad. Mia es una gata que ronronea apenas la tocas.",
                images: [
                    "assets/images/catalog/capuchino.png",
                    "assets/images/catalog/mia2.jpg"
                ]
            }
            
        ];

        /**
         * ==========================================
         * DATOS DE PROGENITORES (FAMILIA)
         * ==========================================
         */
        const parentsData = [
            {
                name: "Gran Campeón Thor",
                desc: "Padre oficial. 3 años. Color Azul Intenso. Pedigree WCF. Ganador de exposición regional 2024.",
                img:"assets/images/family/papa.jpeg"  
            },
            {
                name: "Duquesa Bella",
                desc: "Madre oficial. 2.5 años. Color Blue Point. Temperamento extremadamente dócil. Línea de sangre importada.",
                img:"assets/images/family/mama.jpeg"            
            }
        ];

        /* ==========================================
           FUNCIONES DEL SISTEMA (NO MODIFICAR A MENOS QUE SEPAS JS)
           ========================================== */

        // Inicialización
        document.addEventListener('DOMContentLoaded', () => {
            renderConfig();
            renderParents();
            renderCatalog();
            setupSmoothScroll();
        });

        // Renderizar Configuración (Footer, Director, etc)
        function renderConfig() {
            // Director
            const directorHTML = `
                <img src="${CONFIG.director.photo}" alt="${CONFIG.director.name}" class="director-photo">
                <h3>${CONFIG.director.name}</h3>
                <p style="color: var(--color-accent); font-weight: bold; margin-bottom: 10px;">${CONFIG.director.role}</p>
                <p style="font-size: 0.9rem; color: #666;">${CONFIG.director.bio}</p>
                <div class="social-icons">
                    <a href="${CONFIG.socialMedia.facebook}" target="_blank" class="social-link" title="Facebook">f</a>
                    <a href="${CONFIG.socialMedia.instagram}" target="_blank" class="social-link" title="Instagram">i</a>
                    <a href="${CONFIG.socialMedia.tiktok}" target="_blank" class="social-link" title="TikTok">t</a>
                </div>
            `;
            document.getElementById('directorCard').innerHTML = directorHTML;

            // Footer Info
            const footerHTML = `
                <p>📞 ${CONFIG.phoneDisplay} | ✉️ ${CONFIG.email}</p>
            `;
            document.getElementById('footerContactInfo').innerHTML = footerHTML;
        }

        // Renderizar Progenitores
        function renderParents() {
            const container = document.getElementById('parentsGrid');
            let html = '';
            parentsData.forEach(parent => {
                html += `
                    <div class="parent-card">
                        <img src="${parent.img}" alt="${parent.name}" class="parent-img">
                        <div class="parent-info">
                            <h3>${parent.name}</h3>
                            <p>${parent.desc}</p>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        // Renderizar Catálogo
        function renderCatalog() {
            const container = document.getElementById('catsGrid');
            let html = '';
            catsCatalog.forEach(cat => {
                // Determinar color de estado
                const statusColor = cat.status === 'Disponible' ? '#FFD700' : '#ccc';
                
                html += `
                    <div class="cat-card" onclick="openModal(${cat.id})">
                        <span class="cat-status" style="background-color: ${statusColor}">${cat.status}</span>
                        <img src="${cat.images[0]}" alt="${cat.name}" class="cat-thumb">
                        <div class="cat-details">
                            <div class="cat-name">${cat.name}</div>
                            <div class="cat-meta">
                                <span>${cat.age}</span>
                                <span>${cat.color}</span>
                            </div>
                            <div style="margin-top: 10px; font-weight: bold; color: var(--color-text-dark);">${cat.price}</div>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

        // Lógica del Modal
        function openModal(id) {
            const cat = catsCatalog.find(c => c.id === id);
            if (!cat) return;

            // Llenar datos
            document.getElementById('modalName').innerText = cat.name;
            document.getElementById('modalPrice').innerText = cat.price;
            document.getElementById('modalAge').innerText = cat.age;
            document.getElementById('modalColor').innerText = cat.color;
            document.getElementById('modalPersonality').innerText = cat.personality;
            document.getElementById('modalDesc').innerText = cat.description;
            
            // Imágenes
            const mainImg = document.getElementById('modalMainImg');
            mainImg.src = cat.images[0];
            
            const thumbsContainer = document.getElementById('modalThumbnails');
            thumbsContainer.innerHTML = '';
            cat.images.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.className = `thumb ${index === 0 ? 'active' : ''}`;
                thumb.onclick = () => {
                    mainImg.src = imgSrc;
                    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
                thumbsContainer.appendChild(thumb);
            });

            // Botón WhatsApp
            const message = `Hola PockeCats, estoy interesado en el gato ${cat.name} (ID: ${cat.id}) que vi en su catálogo. ¿Podrían darme más información?`;
            const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
            document.getElementById('whatsappBtn').onclick = () => window.open(waLink, '_blank');

            // Mostrar modal
            document.getElementById('catModal').style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
        }

        function closeModal() {
            document.getElementById('catModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Cerrar modal al hacer clic fuera del contenido
        window.onclick = function(event) {
            const modal = document.getElementById('catModal');
            if (event.target == modal) {
                closeModal();
            }
        }

        // Menú Móvil
        function toggleMenu() {
            const nav = document.getElementById('navLinks');
            nav.classList.toggle('active');
        }

        // Scroll Suave para enlaces internos
        function setupSmoothScroll() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Cerrar menú móvil si está abierto
                    document.getElementById('navLinks').classList.remove('active');
                });
            });
        }