//CARGA DEL DOM

function textoEdad() {
  const edad = document.querySelector("#edad");
  const respuesta1 = document.querySelector("#respuesta1");
  const respuesta2 = document.querySelector("#respuesta2");
  const respuesta3 = document.querySelector("#respuesta3");

  if (edad.value < 18) {
    respuesta1.textContent = "no puede beber alcohol";
    respuesta2.textContent = "no puede ingresar a la fiesta";
    respuesta3.textContent = "no tiene entrada gratis";
  } else {
    respuesta1.textContent = "si puede beber alcohol";
    respuesta2.textContent = "si puede ingresar a la fiesta";
    if (edad.value >= 18 && edad.value <= 30) {
      respuesta3.textContent = "si tiene entrada gratis";
    } else {
      imprimirResultado(respuesta3, "no tiene entrada gratis");
      //respuesta3.textContent = "no tiene entrada gratis";
    }
  }
}

function imprimirResultado(eltoDOM, salida) {
  eltoDOM.textContent = salida;
}
