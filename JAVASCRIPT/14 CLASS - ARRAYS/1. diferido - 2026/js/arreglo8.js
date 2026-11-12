// ==========================================
// 1. SPREAD OPERATOR (...) → Expandir
// ==========================================

const frutas = ["manzana", "pera", "uva"];

const masFrutas = [...frutas, "mango", "kiwi"];

console.log(masFrutas);
// ["manzana", "pera", "uva", "mango", "kiwi"]

console.log(frutas);
// ["manzana", "pera", "uva"]

const botones = document.querySelectorAll("button");

// Convertir NodeList en array
const arrayBotones = [...botones];

console.log(arrayBotones);
console.log(Array.isArray(arrayBotones)); // true

// ==========================================
// 2. REST OPERATOR (...) → Agrupar
// ==========================================

const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, ...resto] = numeros;

console.log(primero); // 10
console.log(segundo); // 20
console.log(resto); // [30, 40, 50]

// ==========================================
// 3. DESESTRUCTURACIÓN DE OBJETOS
// ==========================================

const alumno = {
  nombre: "Laura",
  edad: 20,
  curso: "DAW",
  nota: 8.5,
};

const { nombre, edad, curso } = alumno;

console.log(nombre); // Laura
console.log(edad); // 20
console.log(curso); // DAW
