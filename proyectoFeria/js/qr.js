// ===============================
// GENERADOR DEL CÓDIGO QR
// ===============================

// ⚠️ CAMBIAR por la dirección real de GitHub Pages
const URL_SITIO = "https://USUARIO.github.io/feria-cultural/";

// Mostramos la dirección debajo del QR
document.getElementById("texto-url").textContent = URL_SITIO;

// Creamos el QR dentro del <div id="qr">
new QRCode(document.getElementById("qr"), {
  text: URL_SITIO,
  width: 280,
  height: 280,
  colorDark: "#1d2433",
  colorLight: "#ffffff"
});
