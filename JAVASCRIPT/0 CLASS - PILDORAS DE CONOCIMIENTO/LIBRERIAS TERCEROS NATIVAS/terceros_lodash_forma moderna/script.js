import _ from "https://cdn.jsdelivr.net/npm/lodash-es@4/+esm";

const nombre = document.querySelector("#nombre");
const btnComprobar = document.querySelector("#btnComprobar");

btnComprobar.addEventListener("click", () => {
  if (_.isEmpty(nombre.value.trim())) {
    alert("El campo está vacío");
  } else {
    alert("El campo tiene contenido");
  }
});
