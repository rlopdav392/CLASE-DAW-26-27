document.addEventListener("DOMContentLoaded", () => {
  // ZONA DE DECLARACIÓN DE VARIABLES / CONSTANTES
  const articulos = [
    document.querySelector("#articulo1"),
    document.querySelector("#articulo2"),
    document.querySelector("#articulo3"),
  ];
  const btnMostrar = document.querySelector("#btnMostrar");
  const btnResetear = document.querySelector("#btnResetear");
  const listaCompra = document.querySelector("#listaCompra");

  // ZONA DE EVENTOS
  btnMostrar.addEventListener("click", mostrarLista);
  btnResetear.addEventListener("click", resetearLista);

  // ZONA DE FUNCIONES PRINCIPALES
  function mostrarLista() {
    const valores = obtenerArticulos(articulos);
    if (hayVacios(valores)) {
      alert("has de completar los 3 artículos");
      return;
    }
    listaCompra.textContent = generarMensajeLista(valores);
  }

  function resetearLista() {
    articulos.forEach((articulo) => {
      articulo.value = "";
    });
    listaCompra.textContent = "---";
  }

  // ZONA DE FUNCIONES AUXILIARES / REUTILIZABLES
  function obtenerArticulos(lista) {
    return lista.map((articulo) => articulo.value.trim());
  }

  function hayVacios(valores) {
    return valores.includes("");
  }

  function generarMensajeLista(valores) {
    return valores
      .map((valor, indice) => `${indice + 1}. ${valor}`)
      .join("\n");
  }
});
