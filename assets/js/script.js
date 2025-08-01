// Menú móvil
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
let navLines = document.querySelectorAll('.hamburger div');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
        
        // Animación de hamburguesa a X
        if (navLinks.classList.contains('active')) {
            navLines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            navLines[1].style.opacity = '0';
            navLines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            navLines[0].style.transform = 'rotate(0) translate(0)';
            navLines[1].style.opacity = '1';
            navLines[2].style.transform = 'rotate(0) translate(0)';
        }
    });
}

// Cerrar menú al hacer clic en un enlace
if (navLinks) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            
            // Restaurar icono hamburguesa
            navLines[0].style.transform = 'rotate(0) translate(0)';
            navLines[1].style.opacity = '1';
            navLines[2].style.transform = 'rotate(0) translate(0)';
        });
    });
}

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Mostrar mensaje de confirmación
        const nombre = document.getElementById('nombre').value;
        const especialidadSelect = document.getElementById('especialidad');
        const especialidad = especialidadSelect.options[especialidadSelect.selectedIndex].text;
        
        alert(¡Gracias ${nombre} por tu mensaje sobre ${especialidad}! Nos pondremos en contacto contigo pronto.);
        
        // Resetear formulario
        contactForm.reset();
    });
}

// Smooth scrolling mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Modal para catálogos
const modal = document.getElementById('catalogoModal');
if (modal) {
    const closeModal = document.querySelector('.close-modal');
    
    // Abrir modal
    document.querySelectorAll('[id*="btn-ver-"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });
    
    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Cerrar al hacer clic fuera del modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}