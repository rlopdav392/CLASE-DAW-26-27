document.addEventListener("DOMContentLoaded", main);

function main() {
  const button1 = document.querySelector("#button1");
  const button2 = document.querySelector("#button2");
  const p1 = document.querySelector("#salida1");
  const p2 = document.querySelector("#salida2");

  button1.addEventListener("click", () => {
    p1.textContent = "probando onclick button 1 con addeventlistener";
  });

  button2.onclick = () => {
    p2.textContent = "probando onclick";
  };
}
