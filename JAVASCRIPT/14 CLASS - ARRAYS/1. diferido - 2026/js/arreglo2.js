console.log("arreglo2.js");
//RECORRIENDO ARRAYS
//AGREGANDO NUEVOS VALORES AL ARRAY: push, pop, unshift 

let numeros=[1,2,3,4,5];

//Reccorro los arrays
for (let i=0; i < numeros.length; i++){
    console.log(numeros[i]);
}

//agregando nuevos valores al array
numeros[5] = 6;
console.table(numeros);

//push (añade al final) - unshi(ft (pone siempre al principio) <> pop (elimina del final) - shift (elimina del principio)
let array_estudiantes = [];

let estudiante1= {nombre:"juan", edad:"18"};
let estudiante2= {nombre:"alberto", edad:"19"};
let estudiante3= {nombre:"ana", edad:"20"};
array_estudiantes.push(estudiante1);
console.table(array_estudiantes);
array_estudiantes.push(estudiante2);
array_estudiantes.unshift(estudiante3);
console.table(array_estudiantes);

array_estudiantes.shift();
console.table(array_estudiantes);

/*
array_estudiantes.pop();
console.table(array_estudiantes);

array_estudiantes.pop();
console.table(array_estudiantes);
*/

//splice (posición de inicio a cortar, número de elementos a cortar)
let array_numeros = [1,2,3,4,5,6];
array_numeros.splice(1,2);
//delete array_numeros[1]
console.table(array_numeros);