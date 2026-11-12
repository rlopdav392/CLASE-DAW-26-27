console.log("guardando claves en localstorage");

localStorage.setItem("nombre", "juan");

const producto = {
  nombre: "Monitor de 24 pulgadas",
  precio: 300,
};
const productoString = JSON.stringify(producto);
localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrer", "Marzo", "Abril"];
localStorage.setItem("meses", JSON.stringify(meses));
