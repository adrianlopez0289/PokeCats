/**
 * ==========================================
 * SECCIÓN DE CONFIGURACIÓN GLOBAL
 * Edite aquí los datos de contacto, redes sociales e información del director.
 * ==========================================
 */
const CONFIG = {
    // Información de contacto
    whatsappNumber: "17789226558", // Formato internacional sin + ni espacios
    email: "pokecats2020@gmail.com",
    phoneDisplay: "+1 7789226558",

    // Redes sociales (URLs completas)
    socialMedia: {
        facebook: "https://www.facebook.com/share/1GgmcrBeTC/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/pokecats_british_colombia?igsh=MWxmcTF4cjAxM2NhZw==",
        tiktok: "https://tiktok.com/@pocketcats"
    },

    // Información del director
    director: {
        name: "Luceny Lopez",
        role: "Criadora de British Shorthair",
        bio: "Más de 4 años de experiencia en genética felina y crianza responsable de British Shorthair.",
        photo: "assets/images/about/ceo.jpeg", // Reemplazar con foto real
        certificate: "assets/images/about/certificado.jpeg" // Enlace al PDF si existe
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
        name: "Poli",
        age: "3 meses",
        color: "Silver shaded",
        price: "$1.200.000 COP",
        status: "Disponible",
        personality: "Tranquila, observadora y muy mimosa.",
        description: "Poli es una hembra hermosa con un pelaje denso blanco y ojos azules profundos. Es la compañera ideal para apartamentos.",
        images: [
            "assets/images/catalog/poli1.jpeg",
            "assets/images/catalog/poli2.jpeg",
            "assets/images/catalog/poli3.jpeg",
            "assets/images/catalog/poli4.jpeg",
            "assets/images/catalog/poli5.jpeg"
            


        ]
    },
    {
        id: 103,
        name: "Growlithe",
        age: "3.5 meses",
        color: "Golden shaded",
        price: "$2.000.000 COP", 
        status: "Reservado",
        personality: "Enérgico y valiente.",
        description: "Un ejemplar espectacular con colores cálidos. Su pelaje brilla bajo la luz. Tiene un carácter tierno y muy leal.",
        images: [
            "assets/images/catalog/growlithe2.jpeg",
            "assets/images/catalog/growlithe3.jpeg",
            "assets/images/catalog/growlithe5.jpeg"

            
        ]
    },   
    {
        id: 105,
        name: "Arcanin",
        age: "8 meses",
        color: "Red Tabby",
        price: "$1.350.000 COP",
        status: "Reservado",
        personality: "Dulce y silencios.",
        description: "El color Red Tabby es muy llamativo por sus colores solares. Arcanine es un gato juguetón y amoroso que siempre te dará compañía.",
        images: [
            "assets/images/catalog/arcanin1.jpeg",
            "assets/images/home/hero2.jpeg",
            "assets/images/catalog/arcanin4.jpeg",
            "assets/images/catalog/arcanin5.jpeg"


        ]
    },    
    {
        id: 107,
        name: "Poochy",
        age: "3 meses",
        color: "Silver shaded",
        price: "$1.350.000 COP",
        status: "Disponible",
        personality: "Dulce y silenciosa.",
        description: "El color silver es un color muy elegante y premium. Poochy es una gata con personalidad imponente y cariñosa a la vez.",
        images: [
            "assets/images/catalog/poochy1.jpeg",
            "assets/images/catalog/poochy2.jpeg",
            "assets/images/catalog/poochy3.jpeg",
            "assets/images/catalog/poochy4.jpeg",
            "assets/images/catalog/poochy5.jpeg",
            "assets/images/catalog/poochy6.jpeg"           
                       
        ]
    },
    {
        id: 108,
        name: "Persian",
        age: "3 meses",
        color: "Silver Tabby",
        price: "$1.350.000 COP",
        status: "Disponible",
        personality: "Dulce y silencioso.",
        description: "El color Silver Tabby es muy llamativo por sus diferentes colores y su suavidad. Persian es un gato que ronronea apenas lo tocas.",
        images: [
            "assets/images/catalog/persian1.jpeg",
            "assets/images/catalog/persian2.jpeg",
            "assets/images/catalog/persian3.jpeg",
            "assets/images/catalog/persian4.jpeg",


        ]
    },
    {
        id: 109,
        name: "Meowth",
        age: "3 meses",
        color: "Silver Tabby",
        price: "$1.350.000 COP",
        status: "Disponible",
        personality: "Dulce y silenciosa.",
        description: "El color Silver Tabby es muy buscado por su elegancia. Meowth es una gata muy tierna y cariñosa.",
        images: [
            "assets/images/catalog/meowth1.jpeg",
            "assets/images/catalog/meowth2.jpeg",
            "assets/images/catalog/meowth3.jpeg",
            "assets/images/catalog/meowth4.jpeg",
            "assets/images/catalog/meowth5.jpeg",  
            "assets/images/catalog/meowth6.jpeg"      
        ]
    },
    
    

];

/**
 * ==========================================
 * DATOS DE PROGENITORES (FAMILIA)
 * ==========================================
 */
const parentsData = [
    {
                name: "Growly ",
                role: "Padre Oficial & Semental Principal.",
                shortDesc: "4 años. Color: Black silver mackerel tabby. Temperamento dócil.",
                fullDescription: "Growly es nuestro semental principal y orgullo del criadero. Nacido en Colombia, cuenta con pedigree. Posee una estructura ósea robusta y temperamento extremadamente noble, característica de la raza; transmitiendo su excelente calidad de pelaje corto, denso, ojos rodandos y verdes intensos.",
                traits: "Independiente y cariñoso.",
                images: [
                    "assets/images/family/growly1.jpeg",
                    "assets/images/family/growly2.jpeg",
                    "assets/images/family/growly3.jpeg",
                    "assets/images/family/growly4.jpeg",
                    "assets/images/family/growly5.jpeg",
                    "assets/images/family/growly6.jpeg",                    
                ]
            },
            {
                name: "Fátima",
                role: "Madre Oficial & Línea Importada",
                shortDesc: "2.5 años. Color: Goden Shaded. Temperamento dócil.",
                fullDescription: "Fátima representa la elegancia en su máxima expresión. Nacida en Ucrania, posee el característico color Golden Shaded con ojos redondos color verde profundo, pelaje corto y denso. Su temperamento es extremadamente dócil y maternal, cualidades que transmite fielmente a sus cachorros. Es una madre ejemplar que cuida con dedicación cada camada.",
                traits: "Independiente y Observadora.",
                images: [
                    "assets/images/family/fatima1.jpeg",
                    "assets/images/family/fatima2.jpeg",
                    "assets/images/family/fatima3.jpeg",
                    "assets/images/family/fatima4.jpeg",
                    "assets/images/family/fatima5.jpeg",
                    "assets/images/family/fatima6.jpeg",
                    "assets/images/family/fatima7.jpeg"

                ]
            },
            {
                name: "Tsarina",
                role: "Madre Oficial & Línea Nacional",
                shortDesc: "2 años. Color: silver shaded torbie. Temperamento dócil.",
                fullDescription: "Tsarina representa la ternura y belleza de Colombia. Nacida en Colombia, posee el característico color Black golden shaded torbie con ojos redondos cobrizos profundos, pelaje corto y denso. Su temperamento es extremadamente dócil y maternal, cualidades que transmite fielmente a sus cachorros. Es una madre ejemplar que cuida con dedicación cada camada.",
                traits: "Observadora y Curiosa.",
                images: [
                    "assets/images/family/tsarina1.jpeg",
                    "assets/images/family/tsarina2.jpeg",
                    "assets/images/family/tsarina3.jpeg",
                    "assets/images/family/tsarina4.jpeg",
                    "assets/images/family/tsarina5.jpeg"
                ]
            },
              {
                name: "Nidorina",
                role: "Madre Oficial & Línea Importada",
                shortDesc: "3 años. Color: Silver shaded. Temperamento dócil.",
                fullDescription: "Nidorina es la definición perfecta de la nobleza felina, majestuosa como un destello de plata y cálida para el hogar. A sus tres años, esta hermosa madre posee una presencia imponente y robusta, con un cuerpo fuerte que refleja su instinto protector y su gran corazón.",
                traits: "Independiente, Observadora y Curiosa.",
                images: [
                    "assets/images/family/nidorina3.jpeg",
                    "assets/images/family/nidorina2.jpeg",
                    "assets/images/family/nidorina1.jpeg",
                    "assets/images/family/nidorina4.jpeg",
                    "assets/images/family/nidorina5.jpeg",
                    "assets/images/home/hero.jpg.jpeg"

                ]
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
                <p style=" paint-order: stroke fill; font-weight: bold; margin-bottom: 10px;">${CONFIG.director.role}</p>
                <p style="font-size: 0.9rem; color: #666; margin-bottom: 20px;">${CONFIG.director.bio}</p>
                <button class="btn btn-outline" onclick="openCertificateModal()" style="width: 100%; margin-bottom: 20px;">
                    📜 Ver Certificado de Criador
                </button>
                <div class="social-icons">
                    <a href="${CONFIG.socialMedia.facebook}" target="_blank" class="social-link" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="${CONFIG.socialMedia.instagram}" target="_blank" class="social-link" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="${CONFIG.socialMedia.tiktok}" target="_blank" class="social-link" title="TikTok"><i class="fab fa-tiktok"></i></a>
                    <a href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank" class="social-link" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
            `;
            document.getElementById('directorCard').innerHTML = directorHTML;

            // Footer Info
            const footerHTML = `
                <p> <i class="fab fa-whatsapp"></i> ${CONFIG.phoneDisplay} | <i class="fas fa-envelope"></i> ${CONFIG.email}</p>
            `;
            document.getElementById('footerContactInfo').innerHTML = footerHTML;
        }

// Renderizar Progenitores
function renderParents() {
            const container = document.getElementById('parentsGrid');
            let html = '';
            parentsData.forEach((parent, index) => {
                html += `
                    <div class="parent-card" onclick="openParentModal(${index})">
                        <img src="${parent.images[0]}" alt="${parent.name}" class="parent-img">
                        <div class="parent-info">
                            <h3>${parent.name}</h3>
                            <p>${parent.shortDesc}</p>
                            <span class="view-more-hint">Ver historia completa →</span>
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
                const statusColor = cat.status === 'Disponible' ? '#FFD700' : '#ccc';
                
                html += `
                    <div class="cat-card" onclick="openCatModal(${cat.id})">
                        <span class="cat-status" style="background-color: ${statusColor}">${cat.status}</span>
                        <img src="${cat.images[0]}" alt="${cat.name}" class="cat-thumb">
                        <div class="cat-details">
                            <div class="cat-name">${cat.name}</div>
                            <div class="cat-meta">
                                <span>${cat.age}</span>
                                <span style="font-weight: bold; font-style: italic;">${cat.color}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            container.innerHTML = html;
        }

    // --- Modal de Gato (Catálogo) ---
        function openCatModal(id) {
            const cat = catsCatalog.find(c => c.id === id);
            if (!cat) return;

            document.getElementById('modalName').innerText = cat.name;
            document.getElementById('modalAge').innerText = cat.age;
            document.getElementById('modalColor').innerText = cat.color;
            document.getElementById('modalPersonality').innerText = cat.personality;
            document.getElementById('modalDesc').innerText = cat.description;
            
            const mainImg = document.getElementById('modalMainImg');
            mainImg.src = cat.images[0];
            
            const thumbsContainer = document.getElementById('modalThumbnails');
            thumbsContainer.innerHTML = '';
            cat.images.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.className = `thumb ${index === 0 ? 'active' : ''}`;
                thumb.onclick = (e) => {
                    e.stopPropagation();
                    mainImg.src = imgSrc;
                    document.querySelectorAll('#modalThumbnails .thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
                thumbsContainer.appendChild(thumb);
            });

            const message = `Hola PockeCats, estoy interesado en el gato ${cat.name} (ID: ${cat.id}) que vi en su catálogo. ¿Podrían darme más información?`;
            const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
            document.getElementById('whatsappBtn').onclick = () => window.open(waLink, '_blank');

            document.getElementById('catModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

       // --- Modal de Progenitor (Familia) ---
        function openParentModal(index) {
            const parent = parentsData[index];
            if (!parent) return;

            document.getElementById('parentName').innerText = parent.name;
            document.getElementById('parentRole').innerText = parent.role;
            document.getElementById('parentFullDesc').innerText = parent.fullDescription;
            document.getElementById('parentTraits').innerText = parent.traits;
            
            const mainImg = document.getElementById('parentMainImg');
            mainImg.src = parent.images[0];
            
            const thumbsContainer = document.getElementById('parentThumbnails');
            thumbsContainer.innerHTML = '';
            parent.images.forEach((imgSrc, i) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.className = `thumb ${i === 0 ? 'active' : ''}`;
                thumb.onclick = (e) => {
                    e.stopPropagation();
                    mainImg.src = imgSrc;
                    document.querySelectorAll('#parentThumbnails .thumb').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
                thumbsContainer.appendChild(thumb);
            });

            document.getElementById('parentModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

         // --- Modal de Certificado (Director) ---
        function openCertificateModal() {
            const certUrl = CONFIG.director.certificate;
            const isPdf = certUrl.toLowerCase().endsWith('.pdf');
            
            const container = document.getElementById('certificateContent');
            
            if (isPdf) {
                // Si es PDF, usar iframe
                container.innerHTML = `<iframe src="${certUrl}" title="Certificado de Criador"></iframe>`;
            } else {
                // Si es imagen, usar img (más compatible con móviles)
                container.innerHTML = `<img src="${certUrl}" alt="Certificado de Criador Registrado">`;
            }
            
            document.getElementById('certificateModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
       

 // Función genérica para cerrar cualquier modal
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Cerrar modal al hacer clic fuera del contenido
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
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

/* ==========================================
TESTIMONIOS CLIENTES
========================================== */

const testimonials = [

    {
        id: 1,

        name: "Mario González",

        image: "assets/images/testimonials/testimonio1.jpeg",

        comment:
            "Adoptamos a Luna hace seis meses y ha sido una experiencia maravillosa. Es cariñosa, tranquila y se adaptó perfectamente a nuestro hogar."
    },

    {
        id: 2,

        name: "Carlos Ramírez",

        image: "assets/images/testimonials/testimonio2.jpeg",

        comment:
            "Oliver llegó sano, vacunado y con un excelente temperamento. El proceso fue muy profesional."
    },

    {
        id: 3,

        name: "Andrea Torres",

        image: "assets/images/testimonials/testimonio3.jpeg",

        comment:
            "Nuestro British Shorthair es hermoso y muy sociable. Estamos completamente felices con la adopción."
    },

    {
        id: 4,

        name: "Laura Pérez",

        image: "assets/images/testimonials/testimonio4.jpeg",

        comment:
            "Excelente acompañamiento antes y después de la entrega. Recomiendo totalmente a PockeCats."
    }
    

];

/* RENDER */

function renderTestimonials() {

    const container =
        document.getElementById("testimonialsGrid");

    if (!container) return;

    let html = "";

    testimonials.forEach(item => {

        html += `

            <div class="testimonial-card"
                 onclick="openTestimonial(${item.id})">

                <img src="${item.image}"
                     alt="${item.name}">

                <div class="testimonial-preview">

                    <h4>${item.name}</h4>

                    <p>
                    ${item.comment.substring(0, 80)}...
                    </p>

                </div>

            </div>

        `;
    });

    container.innerHTML = html;
}

/* MODAL */

function openTestimonial(id) {

    const testimonial =
        testimonials.find(t => t.id === id);

    document.getElementById(
        "testimonialModalImg"
    ).src = testimonial.image;

    document.getElementById(
        "testimonialModalName"
    ).textContent = testimonial.name;

    document.getElementById(
        "testimonialModalText"
    ).textContent = testimonial.comment;

    document.getElementById(
        "testimonialModal"
    ).style.display = "flex";
}

function closeTestimonial() {

    document.getElementById(
        "testimonialModal"
    ).style.display = "none";
}

/* EVENTOS */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderTestimonials();

        const closeBtn =
            document.querySelector(
                ".testimonial-close"
            );

        if (closeBtn) {

            closeBtn.addEventListener(
                "click",
                closeTestimonial
            );

        }

        const modal =
            document.getElementById(
                "testimonialModal"
            );

        if (modal) {

            modal.addEventListener(
                "click",
                function (e) {

                    if (e.target === modal) {

                        closeTestimonial();

                    }

                }
            );

        }

    }
);