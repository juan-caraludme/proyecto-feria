# Feria Cultural: Software del Río de la Plata

Aplicación web hecha solo con **HTML, CSS y JavaScript**.
El visitante escanea el QR, elige un país, lee la información de la app y responde las preguntas.

| País | Aplicación | Carpeta |
|------|------------|---------|
| 🇦🇷 Argentina | Mercado Libre | `argentina/` |
| 🇺🇾 Uruguay | PedidosYa | `uruguay/` |

## Estructura

```
index.html              → página principal (nombre + elegir país)
qr.html                 → página para imprimir el QR
css/estilos.css         → estilos compartidos por todas las páginas
js/main.js              → página principal: guarda nombre y país, y redirige
js/quiz.js              → corrige las preguntas y muestra el puntaje (lo usan los dos países)
js/qr.js                → genera el QR
img/                    → banderas en SVG
argentina/info.html     → información de Mercado Libre
argentina/preguntas.html→ quiz de Mercado Libre
uruguay/info.html       → información de PedidosYa
uruguay/preguntas.html  → quiz de PedidosYa
originales-alumnos/     → archivos originales de los alumnos (NO hace falta subirlos)
```

## Recorrido del visitante

`index.html` → `info.html` del país → `preguntas.html` → resultado → puede ir al otro país.

## Cómo editar las preguntas

Cada pregunta en `preguntas.html` es un bloque así:

```html
<fieldset class="caja pregunta" data-correcta="b">
  <legend>¿En qué año se fundó Mercado Libre?</legend>
  <label class="opcion"><input type="radio" name="p1" value="a"> 1989</label>
  <label class="opcion"><input type="radio" name="p1" value="b"> 1999</label>
  <label class="opcion"><input type="radio" name="p1" value="c"> 2009</label>
  <p class="mensaje-pregunta"></p>
</fieldset>
```

- `data-correcta` = letra de la respuesta correcta.
- Todas las opciones de una pregunta usan el mismo `name` (p1, p2, p3…).
- Para agregar una pregunta, se copia un bloque y se cambia el `name`. `quiz.js` no se toca.

## Rutas dentro de las carpetas de cada país
- Estilos: `<link rel="stylesheet" href="../css/estilos.css">`
- Volver al inicio: `<a href="../index.html">`
- Imágenes: `../img/nombre.png`

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
