//ZONA DE DEFINICIÓN DE VARIABLES / CONSTANTES
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

//ZONA DE MANIPULACIÓN DEL DOM
cuentaRegresiva.textContent = 10;

//ZONA DE FUNCIONES PRINCIPALES

function resetear() {
  reiniciarCuenta();
  limpiarRespuestas();
}

function finalizar() {
  detenerCuenta();
  const respuestasUsuarios = obtenerRespuestas(respuestas);
  let mensaje = generarMensaje(respuestasUsuarios);

  if (validarRespuestas(respuestasUsuarios)) {
    mensaje += "\nTienes algún campo incompleto.";
  }
  alert(mensaje);
}

function decrementarCuenta() {
  let tiempo = +cuentaRegresiva.textContent;

  tiempo--;
  cuentaRegresiva.textContent = tiempo;

  if (tiempo === 0) {
    alert("tiempo cumplido");
    finalizarTiempo();
  }
}

//ZONA DE FUNCIONES REUTILIZABLES / AUXILIABLES

function finalizarTiempo() {
  detenerCuenta();
  audioFinal.play();
}
function limpiarRespuestas() {
  respuestas.forEach((respuesta) => (respuesta.value = ""));
}

function reiniciarCuenta() {
  detenerCuenta();
  cuentaRegresiva.textContent = 10;
  miIntervalo = setInterval(decrementarCuenta, 1000);
}

function validarRespuestas(respuestas) {
  return respuestas.includes("");
}

function generarMensaje(respuestas) {
  return respuestas
    .map((respuesta, indice) => `${indice + 1}. ${respuesta}`)
    .join("\n");
}

function obtenerRespuestas(respuestas) {
  return respuestas.map((respuesta) => respuesta.value.trim());
}
function detenerCuenta() {
  clearInterval(miIntervalo);
}
