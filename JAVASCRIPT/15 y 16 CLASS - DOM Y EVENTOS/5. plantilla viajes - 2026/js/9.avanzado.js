const buttonFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

buttonFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter(e) {
  if (footer.classList.contains("activo")) {
    //Es porque el footer está visible y quiero ocultarlo
    footer.classList.remove("activo");
    e.target.textContent = "Idioma y moneda";
  } else {
    footer.classList.add("activo");
    e.target.textContent = "cerrar";
  }
}
