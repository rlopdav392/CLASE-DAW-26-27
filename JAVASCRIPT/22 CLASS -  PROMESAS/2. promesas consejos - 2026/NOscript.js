const contenedorPromesa = document.querySelector(".resultadoPromesa");
const URL = "https://api.adviceslip.com/advice";

getAdviceAsyncAwait();
//getAdviceFetch();

async function getAdviceAsyncAwait() {
  try {
    const res = await fetch(URL);
    const data = await res.json();
    imprimirResultado(data.slip.advice);
  } catch (e) {
    imprimirResultado(e);
  }
}

function getAdviceFetch() {
  fetch(URL)
    .then((datos) => datos.json())
    .then((resultado) => imprimirResultado(resultado.slip.advice))
    .catch((error) => imprimirResultado(error));
}

function imprimirResultado(res) {
  contenedorPromesa.innerHTML = `<h2> ${res}</h2>`;
}
