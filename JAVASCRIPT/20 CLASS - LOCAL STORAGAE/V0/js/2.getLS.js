console.log("leyendo claves de localstorage");

const nombre = localStorage.getItem("nombre");
console.log(nombre);

const productoJSON = localStorage.getItem("producto");
console.log(JSON.parse(productoJSON));

const mesesJSON = localStorage.getItem("meses");
console.log(JSON.parse(mesesJSON));
