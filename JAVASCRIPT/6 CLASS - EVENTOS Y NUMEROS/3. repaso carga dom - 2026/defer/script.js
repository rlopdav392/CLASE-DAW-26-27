'use strict'

//ZONA DE DECLARACIÓN DE VARIABLES
const btn1 = document.querySelector("#boton1");
const btn2 = document.querySelector("#boton2");
const parr1 = document.querySelector("#p1");
const parr2 = document.querySelector("#p2");




//ZONA DE EVENTOS - LISTENERS
btn1.addEventListener("click",() => {
    //parr1.innerHTML = "<h3>hola que tal</h3>";
    escribirDOM("hola que tal",parr1);

});

btn2.onclick = () => {
  // parr2.innerHTML = "<h3>soy párrafo2</h3>";
   escribirDOM("soy párrafo2",parr2);
}

//ZONA DE FUNCIONES
function escribirDOM(mensaje,componenteDOM){
    componenteDOM.innerHTML = `<h3> ${mensaje} </h3>`;
}