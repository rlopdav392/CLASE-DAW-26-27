import { isEmpty, esEntero } from "./libreria.js";

document.addEventListener("DOMContentLoaded", () => {
  // ZONA DE DECLARACIÓN DE VARIABLES / CONSTANTES
  const nombreAlumno = document.querySelector("#nombreAlumno");
  const precioArticulo = document.querySelector("#precioArticulo");
  const cantidad = document.querySelector("#cantidad");
  const btnCalcular = document.querySelector("#btnCalcular");
  const btnReiniciarOferta = document.querySelector("#btnReiniciarOferta");
  const saludo = document.querySelector("#saludo");
  const resultado = document.querySelector("#resultado");
  const cuentaAtras = document.querySelector("#cuentaAtras");

  let segundosOferta = 15;
  let miIntervalo;


  // ZONA DE EVENTOS
  btnCalcular.addEventListener("click", calcularPedido);
  btnReiniciarOferta.addEventListener("click", reiniciarOferta);

  iniciarOferta();

  // ZONA DE FUNCIONES PRINCIPALES
  function calcularPedido() {
    if (!validarPedido()) {
      return;
    }

    const nombre = nombreAlumno.value.trim();
    saludo.textContent = `Hola, ${nombre}. Bienvenido al kiosco Cierva.`;

    const precio = +precioArticulo.value;
    const unidades = +cantidad.value;
    const total = precio * unidades;

    imprimirDOM(
      `<p>Precio unidad: ${precio} €</p><p>Cantidad: ${unidades}</p><p>Total: ${total} €</p>`,
      resultado,
    );
  }

  function iniciarOferta() {
    cuentaAtras.textContent = segundosOferta;
    miIntervalo = setInterval(decrementarOferta, 1000);
  }

  function decrementarOferta() {
    segundosOferta--;
    cuentaAtras.textContent = segundosOferta;
    if (segundosOferta === 0) {
      finalizarOferta();
    }
  }

  function finalizarOferta() {
    detenerOferta();
    btnCalcular.disabled = true;
    alert("la oferta ha terminado");
    cuentaAtras.textContent = "sin oferta";

  }

  function reiniciarOferta() {
    detenerOferta();
    segundosOferta = 15;
    btnCalcular.disabled = false;
    iniciarOferta();
  }

  // ZONA DE FUNCIONES AUXILIARES / REUTILIZABLES
  function validarPedido() {
    const nombre = nombreAlumno.value.trim();
    const precioTexto = precioArticulo.value.trim();
    const cantidadTexto = cantidad.value.trim();

    if (isEmpty(nombre)) {
      imprimirDOM("<p>el nombre está vacío</p>", resultado);
      return false;
    }
    if (isEmpty(precioTexto)) {
      imprimirDOM("<p>el precio está vacío</p>", resultado);
      return false;
    }
    if (!esEntero(precioTexto)) {
      imprimirDOM("<p>el precio no es un entero</p>", resultado);
      return false;
    }
    if (isEmpty(cantidadTexto)) {
      imprimirDOM("<p>la cantidad está vacía</p>", resultado);
      return false;
    }
    if (!esEntero(cantidadTexto)) {
      imprimirDOM("<p>la cantidad no es un entero</p>", resultado);
      return false;
    }
    if (+precioTexto <= 0 || +cantidadTexto <= 0) {
      imprimirDOM("<p>precio o cantidad incorrectos</p>", resultado);
      return false;
    }
    return true;
  }

  function detenerOferta() {
    clearInterval(miIntervalo);
  }

  function imprimirDOM(mensaje, componenteDOM) {
    componenteDOM.innerHTML = mensaje;
  }
});
