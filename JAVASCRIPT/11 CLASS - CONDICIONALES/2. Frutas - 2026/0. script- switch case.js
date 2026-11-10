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

  escribirDOM(elementoRespuesta, obtenerPrecio(numero));
}

function obtenerPrecio(numero) {
  switch (numero) {
    case "1":
      return 8.45;
    case "2":
      return 6.32;
    case "3":
      return 2.36;
    case "4":
      return 1.58;
    case "5":
      return 7.21;
    default:
      return "no se encuentra ninguna fruta con ese número";
  }
}

// ZONA DE FUNCIONES AUXILIARES
function estaVacio(dato) {
  return dato.length === 0;
}

function escribirDOM(componente, mensaje) {
  componente.textContent = mensaje;
}
