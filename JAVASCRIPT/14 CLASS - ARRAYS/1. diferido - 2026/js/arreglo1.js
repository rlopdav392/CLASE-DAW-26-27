//crear un array y acceder a sus elementos

console.log("arreglo1.js");

const numeros = [1,2,3,4,5];

const meses = new Array("Enero","Febrero");

console.log(numeros);
console.log(meses);
//accedo a los elementos de un arraya
console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]); //undefined

console.table(meses);

let estudiante = {
    nombre: "Roberto",
    id: 145

}

//array bidimensionales
const deTodo = ["animales",100,true,null,{nombre:"juan", apellido:"lopez"},[4,5,6],numeros, estudiante];

console.log(deTodo);
//accedo a los elementos de un array
console.log(deTodo[0]);
console.log(deTodo[4].nombre);
console.log(deTodo[5][0]);






