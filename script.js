// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const message = `
            Nombre: ${formData.get('nombre')}
            Email: ${formData.get('email')}
            Asunto: ${formData.get('asunto')}
            Mensaje: ${formData.get('mensaje')}
        `;
        
        // Mostrar alerta de confirmación
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        
        // Limpiar el formulario
        contactForm.reset();
    });
}

// Scroll suave mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de elementos al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .course-card, .service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Contador de estadísticas (opcional, comentado)
/*
function animateCounter(element, target) {
    let count = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(count);
        }
    }, 30);
}
*/

// Cambiar color de la navegación al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
    }
});

// Mostrar botones de cursos con interactividad
document.querySelectorAll('.course-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('¡Pronto podrás inscribirte en este curso!');
    });
});

// Descargar CV
const cvButton = document.querySelector('.cv-button');
if (cvButton) {
    cvButton.addEventListener('click', () => {
        alert('El archivo CV estará disponible pronto. Por favor, contacta para más información.');
        // Aquí puedes agregar la descarga real de un archivo CV
    });
}

console.log('Sitio profesional cargado correctamente');
