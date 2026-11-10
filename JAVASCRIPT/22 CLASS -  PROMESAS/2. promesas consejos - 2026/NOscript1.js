const contenedorPromesa = document.querySelector(".resultadoPromesa");
const URL = "https://api.adviceslip.com/advice";

getAdviceFetch_funcionanonima();

function getAdviceFetch_arrowfunctionComprimido() {
  fetch(URL)
    .then((datos) => datos.json())
    .then(
      (resultado) =>
        (contenedorPromesa.innerHTML = `<h2> ${resultado.slip.advice}</h2>`)
    );
}

function getAdviceFetch_arrowfunctionNoComprimido() {
  fetch(URL)
    .then((datos) => datos.json())
    .then((resultado) => {
      return (contenedorPromesa.innerHTML = `<h2> ${resultado.slip.advice}</h2>`);
    });
}

function getAdviceFetch_funcionanonima() {
  fetch(URL)
    .then((datos) => datos.json())
    .then(function (resultado) {
      contenedorPromesa.innerHTML = `<h2> ${resultado.slip.advice}</h2>`;
    });
}

function getAdviceFetch_arrowfunctionNoComprimidiConfunction() {
  fetch(URL)
    .then((datos) => datos.json())
    .then((resultado) => {
      return imprimirResultado(resultado.slip.advice);
    });
}

function getAdviceFetch_arrowfunctioComprimidiConfunction() {
  fetch(URL)
    .then((datos) => datos.json())
    .then((resultado) => imprimirResultado(resultado.slip.advice));
}

function imprimirResultado(res) {
  contenedorPromesa.innerHTML = `<h2> ${res}</h2>`;
}
