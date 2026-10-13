// ===============================
// QUIZ - lo usan las páginas de preguntas de los dos países
// ===============================
// Cómo funciona:
// - Cada pregunta es un <fieldset class="pregunta" data-correcta="b">
// - data-correcta indica cuál es la opción correcta (a, b o c)
// - Al apretar "Ver resultado" se corrige todo y se muestra el puntaje

// 1. Buscamos los elementos del HTML
const formulario = document.getElementById("quiz");
const preguntas = document.querySelectorAll(".pregunta");
const aviso = document.getElementById("aviso");
const cajaResultado = document.getElementById("resultado");
const textoPuntaje = document.getElementById("puntaje");
const textoMensaje = document.getElementById("mensaje-final");
const botonReintentar = document.getElementById("reintentar");

// 2. Leemos el nombre que el visitante escribió en la página principal
let nombre = "";
try {
  nombre = localStorage.getItem("nombre") || "";
} catch (error) {
  // Si no se puede leer, seguimos sin nombre
}

// 3. Cuando se envía el formulario, corregimos
formulario.addEventListener("submit", function (evento) {
  // Evitamos que la página se recargue
  evento.preventDefault();

  // Primero revisamos que haya respondido todas las preguntas
  let faltan = 0;
  preguntas.forEach(function (pregunta) {
    if (!pregunta.querySelector("input:checked")) {
      faltan++;
    }
  });

  if (faltan > 0) {
    aviso.textContent = "Te falta responder " + faltan + (faltan === 1 ? " pregunta." : " preguntas.");
    aviso.classList.remove("oculto");
    return;
  }
  aviso.classList.add("oculto");

  // Corregimos cada pregunta y contamos los aciertos
  let aciertos = 0;

  preguntas.forEach(function (pregunta) {
    const correcta = pregunta.dataset.correcta;
    const elegida = pregunta.querySelector("input:checked");
    const mensaje = pregunta.querySelector(".mensaje-pregunta");
    const opcionCorrecta = pregunta.querySelector('input[value="' + correcta + '"]');

    // Pintamos de verde la opción correcta
    opcionCorrecta.parentElement.classList.add("correcta");

    if (elegida.value === correcta) {
      aciertos++;
      mensaje.textContent = "¡Correcto!";
      mensaje.className = "mensaje-pregunta bien";
    } else {
      // Pintamos de rojo la opción que eligió mal
      elegida.parentElement.classList.add("incorrecta");
      mensaje.textContent = "Incorrecto. La respuesta era: " + opcionCorrecta.parentElement.textContent.trim();
      mensaje.className = "mensaje-pregunta mal";
    }

    // Bloqueamos las opciones para que no se puedan cambiar
    pregunta.disabled = true;
  });

  mostrarResultado(aciertos, preguntas.length);
});

// 4. Mostramos el puntaje final con un mensaje según cuántas acertó
function mostrarResultado(aciertos, total) {
  textoPuntaje.textContent = aciertos + " / " + total;

  let mensaje;
  if (aciertos === total) {
    mensaje = "¡Perfecto! Sos un experto.";
  } else if (aciertos >= total / 2) {
    mensaje = "¡Muy bien! Aprendiste mucho.";
  } else {
    mensaje = "¡Buen intento! Podés volver a leer la información y probar de nuevo.";
  }

  // Si escribió su nombre en la página principal, lo saludamos
  if (nombre) {
    mensaje = nombre + ", acertaste " + aciertos + " de " + total + ". " + mensaje;
  }

  textoMensaje.textContent = mensaje;

  // Ocultamos el botón de corregir y mostramos el resultado
  document.getElementById("corregir").classList.add("oculto");
  cajaResultado.classList.remove("oculto");
  cajaResultado.scrollIntoView({ behavior: "smooth" });
}

// 5. Botón para volver a intentar: limpia todo
botonReintentar.addEventListener("click", function () {
  formulario.reset();

  preguntas.forEach(function (pregunta) {
    pregunta.disabled = false;
    pregunta.querySelector(".mensaje-pregunta").textContent = "";
    pregunta.querySelectorAll(".opcion").forEach(function (opcion) {
      opcion.classList.remove("correcta", "incorrecta");
    });
  });

  document.getElementById("corregir").classList.remove("oculto");
  cajaResultado.classList.add("oculto");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
