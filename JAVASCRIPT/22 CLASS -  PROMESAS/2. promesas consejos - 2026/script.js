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
    imprimirResultado(
      "¡Vaya! No hemos podido cargar tu consejo. 😕 Inténtalo de nuevo dentro de un momento.",
    );
  }
}

function getAdviceFetch() {
  fetch(URL)
    .then((datos) => datos.json())
    .then((resultado) => imprimirResultado(resultado.slip.advice))
    .catch((error) =>
      imprimirResultado(
        "¡Vaya! No hemos podido cargar tu consejo. 😕 Inténtalo de nuevo dentro de un momento.",
      ),
    );
}

function imprimirResultado(res) {
  contenedorPromesa.innerHTML = `<h2> ${res}</h2>`;
}
