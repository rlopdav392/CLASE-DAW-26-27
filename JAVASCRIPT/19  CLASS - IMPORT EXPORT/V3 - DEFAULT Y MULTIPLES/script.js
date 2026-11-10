import multiplicar, { sumar, restar } from "./utils.js";

const a = 5;
const b = 3;

console.log("Suma:", sumar(a, b));
console.log("Resta:", restar(a, b));
console.log("Multiplicación:", multiplicar(a, b));

const resultadoDiv = document.createElement("div");
resultadoDiv.innerHTML = `
  <p>Suma: ${sumar(a, b)}</p>
  <p>Resta: ${restar(a, b)}</p>
  <p>Multiplicación: ${multiplicar(a, b)}</p>
`;

/* const sumaP = document.createElement("p");
sumaP.textContent = `Suma: ${sumar(a, b)}`;
resultadoDiv.appendChild(sumaP);

const restaP = document.createElement("p");
restaP.textContent = `Resta: ${restar(a, b)}`;
resultadoDiv.appendChild(restaP);

const multP = document.createElement("p");
multP.textContent = `Multiplicación: ${multiplicar(a, b)}`;
resultadoDiv.appendChild(multP); */

document.body.appendChild(resultadoDiv);
