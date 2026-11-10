num1 = "20";
num2 = 20;

console.log(typeof num1);

console.log(typeof num2);

num1 = Number.parseInt(num1);
//num1 = +num1;

console.log(typeof num1);

console.log(Number.isInteger(num1));

//Operadores
// !=, ==, >, =>, <, <=, !== (comparador estricto, incluye tipos), ===

// null, undefined, NaN
// Number.parseInt("hola") => NaN
// let valor;  console.log(valor) => undefined
// let numero = null; console.log(numero) => null
// numero == valor => true, numero === valor => false
