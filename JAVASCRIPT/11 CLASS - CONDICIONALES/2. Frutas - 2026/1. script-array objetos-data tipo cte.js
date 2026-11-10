import { array_frutas } from "./data.js";

// ZONA DE VARIABLES
const btnPrecio = document.querySelector("#btnPrecio");
const elementoRespuesta = document.getElementById("textoPrecio");
const elementoFruta = document.getElementById("numeroFruta");

// ZONA DE EVENTOS
btnPrecio.addEventListener("click", consultarPrecio);

// ZONA DE FUNCIONES PRINCIPALES
function consultarPrecio() {
  const numero = elementoFruta.value.trim();

  if (estaVacio(numero)) {
    escribirDOM(elementoRespuesta, "no ha escrito nada");
    return;
  }

  const fruta = array_frutas.find((elto) => elto.id === +numero);

  if (fruta) {
    escribirDOM(elementoRespuesta, fruta.precio);
  } else {
    escribirDOM(elementoRespuesta, "no se encuentra ninguna fruta con ese número");
  }
}

// ZONA DE FUNCIONES AUXILIARES
function estaVacio(dato) {
  return dato.length === 0;
}

function escribirDOM(componente, mensaje) {
  componente.textContent = mensaje;
}
