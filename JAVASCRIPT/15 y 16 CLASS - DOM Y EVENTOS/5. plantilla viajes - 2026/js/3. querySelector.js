//Selecciono el primero objeto cuya clase es card
const card = document.querySelector(".card");
console.log(card);

//Selecciono el primer objeto cuya class es info y está contenida en una clase contenedor-cards
const info = document.querySelector(".contenedor-cards .info");
console.log(info);
//Selecciono el segundo objeto cuya clase es card, contenida en una clase hospedaje la que a su vez, está contenida en un selector section
const segundaCard = document.querySelector(
  "section.hospedaje .card:nth-child(2)",
);
console.log(segundaCard);

//Aquí simplmente almaceno en una variable esa movida que he obtenida antes, y accedo a su primer hijo el cual es un img e imprimo su src
console.log(segundaCard.children[0].src);
//Selecciono el objeto cuya id es formulario
const form = document.querySelector("#formulario");
console.log(form);
//Selecciono el primer objeto cuya clase es nav
const navegation = document.querySelector("nav");
console.log(navegation);
