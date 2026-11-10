const buttonInitTimer = document.querySelector("#initTimer");
const buttonStopTimer = document.querySelector("#stopTimer");
const buttonInitInterval = document.querySelector("#initInterval");
const buttonStopInterval = document.querySelector("#stopInterval");

let miTimer;
let miIntervalo;

buttonInitTimer.addEventListener("click", function () {
  miTimer = setTimeout(function () {
    console.log("tiempo terminado");
  }, 2000);
});

buttonStopTimer.addEventListener("click", function () {
  clearTimeout(miTimer);
});

buttonInitInterval.addEventListener("click", function () {
  miIntervalo = setInterval(function () {
    console.log("intervalo encendido");
  }, 2000);
});

buttonStopInterval.addEventListener("click", function () {
  clearInterval(miIntervalo);
});
