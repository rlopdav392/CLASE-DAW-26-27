const nombre = document.querySelector("#nombre");
const btnComprobar = document.querySelector("#btnComprobar");

btnComprobar.addEventListener("click", () => {
  if (isEmpty(nombre.value)) {
    alert("El campo está vacío");
  } else {
    alert("El campo tiene contenido");
  }
});
