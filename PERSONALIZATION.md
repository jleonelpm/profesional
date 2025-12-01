# 🎯 Guía Rápida de Personalización

## ⚡ Los 5 pasos para personalizar tu sitio

### 1. Edita tu información personal

Abre `index.html` y busca estos elementos:

```html
<!-- En la sección Hero (línea ~50) -->
<h1>Bienvenido</h1>
<p>Desarrollador profesional especializado en soluciones web innovadoras</p>

<!-- En Contacto (línea ~420) -->
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="tel:+123456789">+1 (234) 567-89</a>

<!-- En el Footer (línea ~450) -->
<p>&copy; 2024 Mi Sitio Profesional. Todos los derechos reservados.</p>
```

**Reemplaza con tus datos:**
- Tu nombre/título
- Tu email
- Tu teléfono
- Tu ubicación
- Tus redes sociales

### 2. Personaliza el logo y nombre

En `index.html`, línea 35:

```html
<div class="logo">Mi Portafolio</div>
```

Cámbialo por:

```html
<div class="logo">Tu Nombre</div>
```

### 3. Agrega tus proyectos

En la sección de Portafolio, duplica un proyecto:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-globe"></i>  <!-- Cambia el icono -->
    </div>
    <h3>Nombre del Proyecto</h3>
    <p>Descripción breve del proyecto</p>
    <div class="project-tags">
        <span class="tag">Tecnología 1</span>
        <span class="tag">Tecnología 2</span>
    </div>
    <a href="https://tu-proyecto.com" class="project-link">Ver Proyecto →</a>
</div>
```

**Iconos populares de Font Awesome:**
- `fa-globe` - Sitio web
- `fa-github` - Código
- `fa-shopping-cart` - E-commerce
- `fa-chart-line` - Analytics
- `fa-mobile-alt` - Aplicación móvil
- `fa-robot` - IA/Bot
- `fa-cloud` - Cloud
- `fa-code` - Código general

Ver todos en: https://fontawesome.com/icons

### 4. Cambiar colores del sitio

En `styles.css`, línea 6-15, edita estas variables:

```css
:root {
    --primary-color: #2563eb;      /* Azul - botones, enlaces */
    --secondary-color: #1e40af;    /* Azul oscuro - hover */
    --accent-color: #f59e0b;       /* Naranja - detalles */
    --text-color: #1f2937;         /* Texto oscuro */
    --text-light: #6b7280;         /* Texto gris */
    --bg-light: #f9fafb;           /* Fondo claro */
    --bg-white: #ffffff;           /* Blanco */
    --border-color: #e5e7eb;       /* Bordes */
}
```

**Paletas de color recomendadas:**

Profesional azul:
```css
--primary-color: #0066cc;
--secondary-color: #0052a3;
--accent-color: #ff9900;
```

Moderno púrpura:
```css
--primary-color: #7c3aed;
--secondary-color: #6d28d9;
--accent-color: #06b6d4;
```

Verdoso:
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent-color: #f59e0b;
```

### 5. Personaliza el formulario de contacto

En `index.html`, línea ~425, edita el formulario:

```html
<form id="contactForm">
    <div class="form-group">
        <input type="text" placeholder="Tu Nombre" required>
    </div>
    <div class="form-group">
        <input type="email" placeholder="Tu Email" required>
    </div>
    <!-- ... más campos ... -->
</form>
```

### 6. Vincula tus redes sociales

En la sección de Contacto, línea ~440:

```html
<div class="social-icons">
    <a href="https://linkedin.com/in/tu-usuario" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
    <a href="https://github.com/tu-usuario" title="GitHub"><i class="fab fa-github"></i></a>
    <a href="https://twitter.com/tu-usuario" title="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="https://facebook.com/tu-usuario" title="Facebook"><i class="fab fa-facebook"></i></a>
</div>
```

### 7. Agrega tu CV

1. Crea una carpeta `assets/` en la raíz del proyecto
2. Coloca tu CV en `assets/cv.pdf`
3. En `script.js`, busca la función de descarga y reemplaza:

```javascript
const cvButton = document.querySelector('.cv-button');
if (cvButton) {
    cvButton.addEventListener('click', () => {
        window.location.href = 'assets/cv.pdf';
    });
}
```

### 8. Edita cursos y servicios

**Cursos (línea ~150):**
- Duplica un `course-card`
- Cambia el icono, título, descripción
- Edita los temas (`course-topics`)

**Servicios (línea ~250):**
- Duplica un `service-card`
- Cambia el icono y descripción

## 📝 Ejemplos de cambios comunes

### Cambiar título de la página

En `index.html`, línea 8:
```html
<title>Mi Sitio Profesional</title>
```

A:
```html
<title>Juan Pérez - Desarrollador Web</title>
```

### Cambiar nombre de la empresa en experiencia

En `index.html`, busca:
```html
<p class="company">Tech Company Inc. | 2021 - Presente</p>
```

Reemplaza con tu empresa.

### Agregar más proyectos

Duplica un bloque `project-card` completo dentro de `projects-grid`.

### Cambiar la foto de perfil

Agrega en el hero:
```html
<div class="hero-image">
    <img src="assets/profile.jpg" alt="Tu Foto" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
</div>
```

## 🚀 Próximos pasos

1. **Haz cambios locales** y prueba en tu navegador
2. **Inicializa un repositorio Git:**
```bash
cd profesional
git init
git add .
git commit -m "Inicial: Sitio profesional personalizado"
```

3. **Crea un repositorio en GitHub** y sube:
```bash
git remote add origin https://github.com/tu-usuario/tu-repo.git
git branch -M main
git push -u origin main
```

4. **Activa GitHub Pages** en Settings → Pages

## 💡 Tips y trucos

- **Favicon:** Agrega un favicon en `<head>`:
```html
<link rel="icon" href="assets/favicon.ico" type="image/x-icon">
```

- **Google Fonts:** Agrega fuentes personalizadas:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">
```

- **Modo oscuro:** Agrega en `styles.css`:
```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1f2937;
        color: #f3f4f6;
    }
}
```

## ⚠️ Errores comunes

| Error | Solución |
|-------|----------|
| Los estilos no cargan | Verifica que `styles.css` está en el mismo directorio que `index.html` |
| Los iconos no se ven | Verifica que Font Awesome CDN está en el `<head>` |
| El menú móvil no funciona | Verifica que `script.js` está al final del `<body>` |
| GitHub Pages no actualiza | Limpia el cache (Ctrl+Shift+Del) o espera 5 minutos |

## 📞 Necesitas más ayuda?

- Revisa el archivo `README.md` para documentación completa
- Consulta la [documentación oficial de GitHub Pages](https://docs.github.com/es/pages)
- Visita [Font Awesome](https://fontawesome.com/) para más iconos
- Inspecciona elementos en el navegador (F12) para entender la estructura

¡Tu sitio profesional está listo! 🎉
