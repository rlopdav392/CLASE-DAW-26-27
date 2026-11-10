// ZONA DE VARIABLES
const elementoEdad = document.getElementById("edad");
const elementoRecomendacion = document.getElementById("recomendacion");
const btnDrama = document.getElementById("btnDrama");
const btnComedia = document.getElementById("btnComedia");
const btnMusical = document.getElementById("btnMusical");
const btnCrimen = document.getElementById("btnCrimen");

// ZONA DE EVENTOS
btnDrama.addEventListener("click", () => recomendar("drama"));
btnComedia.addEventListener("click", () => recomendar("comedia"));
btnMusical.addEventListener("click", () => recomendar("musical"));
btnCrimen.addEventListener("click", () => recomendar("crimen"));

// ZONA DE FUNCIONES PRINCIPALES
function recomendar(genero) {
  const texto = elementoEdad.value.trim();

  if (estaVacio(texto)) {
    escribirDOM(elementoRecomendacion, "ha de escribir algo");
    return;
  }

  if (!esNumero(texto)) {
    escribirDOM(elementoRecomendacion, "ha de meter un número");
    return;
  }

  const edad = +texto;
  escribirDOM(elementoRecomendacion, obtenerPelicula(genero, edad));
}

function obtenerPelicula(genero, edad) {
  const titulos = [];

  switch (genero) {
    case "drama":
      if (edad >= 16) titulos.push("Taxi Driver");
      if (edad >= 13) titulos.push("The Shawshank Redemption");
      if (edad >= 0) titulos.push("Casablanca");
      break;
    case "comedia":
      if (edad >= 16) titulos.push("The Wolf of Wall Street");
      if (edad >= 13) titulos.push("The Truman Show");
      if (edad >= 0) titulos.push("Back to the Future");
      break;
    case "musical":
      if (edad >= 16) titulos.push("The Rocky Horror Picture Show");
      if (edad >= 13) titulos.push("Les Miserables");
      if (edad >= 0) titulos.push("La La Land");
      break;
    case "crimen":
      if (edad >= 16) titulos.push("The Godfather");
      if (edad >= 13) titulos.push("El Secreto de tus Ojos");
      if (edad >= 10) titulos.push("Gothika");
      break;
  }

  if (titulos.length === 0) {
    return "no se aconseja para esa edad ninguna película del genero seleccionado.";
  }

  return titulos.join(", ");
}

// ZONA DE FUNCIONES AUXILIARES
function estaVacio(dato) {
  return dato.length === 0;
}

function esNumero(dato) {
  return !Number.isNaN(+dato);
}

function escribirDOM(componente, mensaje) {
  componente.textContent = mensaje;
}
