console.log("estoy en 10.eventos1.js");
const form = document.querySelector("#formulario");
form.addEventListener("submit", validarFormulario);
function validarFormulario(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target);
  // e.preventDefault();
}
