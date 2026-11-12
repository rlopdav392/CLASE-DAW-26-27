//CARGA DOM
//Carga en constantes:contenedorCardsHacer, contenedorCardsHospedaje, contenedorCardsDestinos
const contenedorCardsHacer = document.querySelectorAll(
  "section.hacer .contenedor-cards",
);

const contenedorCardsHospedaje = document.querySelector(
  "section.hospedaje .contenedor-cards",
);

const contenedorCardsDestinos = document.querySelector(
  "section.destinos .contenedor-cards",
);

//CASO 0 - CARDS DE DESTINO POPULARES - LECTURA DE ATRIBUTOS
//vas a leer el id y el img-id de la primera imagen de la primera card de destinos populares
console.log(contenedorCardsDestinos.children[0].children[0].id);
console.log(
  contenedorCardsDestinos.children[0].children[0].getAttribute("img-id"),
);

//CASO 1 - [delegación de eventos] CARDS DE DESTINO POPULARES - EVENTO EN LA IMAGEN CON DELEGACIÓN DE EVENTOS
//vas a poner un evento en el contenedorCardDestinos
//de tal forma que cada vez que se haga un click en las imágenes, que muestre su url
contenedorCardsDestinos.addEventListener("click", (elemento) => {
  console.log(
    "entendiendo el e del evento: " + elemento.type + " " + elemento.buttons,
  );
  console.log(elemento.target);

  if (elemento.target.classList.contains("imagen")) {
    console.log(elemento.target.src);
  }
});

//CASO 2 [delegación de eventos] CARDS DE DESTINO - EVENTO EN EL PARRAFO TITULO
//vas a poner un evento en el contenedorCardDestinos
//de tal forma que cada vez que haga un click en el título, pues que muestre el titulo y todo el componente html de la card
contenedorCardsDestinos.addEventListener("click", (elemento) => {
  if (elemento.target.classList.contains("titulo")) {
    console.log(elemento.target.textContent);
    const card = elemento.target.closest(".card");
    if (card) {
      console.log(card);
      console.log("HTML completo de la card clicada:", card.outerHTML);
    }
  }
});

//CASO 3 [delegación de eventos] CARDS DE QUE HACER EN NY - EVENTO EN EL PARRAFO TITULO
//Vas a poner un evento en el contenedor de card de NY
//de tal forma que cada vez que se haga un click en el título, ha de mostrar el titulo y  todo el componente HTML de la card
const queHacerNY = contenedorCardsHacer[2];
console.log("queHacerNY: ", queHacerNY);

queHacerNY.addEventListener("click", queHacerNuevaYork);

function queHacerNuevaYork(elemento) {
  if (elemento.target.classList.contains("titulo")) {
    console.log(elemento.target.textContent);
    const card = elemento.target.closest(".card");
    if (card) {
      console.log(card);
      console.log("HTML completo de la card clicada:", card.outerHTML);
    }
  }
}

//CASO 4 TRAVERSING THE DOM - HOSPEDAJE
//Recorrer e imprimir todos los nodos de todas las cards del contenedor Hospedaje
let hijosCardsHospedaje = Array.from(contenedorCardsHospedaje.children);
console.log(hijosCardsHospedaje);

hijosCardsHospedaje.forEach((elto) => {
  console.log("card hospedaje", elto);
  console.log(elto.children[0].src);
  let arraysHospedajes = Array.from(elto.children[1].children);
  arraysHospedajes.forEach((elto) => console.log(elto.textContent));
});
//CASO 5- BORRADO DEL CONTAINER NEWYORK
queHacerNY.remove();

//CASO 6 - [delegación de eventos] CUANDO PULSE EN EL PRECIO DE HOSPEDAJE PUES QUE SAQUE:
//LA URL DE LA IMAGEN DE SU CONTENEDOR
//EL PRECIO PULSADO
contenedorCardsHospedaje.addEventListener("click", (e) => {
  if (e.target.classList.contains("precio")) {
    console.log(e.target.textContent);
    let nodo_imagen = e.target.parentElement.parentElement.children[0];
    console.log("source img: " + nodo_imagen.src);

    /*  const card = e.target.closest(".card");
    if (card) {
      console.log("source img: " + card.querySelector("img").src);
      console.log("source img: " + card.children[0].src);
    } */
  }
});
