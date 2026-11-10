import { listado_coches } from "./data.js";

//ZONA DE VARIABLES
const bntPrecio = document.querySelector("#btnPrecio");
const parrafoPrecio = document.querySelector("#precio");
const inputMarca = document.querySelector("#marca");

//EVENTOS
bntPrecio.addEventListener("click", procesarPrecio);

//ZONA DE FUNCIONES
function procesarPrecio() {
  parrafoPrecio.textContent = "";
  let valor = inputMarca.value.trim();
  if (valor === "") {
    parrafoPrecio.textContent = "No has escrito nada";
  } else {
    parrafoPrecio.textContent = buscarCocheFilter(valor.toUpperCase());
  }
}

function buscarCocheFind(valor) {
  let resultado = listado_coches.find((elto) => elto.nombre === valor);
  let mensajeFinal;
  if (resultado) mensajeFinal = resultado.precio;
  else mensajeFinal = "coche no está en la base de datos";
  return mensajeFinal;
}

function buscarCocheFilter(valor) {
  let resultado = listado_coches.filter((elto) => elto.nombre === valor);
  let mensajeFinal;
  if (resultado.length === 0)
    mensajeFinal = "el coche no está en la base de datos";
  else mensajeFinal = resultado[0].precio;
  return mensajeFinal;
}
