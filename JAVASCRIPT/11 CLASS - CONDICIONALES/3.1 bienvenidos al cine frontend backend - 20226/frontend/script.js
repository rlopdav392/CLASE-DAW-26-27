// ZONA DE VARIABLES
const elementoEdad = document.getElementById("edad");
const elementoRecomendacion = document.getElementById("recomendacion");
const btnDrama = document.getElementById("btnDrama");
const btnComedia = document.getElementById("btnComedia");
const btnMusical = document.getElementById("btnMusical");
const btnCrimen = document.getElementById("btnCrimen");
let peliculas = [];

// ZONA DE EVENTOS
btnDrama.addEventListener("click", () => recomendar("drama"));
btnComedia.addEventListener("click", () => recomendar("comedia"));
btnMusical.addEventListener("click", () => recomendar("musical"));
btnCrimen.addEventListener("click", () => recomendar("crimen"));
obtenerDatosJSON();

// ZONA DE FUNCIONES PRINCIPALES
function obtenerDatosJSON() {
  const URL = "http://localhost:3000/api/peliculas";
  fetch(URL)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      peliculas = resultado;
    })
    .catch(() =>
      escribirDOM(elementoRecomendacion, "no se han podido cargar los datos"),
    );
}

// OTRA FORMA CON ASYNC/AWAIT
// async function obtenerDatosJSON() {
//   const URL = "http://localhost:3000/api/peliculas";
//   try {
//     const respuesta = await fetch(URL);
//     peliculas = await respuesta.json();
//   } catch {
//     escribirDOM(elementoRecomendacion, "no se han podido cargar los datos");
//   }
// }

function recomendar(genero) {
  if (peliculas.length === 0) {
    escribirDOM(elementoRecomendacion, "los datos aún no se han cargado");
    return;
  }

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
  const peliculasEncontradas = peliculas.filter(
    (elto) => elto.genero === genero && elto.edadMinima <= edad,
  );

  if (peliculasEncontradas.length > 0) {
    const arrayTitulos = peliculasEncontradas.map((elto) => elto.titulo);
    const stringTitulos = arrayTitulos.join(", ");
    escribirDOM(elementoRecomendacion, stringTitulos);
  } else {
    escribirDOM(
      elementoRecomendacion,
      "no se aconseja para esa edad ninguna película del genero seleccionado.",
    );
  }
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
