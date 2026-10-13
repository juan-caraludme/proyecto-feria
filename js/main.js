// ===============================
// PÁGINA PRINCIPAL - Elegir país
// ===============================

// 1. Buscamos los elementos del HTML que vamos a usar
const campoNombre = document.getElementById("nombre");
const tarjetas = document.querySelectorAll(".tarjeta");

// 2. Si el visitante ya había escrito su nombre antes, lo mostramos
try {
  const nombreGuardado = localStorage.getItem("nombre");
  if (nombreGuardado) {
    campoNombre.value = nombreGuardado;
  }
} catch (error) {
  // Si el navegador no permite guardar datos, seguimos sin problema
}

// 3. A cada tarjeta le agregamos un "escuchador" del evento click
tarjetas.forEach(function (tarjeta) {
  tarjeta.addEventListener("click", function () {
    // Leemos qué país eligió (está en el atributo data-pais)
    const pais = tarjeta.dataset.pais;
    const nombre = campoNombre.value.trim();

    // Guardamos el nombre y el país en el navegador
    // para poder usarlos en las otras páginas
    try {
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("pais", pais);
    } catch (error) {
      // Si no se puede guardar, igual seguimos
    }

    // Agregamos una clase para mostrar la animación de "seleccionado"
    tarjeta.classList.add("seleccionada");

    // Esperamos un momento y vamos a la página del país
    setTimeout(function () {
      window.location.href = pais + "/info.html";
    }, 400);
  });
});
