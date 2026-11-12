"use strict";
//ZONA DE VARIABLES Y CARGA DEL DOM
const form = document.querySelector("#formulario");

const box_dashed = document.querySelector(".dashed");

const input_nombre = document.querySelector("#nombre");
const input_apellidos = document.querySelector("#apellidos");
const input_edad = document.querySelector("#edad");

const error_nombre = document.querySelector("#error_nombre");
const error_apellidos = document.querySelector("#error_apellidos");
const error_edad = document.querySelector("#error_edad");

const p_nombre = document.querySelector("#p_nombre span");
const p_apellidos = document.querySelector("#p_apellidos span");
const p_edad = document.querySelector("#p_edad span");

//ZONA DE EVENTOS
form.addEventListener("submit", procesandoForm);

//MAIN
main();

//ZONA DE FUNCIONES
function main() {
  reset();
}

function reset() {
  box_dashed.style.display = "none";

  error_nombre.textContent = "";
  error_apellidos.textContent = "";
  error_edad.textContent = "";
}

function procesandoForm(evento) {
  // Evita que el formulario recargue la página al enviarse
  evento.preventDefault();

  reset();

  // 1. LEER LOS VALORES
  let nombre = input_nombre.value;
  let apellidos = input_apellidos.value;
  let edad = Number.parseInt(input_edad.value);

  // 2. EMPEZAMOS SUPONIENDO QUE NO HAY ERRORES
  let hayErrores = false;

  // 3. VALIDAR NOMBRE: no puede estar vacío (ni solo espacios)
  if (nombre.trim().length == 0) {
    error_nombre.textContent = "nombre incorrecto";
    error_nombre.style.color = "red";
    hayErrores = true;
  }

  // 4. VALIDAR APELLIDOS: no pueden estar vacíos (ni solo espacios)
  if (apellidos.trim().length == 0) {
    error_apellidos.textContent = "apellidos incorrecto";
    error_apellidos.style.color = "red";
    hayErrores = true;
  }

  // 5. VALIDAR EDAD: tiene que ser un número mayor que 0
  if (Number.isNaN(edad) || edad <= 0) {
    error_edad.textContent = "edad incorrecto";
    error_edad.style.color = "red";
    hayErrores = true;
  }

  // 6. SI NO HAY ERRORES, MOSTRAMOS LOS DATOS
  if (!hayErrores) {
    box_dashed.style.display = "block";
    p_nombre.textContent = nombre;
    p_apellidos.textContent = apellidos;
    p_edad.textContent = edad;
  }
}
