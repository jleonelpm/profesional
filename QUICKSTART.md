# 🚀 INICIO RÁPIDO

Bienvenido a tu sitio profesional. Aquí encontrarás los pasos esenciales para empezar.

## 📂 Lo que tienes:

```
profesional/
├── index.html              ← ARCHIVO PRINCIPAL (abre en navegador)
├── styles.css              ← Estilos CSS
├── script.js               ← Funcionalidad JavaScript
├── README.md               ← Documentación completa
├── PERSONALIZATION.md      ← Cómo personalizar
├── DEPLOYMENT.md           ← Cómo subir a GitHub Pages
├── package.json            ← Metadata del proyecto
├── _config.yml             ← Config de Jekyll
└── .gitignore              ← Archivos a ignorar
```

## ⚡ 3 pasos para ver tu sitio:

### 1️⃣ Ver localmente (Recomendado)

**Con Python:**
```bash
cd profesional
python -m http.server 8000
```

Luego abre: http://localhost:8000

**O simplemente:**
Haz doble clic en `index.html` desde el explorador de archivos

### 2️⃣ Personalizar (30 minutos)

Abre `index.html` con tu editor favorito y cambia:

- Línea 57: Tu nombre/título en el hero
- Línea 165-210: Tus proyectos (reemplaza ejemplos)
- Línea 246: Tus servicios
- Línea 420: Tu email y teléfono

Ver detalles en `PERSONALIZATION.md`

### 3️⃣ Subir a GitHub Pages (15 minutos)

```bash
cd profesional
git init
git add .
git commit -m "Mi sitio profesional"
git remote add origin https://github.com/TU-USUARIO/profesional.git
git push -u origin main
```

Luego activa Pages en GitHub Settings → Pages

Ver detalles en `DEPLOYMENT.md`

## 🎨 Características Principales

✅ **5 Secciones:**
- Portafolio de 6 proyectos
- Cursos y Talleres (4 cursos)
- Servicios de Desarrollo (6 servicios)
- Curriculum con timeline
- Formulario de Contacto

✅ **Diseño:**
- Responsive (móvil, tablet, desktop)
- Colores profesionales personalizables
- Animaciones suaves
- Navegación sticky
- Menú hamburguesa en móvil

✅ **Tecnologías:**
- HTML5 puro
- CSS3 moderno (sin framework)
- JavaScript vanilla (sin dependencias)
- Font Awesome para iconos
- Compatible con GitHub Pages

## 📝 Personalización Rápida

### Cambiar colores

`styles.css` línea 6-15:

```css
:root {
    --primary-color: #2563eb;    ← Azul principal (cambia esto)
    --accent-color: #f59e0b;     ← Naranja (cambia esto)
}
```

### Cambiar nombre del sitio

`index.html` línea 8:
```html
<title>Juan Pérez - Desarrollador Web</title>
```

`index.html` línea 35:
```html
<div class="logo">Tu Nombre</div>
```

### Agregar tu información

`index.html` línea 420-430:
```html
<a href="mailto:tu@email.com">tu@email.com</a>
<a href="tel:+123456789">Tu Teléfono</a>
```

Busca tu ubicación y redes sociales más abajo...

## 📞 Soporte

| Necesidad | Archivo |
|-----------|---------|
| Guía detallada | `README.md` |
| Cómo personalizar | `PERSONALIZATION.md` |
| Cómo desplegar | `DEPLOYMENT.md` |
| Este archivo | `QUICKSTART.md` |

## 🎯 Siguientes pasos

1. ✅ Abre `index.html` en navegador
2. ✅ Personaliza según `PERSONALIZATION.md`
3. ✅ Prueba en dispositivos
4. ✅ Sube a GitHub Pages según `DEPLOYMENT.md`
5. ✅ Comparte tu portafolio

## 💡 Tips

- **Prueba local:** Usa `python -m http.server 8000`
- **Cambios en tiempo real:** Recarga la página después de editar
- **Iconos:** Font Awesome incluido (ver fontawesome.com)
- **Móvil:** El sitio es 100% responsive
- **SEO:** Edita meta tags en `<head>` para mejorar posicionamiento

## 🔗 Enlaces útiles

- GitHub Pages: https://pages.github.com
- Font Awesome: https://fontawesome.com
- Validador HTML: https://validator.w3.org
- ColorHunt: https://colorhunt.co (paletas de color)

## ✨ Ejemplo de uso

Proyecto profesional típico:

1. **Descargas el sitio** desde el repositorio
2. **Lo personalizas** con tus datos en 30 minutos
3. **Lo subes a GitHub** y lo compartes
4. **Actualizas** tus proyectos regularmente

¡Así de simple! 🎉

---

¿Listo? Abre `index.html` en tu navegador y comienza. 

Para más detalles, consulta los archivos de documentación incluidos.
