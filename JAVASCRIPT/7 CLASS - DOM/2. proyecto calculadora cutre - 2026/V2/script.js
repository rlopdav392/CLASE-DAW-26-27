"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //ZONA DE DECLARACIÓN DE VARIABLES
  const op1 = document.querySelector("#op1");
  const op2 = document.querySelector("#op2");
  const btnSuma = document.querySelector("#suma");
  const btnPotencia = document.querySelector("#potencia");
  const eltoResultado = document.querySelector("#resultado");

  //ZONA DE LISTENERS -EVENTOS
  btnSuma.addEventListener("click", () => {
    let resultado = "";
    if (esNumero(op1.value) && esNumero(op2.value)) {
      resultado = operacion(op1.value, op2.value, "suma");
    } else {
      resultado = "número/s incorrectos";
    }
    imprimirDOM(resultado, eltoResultado);
  });

  btnPotencia.addEventListener("click", () => {
    let resultado = "";
    if (esNumero(op1.value) && esNumero(op2.value)) {
      resultado = operacion(op1.value, op2.value, "potencia");
    } else {
      resultado = "número/s incorrectos";
    }
    imprimirDOM(resultado, eltoResultado);
  });

  //ZONA DE FUNCIONES

  function imprimirDOM(mensaje, componenteDOM) {
    componenteDOM.innerHTML = `<h3> ${mensaje} </h3>`;
  }

  //CONTROL DE ERRORES
  function esNumero(dato) {
    if (dato.trim().length == 0 || Number.isNaN(+dato)) {
      return false;
    } else {
      return true;
    }
  }

  function operacion(op1, op2, tipo) {
    let resultado = "";
    switch (tipo) {
      case "suma":
        resultado = +op1 + +op2;
        break;
      case "potencia":
        resultado = Math.pow(+op1, +op2);
        break;
    }
    return resultado;
  }
});
