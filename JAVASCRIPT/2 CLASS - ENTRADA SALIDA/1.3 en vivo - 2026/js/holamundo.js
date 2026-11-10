function holaMundo() {
  alert("hola mundo");
}

function manipularDOM() {
  const nombre = prompt("cual es tu nombre");
  document.querySelector("div").innerHTML = `Bienvenida ${nombre}`;
}
