# 📤 Despliegue en GitHub Pages - Guía Paso a Paso

## 🎯 Objetivo Final
Tu sitio profesional estará disponible en:
- `https://tu-usuario.github.io/nombre-repo` (repo normal)
- `https://tu-usuario.github.io` (si es repo `tu-usuario.github.io`)

## 📋 Requisitos Previos

1. Tener una cuenta en [GitHub](https://github.com)
2. Tener Git instalado
3. Este proyecto personalizado y funcional en tu máquina

## 🔧 Opción 1: Despliegue Rápido (Recomendado)

### Paso 1: Crea un repositorio vacío en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. En "Repository name" escribe: `profesional` (o el nombre que prefieras)
3. Describe: "Mi sitio profesional"
4. Selecciona "Public"
5. NO inicialices con README (ya lo tienes)
6. Haz clic en "Create repository"

### Paso 2: Sube tu código a GitHub

En la terminal, dentro de tu carpeta del proyecto:

```bash
# Inicializa Git (si no lo has hecho)
git init

# Agrega todos los archivos
git add .

# Crea el commit inicial
git commit -m "Inicial: Sitio profesional"

# Cambia la rama a 'main' (estándar en GitHub)
git branch -M main

# Agrega la URL remota (reemplaza TU-USUARIO y el nombre del repo)
git remote add origin https://github.com/TU-USUARIO/profesional.git

# Sube los archivos
git push -u origin main
```

### Paso 3: Activa GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En la barra lateral, haz clic en **Pages**
4. Bajo "Build and deployment":
   - Source: Selecciona "Deploy from a branch"
   - Branch: Selecciona "main" y "(root)"
5. Haz clic en "Save"

### Paso 4: Espera y verifica

- GitHub tardará 1-2 minutos en desplegar
- Ve a `https://github.com/TU-USUARIO/profesional/settings/pages`
- Verás un mensaje azul con la URL: `Your site is live at https://tu-usuario.github.io/profesional`

## 🔄 Opción 2: Usando Rama `gh-pages`

Si prefieres mantener `main` limpio:

```bash
# Crea una rama gh-pages
git checkout -b gh-pages
git push -u origin gh-pages

# Luego, en GitHub Settings > Pages:
# Selecciona la rama "gh-pages"
```

## 📝 Comandos Útiles para Futuras Actualizaciones

### Para hacer cambios y actualizar el sitio:

```bash
# 1. Haz tus cambios en los archivos
# (Edita index.html, styles.css, etc.)

# 2. Verifica los cambios
git status

# 3. Agrega los cambios
git add .

# 4. Crea un commit
git commit -m "Actualización: Agregué nuevo proyecto"

# 5. Sube los cambios
git push origin main
```

## 🚀 Solución de Problemas

### El sitio no aparece después de 5 minutos

1. Verifica que el repositorio es público (Settings → General)
2. Confirma que GitHub Pages está habilitado (Settings → Pages)
3. Intenta limpiar el cache del navegador (Ctrl+Shift+Del)
4. Accede directamente a la URL en una ventana privada

### Los estilos/imágenes no cargan

**Problema:** Si usaste un repo normal (no `usuario.github.io`), necesitas ajustar las rutas.

**Solución:** En `index.html`, agrega esta línea en el `<head>` después de `<title>`:

```html
<base href="/profesional/">
```

(Reemplaza `profesional` con el nombre de tu repositorio)

### Cambié los archivos pero no se ve reflejado

```bash
# Fuerza limpiar el cache local
git status
git add --all
git commit -m "Actualización"
git push

# Luego limpia cache del navegador (Ctrl+Shift+Delete)
```

## 🎨 Configuración Adicional

### Agregar un dominio personalizado

1. En Settings → Pages → Custom domain
2. Ingresa tu dominio (ej: `miportafolio.com`)
3. Actualiza los DNS records en tu proveedor de dominio

### Habilitar HTTPS

En Settings → Pages:
- Marca "Enforce HTTPS" (automático si usas `github.io`)

### Usar un tema personalizado

En `_config.yml`:

```yaml
theme: jekyll-theme-minimal  # u otro tema
# O deja vacío para sitios HTML puros:
# theme: null
```

## 📊 Ver estadísticas de tu sitio

Después de desplegar, en `https://github.com/tu-usuario/profesional`:

1. Ve a **Settings**
2. Ve a **Pages**
3. Verás estadísticas de visitantes en los últimos 14 días

## 🔐 Mejores prácticas

### Mantén el repositorio organizado:

```bash
# estructura recomendada
profesional/
├── index.html
├── styles.css
├── script.js
├── README.md
├── PERSONALIZATION.md
├── DEPLOYMENT.md
├── _config.yml
├── .gitignore
├── package.json
└── assets/
    ├── cv.pdf
    └── images/
```

### Usa commits descriptivos:

```bash
✓ git commit -m "Agregué sección de cursos"
✗ git commit -m "cambios"

✓ git commit -m "Actualicé colores del tema"
✗ git commit -m "actualización"
```

### Haz push regularmente:

```bash
# Después de cada sesión de trabajo
git add .
git commit -m "Cambios: [descripción breve]"
git push
```

## 🎯 Flujo de Trabajo Recomendado

1. **Desarrollo Local:**
   ```bash
   # Prueba en http://localhost:8000
   python -m http.server 8000
   ```

2. **Cambios pequeños:**
   ```bash
   git add .
   git commit -m "descripción"
   git push
   ```

3. **Cambios grandes:**
   ```bash
   git checkout -b feature/nueva-seccion
   # ... haz cambios ...
   git add .
   git commit -m "descripción"
   git push origin feature/nueva-seccion
   # Luego abre un Pull Request en GitHub (opcional)
   ```

## 📱 Verificar desde móvil

Tu sitio se ve bien desde cualquier dispositivo:

1. Accede a `https://tu-usuario.github.io/profesional` desde tu teléfono
2. Verifica que el menú hamburguesa funciona
3. Prueba que los formularios funcionan

## 🆘 URLs útiles

- Tu repositorio: `https://github.com/tu-usuario/profesional`
- Tu sitio: `https://tu-usuario.github.io/profesional`
- Settings > Pages: `https://github.com/tu-usuario/profesional/settings/pages`
- Estadísticas: `https://github.com/tu-usuario/profesional/settings/pages` (baja)

## 🎉 ¡Listo!

Tu sitio profesional ahora está:
- ✅ Desplegado en Internet
- ✅ Accesible desde cualquier dispositivo
- ✅ Bajo control de versiones con Git
- ✅ Fácil de actualizar

## 📚 Siguientes pasos

1. Personaliza el contenido según la guía `PERSONALIZATION.md`
2. Agrega Google Analytics para ver visitantes
3. Considera agregar un blog o secciones adicionales
4. Vincula desde redes sociales
5. Comparte con potenciales clientes o empleadores

---

¿Preguntas? Consulta [GitHub Pages Docs](https://docs.github.com/pages) o abre un issue en tu repositorio.
