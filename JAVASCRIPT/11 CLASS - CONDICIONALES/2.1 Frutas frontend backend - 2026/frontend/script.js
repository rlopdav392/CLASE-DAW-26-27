// ZONA DE VARIABLES
const btnPrecio = document.querySelector("#btnPrecio");
const elementoRespuesta = document.getElementById("textoPrecio");
const elementoFruta = document.getElementById("numeroFruta");
let array_frutas = [];

// ZONA DE EVENTOS
btnPrecio.addEventListener("click", consultarPrecio);
obtenerDatosJSON();

// ZONA DE FUNCIONES PRINCIPALES
function obtenerDatosJSON() {
  const URL = "http://localhost:3000/api/frutas";
  fetch(URL)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      array_frutas = resultado;
    })
    .catch(() => escribirDOM(elementoRespuesta, "no se han podido cargar los datos"));
}

// OTRA FORMA CON ASYNC/AWAIT
// async function obtenerDatosJSON() {
//   const URL = "http://localhost:3000/api/frutas";
//   try {
//     const respuesta = await fetch(URL);
//     array_frutas = await respuesta.json();
//   } catch {
//     escribirDOM(elementoRespuesta, "no se han podido cargar los datos");
//   }
// }

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
