//zona de definición de variables o constantes
const cuentaRegresiva = document.querySelector("#cuentaRegresiva");
const audioFinal = document.querySelector("#audioFinal");
const btnFinalizado = document.querySelector("#finalizado");
const respuesta1 = document.querySelector("#respuesta1");
const respuesta2 = document.querySelector("#respuesta2");
const respuesta3 = document.querySelector("#respuesta3");
const respuesta4 = document.querySelector("#respuesta4");
const respuesta5 = document.querySelector("#respuesta5");
const btnVolverIntentar = document.querySelector("#volverIntentar");

let miIntervalo = setInterval(decrementarCuenta, 1000);

//Zona de eventos
btnFinalizado.addEventListener("click", finalizado);
btnVolverIntentar.addEventListener("click", reseteo);

//Zona de manipulación del DOM
cuentaRegresiva.textContent = 10;

//Zona de funciones

function reseteo() {
  //para el intervalo y volver a ponerlo a 10
  //limpiar respuestas
  clearInterval(miIntervalo);
  cuentaRegresiva.textContent = 10;
  miIntervalo = setInterval(decrementarCuenta, 1000);

  respuesta1.value = "";
  respuesta2.value = "";
  respuesta3.value = "";
  respuesta4.value = "";
  respuesta5.value = "";
}

function finalizado() {
  //parar el intervalo
  //imprimir en pantalla todas las respuestas
  //hacer control de error de si alguna vacía
  clearInterval(miIntervalo);
  let mensaje =
    `1. ${respuesta1.value} \n` +
    `2. ${respuesta2.value} \n` +
    `3. ${respuesta3.value} \n` +
    `4. ${respuesta4.value} \n` +
    `5. ${respuesta5.value} \n`;

  let arrayRespuestas = [];
  arrayRespuestas.push(respuesta1.value.trim());
  arrayRespuestas.push(respuesta2.value.trim());
  arrayRespuestas.push(respuesta3.value.trim());
  arrayRespuestas.push(respuesta4.value.trim());
  arrayRespuestas.push(respuesta5.value.trim());
  if (arrayRespuestas.includes("")) {
    mensaje += "tienes algun campo incompleto";
  }

  alert(mensaje);
}

function decrementarCuenta() {
  let tiempo = +cuentaRegresiva.textContent;
  tiempo = tiempo - 1;
  cuentaRegresiva.textContent = tiempo;
  console.log(tiempo);
  if (tiempo === 0) {
    alert("tiempo cumplido");
    clearInterval(miIntervalo);
    audioFinal.play();
  }
}
