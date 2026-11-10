const buttonInitTimer = document.querySelector("#initTimer");
const buttonStopTimer = document.querySelector("#stopTimer");
const buttonInitInterval = document.querySelector("#initInterval");
const buttonStopInterval = document.querySelector("#stopInterval");
let miTimer;
let miIntervalo;
buttonInitTimer.addEventListener("click", () => {
  miTimer = setTimeout(() => {
    console.log("tiempo terminado");
  }, 2000);
});

buttonStopTimer.addEventListener("click", () => {
  clearTimeout(miTimer);
});

buttonInitInterval.addEventListener("click", () => {
  miIntervalo = setInterval(() => {
    console.log("intervalo encendido");
  }, 2000);
});

buttonStopInterval.addEventListener("click", () => {
  clearInterval(miIntervalo);
});
