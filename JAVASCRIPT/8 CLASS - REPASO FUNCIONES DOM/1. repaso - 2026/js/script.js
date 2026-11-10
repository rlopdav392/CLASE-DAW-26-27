document.addEventListener("DOMContentLoaded", main);

function main() {
  //DECLARACIÓN DE VARIABLES - COMPONENTES
  const compUsuario = document.getElementById("nombreusuario");
  const compSalida = document.getElementById("salida");
  const buttonSaludar = document.querySelector("#buttonSaludar");

  //ZONA DE EVENTOS
  buttonSaludar.addEventListener("click", saludar);

  //ZONA DE FUNCIONES
  function saludar() {
    let nombreUsuario = compUsuario.value.trim();
    if (isEmpty(nombreUsuario)) {
      alert("has de introducir algo");
    } else {
      saludando(compSalida, nombreUsuario);
    }
  }

  function isEmpty(user) {
    return user.trim() == "";
  }

  function saludando(componenteDOM, user) {
    let mensaje = `hola ${user}`;
    componenteDOM.textContent = mensaje;
  }
}
