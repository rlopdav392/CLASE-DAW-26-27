let num1, num2, btnSuma, btnPotencia, resultado;

function cargarMemoria() {
  num1 = document.querySelector("#op1");
  num2 = document.querySelector("#op2");
  btnSuma = document.querySelector("#btnSuma");
  btnPotencia = document.querySelector("#btnPotencia");
  resultado = document.querySelector("#resultado");
  btnSuma.addEventListener("click", suma);
  btnPotencia.addEventListener("click", potencia);
}

document.addEventListener("DOMContentLoaded", cargarMemoria);

function suma() {
  resultado.textContent = +num1.value + +num2.value;
}

function potencia() {
  resultado.textContent = Math.pow(+num1.value, +num2.value);
}
