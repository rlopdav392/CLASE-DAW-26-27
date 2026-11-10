const buttonInitTimer = document.querySelector("#initTimer");
const buttonStopTimer = document.querySelector("#stopTimer");
const buttonInitInterval = document.querySelector("#initInterval");
const buttonStopInterval = document.querySelector("#stopInterval");

let miTimer;
let miIntervalo;

function iniciarTimer() {
  miTimer = setTimeout(function () {
    console.log("tiempo terminado");
  }, 2000);
}

function pararTimer() {
  clearTimeout(miTimer);
}

function iniciarIntervalo() {
  miIntervalo = setInterval(function () {
    console.log("intervalo encendido");
  }, 2000);
}

function pararIntervalo() {
  clearInterval(miIntervalo);
}

buttonInitTimer.addEventListener("click", iniciarTimer);
buttonStopTimer.addEventListener("click", pararTimer);
buttonInitInterval.addEventListener("click", iniciarIntervalo);
buttonStopInterval.addEventListener("click", pararIntervalo);

//buttonInitTimer.addEventListener("click", iniciarTimer);
//No ponemos:iniciarTimer()
