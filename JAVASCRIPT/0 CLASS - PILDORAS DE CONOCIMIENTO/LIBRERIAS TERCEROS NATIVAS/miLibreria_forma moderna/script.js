import * as miLibreria  from "./miLibreria.js";

/* import {otroMetodo, isEmpty} from "./miLibreria.js"; */

const nombre = document.querySelector("#nombre");
const btnComprobar = document.querySelector("#btnComprobar");

btnComprobar.addEventListener("click", () => {
  if (miLibreria.isEmpty(nombre.value)) {
    alert("El campo está vacío");
  } else {
    alert("El campo tiene contenido");
  }
});
