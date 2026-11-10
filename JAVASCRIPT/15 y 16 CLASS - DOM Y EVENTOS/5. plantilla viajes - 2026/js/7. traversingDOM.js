// TRAVERSING THE DOM DE ARRIBA A ABAJO (de padres a hijos)

//obtener los hijos de mi nav
const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);

//Saco de la primera card el título
const cardMusica = document.querySelector(".card");
console.log(cardMusica.children[1].children[1].textContent);
console.log(cardMusica.lastElementChild.children[1].textContent);

//saco de la primera card la url de la img de dos formas equivalenbtes
console.log(cardMusica.children[0].src);
console.log(cardMusica.firstElementChild.src);

//TRAVERSING THE DOM DE ABAJO A ARRIBA (de hijo a padre)

//la clase de main que contiene a la primera card
console.log(cardMusica.parentElement.parentElement.parentElement.className);
console.log(cardMusica.closest("main").className);

//TRAVERSING THE DOM DE FORMA HORIZONTAL (entre hermanos)

console.log(cardMusica.nextElementSibling.firstElementChild.src);
console.log(cardMusica.nextElementSibling.nextElementSibling.children[0].src);

const segundaCardForma1 = [...document.querySelectorAll(".card")][1];
const segundaCardForma2 = document.querySelectorAll(".card")[1];

const segundaCardForma3 =
  document.querySelector(".contenedor-cards").children[1];
const segundaCardForma4 = document.querySelector(".card:nth-child(2)");
console.log(segundaCardForma1);
console.log(segundaCardForma2);
console.log(segundaCardForma3);
console.log(segundaCardForma1.previousElementSibling);
//BORRADO DE UN NODO
const primerEnlace = document.querySelector("a");
primerEnlace.remove();

//navegacion.removeChild(primerEnlace);
