//ZONA DE DEFINICIÓN DE CONSTANTES / VARIABLES
const cuentaRegresiva = document.querySelector("#cuentaRegresiva");
const audioFinal = document.querySelector("#audioFinal");
const btnFinalizado = document.querySelector("#finalizado");
const respuestas = [
  document.querySelector("#respuesta1"),
  document.querySelector("#respuesta2"),
  document.querySelector("#respuesta3"),
  document.querySelector("#respuesta4"),
  document.querySelector("#respuesta5"),
];
const btnVolverIntentar = document.querySelector("#volverIntentar");

let miIntervalo = setInterval(decrementarCuenta, 1000);

//ZONA DE EVENTOS
btnFinalizado.addEventListener("click", finalizar);
btnVolverIntentar.addEventListener("click", resetear);

//ZONA DE MANIPULA DOM
cuentaRegresiva.textContent = 10;

//ZONA DE FUNCIONES PRINCIPALES
function resetear() {
  reiniciarIntervalo();
  limpiarRespuestas();
}

function finalizar() {
  detenerCuenta();
  let mensaje = obtenerRespuestas(respuestas);
  if (validarRespuestasVacias(respuestas)) {
    mensaje += "\nhas de conmpletar todos los campos";
  }
  alert(mensaje);
}

function decrementarCuenta() {
  let tiempo = +cuentaRegresiva.textContent;
  tiempo--;
  cuentaRegresiva.textContent = tiempo;
  if (tiempo === 0) {
    finalizarTiempo();
  }
}

//ZONA DE FUNCIONES AUXILIARES / REUTILIZABLES
function finalizarTiempo() {
  alert("tiempo cumplido");
  clearInterval(miIntervalo);
  audioFinal.play();
}

function detenerCuenta() {
  clearInterval(miIntervalo);
}

function reiniciarIntervalo() {
  detenerCuenta();
  cuentaRegresiva.textContent = 10;
  miIntervalo = setInterval(decrementarCuenta, 1000);
}

function limpiarRespuestas() {
  respuestas.forEach((parametro_entrada) => {
    parametro_entrada.value = "";
  });
}

function obtenerRespuestas(respuestas) {
  let mensaje = respuestas
    .map((elemento, indice) => {
      return `respuesta: ${indice} es ${elemento.value}`;
    })
    .join("\n");

  return mensaje;
}

function validarRespuestasVacias(respuestas) {
  let arrayRespuestas = respuestas.map((elemento) => elemento.value);
  return arrayRespuestas.includes("");
}
