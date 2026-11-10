const buttonInitTimer = document.querySelector("#initTimer");
const buttonStopTimer = document.querySelector("#stopTimer");
const buttonInitInterval = document.querySelector("#initInterval");
const buttonStopInterval = document.querySelector("#stopInterval");

let miTimer;
let miIntervalo;

const iniciarTimer = () => {
  miTimer = setTimeout(() => {
    console.log("tiempo terminado");
  }, 2000);
};

const pararTimer = () => {
  clearTimeout(miTimer);
};

const iniciarIntervalo = () => {
  miIntervalo = setInterval(() => {
    console.log("intervalo encendido");
  }, 2000);
};

const pararIntervalo = () => {
  clearInterval(miIntervalo);
};

buttonInitTimer.addEventListener("click", iniciarTimer);
buttonStopTimer.addEventListener("click", pararTimer);
buttonInitInterval.addEventListener("click", iniciarIntervalo);
buttonStopInterval.addEventListener("click", pararIntervalo);
