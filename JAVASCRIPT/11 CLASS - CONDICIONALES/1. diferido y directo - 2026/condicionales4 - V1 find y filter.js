"use strict";
//ZONA DE VARIABLES - CARGA DEL DOM A TRAVÉS DEL DEFER
const marca = document.getElementById("marca");
const precio = document.getElementById("precio");
const btnPrecio = document.getElementById("btnPrecio");

//ESTRUCTURA ARRAY DE OBJETOS
const listado_coches = [
  { nombre: "PEUGEOT", precio: "15000€" },
  { nombre: "C4", precio: "20000€" },
];

btnPrecio.addEventListener("click", procesarPrecio);

//ZONA DE FUNCIONES (BUSCANDO EL NIVEL DE ABSTRACCIÓN - REUTILIZACIÓN CON FUNCIONES)
function procesarPrecio() {
  reset();
  //LECTURA DEL DOM
  let valor = marca.value.trim();
  if (isEmpty(valor)) {
    precio.textContent = "no has introducido nada";
  } else {
    //ESCRITURA EN EL DOM
    //USO DE LA FUNCIÓN FIND PARA OBTENER EL PRECIO, TBE SE PODRÍA USER FILTER
    precio.textContent = valorMarca_find(valor);
  }
}

function reset() {
  //ESCRITURA EN EL DOM
  precio.textContent = "";
}

//CONTROL DE ERRORES
function isEmpty(valor) {
  return valor.length === 0;
}

function valorMarca_filter(tipo_coche) {
  let salida = "";
  tipo_coche = tipo_coche.toUpperCase();
  let array_coches = listado_coches.filter(
    (coche) => coche.nombre === tipo_coche,
  );

  if (array_coches.length > 0) {
    salida = array_coches[0].precio;
  } else {
    salida =
      "no tenemos registrada esa marca de coches en nuestra base de datos";
  }
  return salida;
}

function valorMarca_find(tipo_coche) {
  let salida = "";
  tipo_coche = tipo_coche.toUpperCase();
  let coche_encontrado = listado_coches.find(
    (coche) => coche.nombre === tipo_coche,
  );

  if (coche_encontrado) {
    salida = coche_encontrado.precio;
  } else {
    salida =
      "no tenemos registrada esa marca de coches en nuestra base de datos";
  }
  return salida;
}
