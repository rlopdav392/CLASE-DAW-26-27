"use strict";
//ZONA DE VARIABLES
const marca = document.getElementById("marca");
const precio = document.getElementById("precio");
const btnPrecio = document.getElementById("btnPrecio");

//ZONA DE EVENTOS
btnPrecio.addEventListener("click", () => {
  procesarPrecio();
});

//ZONA DE FUNCIONES
function procesarPrecio() {
  reset();
  let valor = marca.value.trim();
  if (isEmpty(valor)) {
    precio.textContent = "no has introducido nada";
  } else {
    precio.textContent = valorMarca(valor);
  }
}

function reset() {
  precio.textContent = "";
}

function isEmpty(valor) {
  return valor.length === 0;
}

function valorMarca(tipo_coche) {
  let salida = "";
  tipo_coche = tipo_coche.toUpperCase();
  switch (tipo_coche) {
    case "PEUGEOT 208":
      salida = "el peugeot 208 cuesta 15000€";
      break;
    case "CITROEN C4 CACTUS":
      salida = "El citroen C4 Cactus cuesta 20000€";
      break;
    default:
      salida =
        "no tenemos registrada esa marca de coches en nuestra base de datos";
  }
  return salida;
}
