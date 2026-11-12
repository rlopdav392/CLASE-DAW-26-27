console.log("arreglo3.js");

//DESTRUCTURING

//destructuring de objetos: creo variable y asigna valor en una  misma instrucción
let estudiante_1 = {
  nombre: "juan",
  edad: "20",
};

let { nombre, edad } = estudiante_1;
console.log(nombre);
console.log(edad);

//destructuring de arrays
let array_numeros = [1, 2, 3, 4, 5];
let [pos1, pos2] = array_numeros;
console.log(pos1);
console.log(pos2);

let [, , pos3] = array_numeros;
console.log(pos3);

console.log("aquí");
let array_numeros2 = [1, 2, 3, 4, 5];
// REST OPERATOR
let [pos11, pos22, ...arreglo] = array_numeros2;
console.log(pos11);
console.log(pos22);
console.log(arreglo);
