# Mi Sitio Profesional

Un sitio web profesional moderno y responsivo, diseñado para mostrar portafolio, cursos, servicios de desarrollo y más. Optimizado para desplegar en GitHub Pages.

## 📋 Características

- ✅ **Portafolio de Proyectos**: Presenta tus mejores trabajos con descripción, tecnologías y enlaces
- ✅ **Cursos y Talleres**: Sección dedicada a mostrar tus formaciones con detalles de temas
- ✅ **Servicios de Desarrollo**: Presenta los servicios que ofreces con iconos y descripciones
- ✅ **Curriculum**: Experiencia laboral y educación en formato timeline
- ✅ **Formulario de Contacto**: Formulario interactivo para que te contacten
- ✅ **Diseño Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y desktop
- ✅ **Interfaz Moderna**: Colores profesionales, animaciones suaves y excelente UX
- ✅ **Sin Dependencias Externas**: Solo HTML, CSS y JavaScript vanilla

## 🚀 Inicio Rápido

### Requisitos previos
- Git
- Un navegador web moderno
- Una cuenta en GitHub

### Instalación local

1. **Clona el repositorio:**
```bash
git clone https://github.com/tu-usuario/profesional.git
cd profesional
```

2. **Abre el archivo en tu navegador:**
```bash
# En Linux/Mac
open index.html

# O simplemente arrastra el archivo al navegador
```

3. **O usa un servidor local (recomendado):**
```bash
# Con Python 3
python -m http.server 8000

# Con Python 2
python -m SimpleHTTPServer 8000

# Con Node.js (si tienes http-server instalado)
npx http-server
```

Luego accede a `http://localhost:8000`

## 📁 Estructura del Proyecto

```
profesional/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── README.md           # Este archivo
├── .gitignore          # Archivos a ignorar en Git
└── assets/             # Carpeta para recursos (imágenes, documentos)
    ├── cv.pdf          # Tu CV en PDF
    └── images/         # Imágenes del portafolio
```

## 🔧 Personalización

### 1. Edita tu información

En `index.html`, busca y reemplaza:

```html
<!-- Información personal -->
<h1>Bienvenido</h1>
<p>Desarrollador profesional especializado en soluciones web innovadoras</p>

<!-- Email y teléfono -->
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="tel:+123456789">+1 (234) 567-89</a>
```

### 2. Agrega tus proyectos

Duplica una tarjeta de proyecto y actualiza:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-globe"></i>
    </div>
    <h3>Tu Proyecto</h3>
    <p>Descripción de tu proyecto</p>
    <div class="project-tags">
        <span class="tag">Tecnología 1</span>
        <span class="tag">Tecnología 2</span>
    </div>
    <a href="https://tu-proyecto.com" class="project-link">Ver Proyecto →</a>
</div>
```

### 3. Personaliza los colores

En `styles.css`, modifica las variables de color:

```css
:root {
    --primary-color: #2563eb;      /* Azul principal */
    --secondary-color: #1e40af;    /* Azul oscuro */
    --accent-color: #f59e0b;       /* Naranja/dorado */
    --text-color: #1f2937;         /* Texto */
    --text-light: #6b7280;         /* Texto claro */
    --bg-light: #f9fafb;           /* Fondo claro */
}
```

### 4. Agrega tu CV

Coloca tu archivo `cv.pdf` en la carpeta `assets/` y actualiza el enlace en `script.js`:

```javascript
const cvButton = document.querySelector('.cv-button');
if (cvButton) {
    cvButton.addEventListener('click', () => {
        window.location.href = 'assets/cv.pdf';
    });
}
```

## 📤 Despliegue en GitHub Pages

### Opción 1: Usando la rama `main` (recomendado)

1. **Crea un repositorio en GitHub:**
   - Nombre del repositorio: `tu-usuario.github.io` (para página personal)
   - O cualquier nombre para un proyecto

2. **Sube los archivos:**

```bash
git init
git add .
git commit -m "Inicial: Sitio profesional"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

3. **Configura GitHub Pages:**
   - Ve a Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Click "Save"

4. **Tu sitio estará disponible en:**
   - Si el repo es `tu-usuario.github.io`: `https://tu-usuario.github.io`
   - Si es otro repo: `https://tu-usuario.github.io/tu-repo`

### Opción 2: Usando rama `gh-pages`

```bash
git checkout -b gh-pages
git push -u origin gh-pages
```

Luego en GitHub Pages, selecciona la rama `gh-pages`.

## 🎨 Colores y Tema

El sitio usa las siguientes características de diseño:

- **Colores Primarios**: Azules profesionales (#2563eb)
- **Acentos**: Dorado/Naranja (#f59e0b)
- **Tipografía**: System fonts modernos (sans-serif)
- **Espaciado**: Diseño generoso y limpio
- **Sombras**: Sutiles para profundidad
- **Transiciones**: Suaves y animadas

## 📱 Responsividad

El sitio se adapta automáticamente a:
- **Desktop**: 1200px+ (layout de dos columnas)
- **Tablet**: 768px - 1199px (layout adaptado)
- **Móvil**: Menos de 768px (layout de una columna)

## 🔗 Iconos

Se utilizan iconos de [Font Awesome 6](https://fontawesome.com/). Algunos iconos disponibles:

- `fa-globe` - Globo/Web
- `fa-shopping-cart` - Carrito de compras
- `fa-chart-line` - Gráfico
- `fa-mobile-alt` - Móvil
- `fa-robot` - Robot
- `fa-cloud` - Nube
- `fa-briefcase` - Maletín
- `fa-graduation-cap` - Gorro de graduación
- `fa-envelope` - Correo
- `fa-phone` - Teléfono
- `fa-map-marker-alt` - Ubicación
- `fa-linkedin` - LinkedIn
- `fa-github` - GitHub

Ver más en [Font Awesome](https://fontawesome.com/icons).

## 🐛 Troubleshooting

### El sitio no se ve bien en móvil
- Asegúrate que el meta viewport está en el HTML (ya está incluido)
- Borra el cache del navegador (Ctrl+Shift+Del)

### Los estilos no cargan
- Verifica que `styles.css` está en el mismo directorio que `index.html`
- Recarga la página (Ctrl+F5)

### El formulario de contacto no funciona
- Actualmente muestra una alerta. Para envíos reales, necesitas un backend
- Considera usar servicios como [Formspree](https://formspree.io/) o [EmailJS](https://www.emailjs.com/)

## 📧 Integración de Formulario de Contacto

Para que el formulario envíe emails realmente, integra uno de estos servicios:

### Con Formspree:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    await fetch('https://formspree.io/f/TU_FORM_ID', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
    });
    
    alert('¡Mensaje enviado con éxito!');
    contactForm.reset();
});
```

### Con EmailJS:

```javascript
emailjs.init('TU_PUBLIC_KEY');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('service_id', 'template_id', contactForm)
        .then(() => alert('¡Mensaje enviado!'));
});
```

## 📊 Agregar Analytics

Agrega Google Analytics al final de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📝 SEO y Meta Tags

El sitio ya incluye meta tags básicos. Para mejorar SEO:

1. Edita el título:
```html
<title>Tu Nombre - Desarrollador Web Profesional</title>
```

2. Edita la descripción:
```html
<meta name="description" content="Portafolio de [Tu Nombre], desarrollador especializado en...">
```

3. Agrega más meta tags:
```html
<meta name="keywords" content="desarrollador, web, portfolio, javascript, react">
<meta name="author" content="Tu Nombre">
<meta property="og:title" content="Mi Portafolio">
<meta property="og:image" content="https://tu-url.com/og-image.png">
```

## 📄 Licencia

Este proyecto es de código abierto. Úsalo libremente para tu sitio profesional.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de hacer fork y enviar pull requests.

## 📞 Soporte

Si tienes preguntas o problemas:
1. Revisa la sección de Troubleshooting
2. Abre un issue en GitHub
3. Contacta directamente

---

Hecho con ❤️ para profesionales del desarrollo web.
