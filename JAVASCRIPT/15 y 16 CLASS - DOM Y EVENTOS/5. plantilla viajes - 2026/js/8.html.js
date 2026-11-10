//Creamos un enlace dinámicamente
const enlace = document.createElement("a");
enlace.textContent = "nuevo_enlace";
enlace.href = "/nuevoEnlace";

const containerNavegacion = document.querySelector(".navegacion");
containerNavegacion.insertBefore(enlace, containerNavegacion.children[1]);

//Creamos una card dinámicamente
const parrafoCategoria = document.createElement("p");
const parrafoTitulo = document.createElement("p");
const parrafoPrecio = document.createElement("p");

parrafoCategoria.textContent = "CONCIERTO";
parrafoTitulo.textContent = "CONCIERTO DE LO QUE SEA";
parrafoPrecio.textContent = "10€";

parrafoCategoria.classList.add("categoria", "concierto");
parrafoTitulo.classList.add("titulo");
parrafoPrecio.classList.add("precio");

const containerInfo = document.createElement("div");
containerInfo.classList.add("info");
containerInfo.appendChild(parrafoCategoria);
containerInfo.appendChild(parrafoTitulo);
containerInfo.appendChild(parrafoPrecio);

const nodoImagen = document.createElement("img");
nodoImagen.src = "img/hacer2.jpg";

const containerCard = document.createElement("div");
containerCard.classList.add("card");
containerCard.appendChild(nodoImagen);
containerCard.appendChild(containerInfo);

const containerHacer = document.querySelector(".hacer .contenedor-cards");
containerHacer.appendChild(containerCard);
