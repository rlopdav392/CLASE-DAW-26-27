const main = () => {
  //ZONA DE CARGA DOM Y DECLARACIÓN
  const btn1 = document.querySelector("#button1");
  const btn2 = document.querySelector("#button2");
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");

  //ZONA DE EVENTOS
  const handleClickP1 = () => {
    let message = `<h3> hola que tal, estoy en primer párrafo </h3>`;
    printMessageDOM(p1, message);
  };

  btn1.addEventListener("click", handleClickP1);

  const handleClickP2 = () => {
    let message = `<h3> hola que tal,estoy en segundo párrafo </h3>`;
    printMessageDOM(p2, message);
  };

  btn2.onclick = handleClickP2;

  function printMessageDOM(componentDOM, message) {
    componentDOM.innerHTML += message;
  }
};

document.addEventListener("DOMContentLoaded", main);
