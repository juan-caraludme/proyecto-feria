# Feria Cultural: Software del Río de la Plata

Aplicación web hecha solo con **HTML, CSS y JavaScript**.
El visitante escanea el QR, elige un país, lee la información de la app y responde las preguntas.

| País | Aplicación | Carpeta |
|------|------------|---------|
| 🇦🇷 Argentina | Mercado Libre | `argentina/` |
| 🇺🇾 Uruguay | PedidosYa | `uruguay/` |

## Estructura

```
index.html          → página principal (elegir país)
qr.html             → página para imprimir el QR
css/estilos.css     → estilos compartidos por todas las páginas
js/main.js          → lógica de la página principal
js/qr.js            → genera el QR
img/                → imágenes (logos, capturas)
argentina/info.html, argentina/preguntas.html
uruguay/info.html,   uruguay/preguntas.html
```

## Cómo agregar las páginas de los alumnos

1. Reemplazar `info.html` y `preguntas.html` dentro de la carpeta del país.
2. Mantener los nombres de archivo exactamente iguales.
3. Revisar las rutas: como están dentro de una carpeta, usan `../`
   - Estilos: `<link rel="stylesheet" href="../css/estilos.css">`
   - Volver al inicio: `<a href="../index.html">`
   - Imágenes: `../img/nombre.png`
4. Clases disponibles en `estilos.css`: `contenedor`, `caja`, `boton`, `boton-argentina`, `boton-uruguay`, `boton-volver`.
5. El nombre del visitante se lee con `localStorage.getItem("nombre")`.

## Publicar en GitHub Pages

1. Crear un repositorio **público** en GitHub (por ejemplo `feria-cultural`).
2. Subir todo el contenido de esta carpeta (`index.html` tiene que quedar en la raíz).
3. Ir a **Settings → Pages → Source**, elegir la rama `main` y la carpeta `/ (root)` y guardar.
4. Esperar 1 o 2 minutos. La dirección será `https://USUARIO.github.io/feria-cultural/`.
5. Copiar esa dirección en `js/qr.js` (constante `URL_SITIO`) y volver a subir el archivo.
6. Abrir `https://USUARIO.github.io/feria-cultural/qr.html` e imprimir el QR.

## Probar
- En la compu: abrir `index.html` con doble clic.
- Vista celular: en el navegador, F12 → ícono de celular.
- Antes de la feria: escanear el QR impreso con datos móviles (no WiFi) y recorrer todo.
