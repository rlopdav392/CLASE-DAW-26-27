const primeraCard = document.querySelector(".card");

primeraCard.addEventListener("click", delegacionEventos);

function delegacionEventos(e) {
  console.log(e.target);
  if (e.target.classList.contains("categoria")) {
    console.log("has clickado en categoria");
  } else if (e.target.classList.contains("precio")) {
    console.log("has clicado en precio");
  } else if (e.target.classList.contains("titulo")) {
    console.log("has clickado en titulo");
  }
}
