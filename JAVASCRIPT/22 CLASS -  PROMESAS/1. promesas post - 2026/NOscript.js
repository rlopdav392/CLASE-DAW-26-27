const URL = "https://jsonplaceholder.typicode.com/posts";

async function promesaAsyncAwait() {
  try {
    console.log("dentro del async await");
    const response = await fetch(URL);
    const datosJSON = await response.json();
    console.log(datosJSON);
  } catch (error) {
    console.log("super error: " + error);
  }
}
function promesaFetch() {
  fetch(URL)
    .then((datos) => datos.json())
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log("super error: " + error));
}
promesaFetch();
