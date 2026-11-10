let docente = prompt("quien es  la profe de DAW");
console.log("te llamas: " + docente);
console.log(`te llamas ${docente}`);

const cursoDAW = "DAW";
const profesorASIR = "Sergio";
const cursoASIR = "ASIR";

const divCursoDAW = document.querySelector("#cursoDAW");
let contenidoDAW = `
<h2>Profesora: ${docente}</h2>
<h3>Curso: ${cursoDAW}</h3>
`;
rellenarContainer(divCursoDAW, contenidoDAW);

const divCursoASIR = document.getElementById("cursoASIR");
let contenidoASIR = `
<h2>Profesor: ${profesorASIR}</h2>
<h3>Curso: ${cursoASIR} </h3>
`;
rellenarContainer(divCursoASIR, contenidoASIR);

const divCierva = document.querySelector("#Cierva");
let existe_informacion = true;
let contenidoInformacion = "";
let more = "eso de moemento";

if (existe_informacion) {
  contenidoInformacion = "<h3> existe información </h3>";
} else {
  contenidoInformacion = "<h3> No existe información </h3>";
}

rellenarContainer(divCierva, contenidoInformacion);
rellenarContainer(divCierva, more);

function rellenarContainer(container, contenidoContainer) {
  container.innerHTML += contenidoContainer;
}
