//includes para arreglos o some para objetos
//forma rápida de saber si un elemento se encuentra en un objeto o un arreglo sin tener que recorrerlo con un for
console.log("arreglo5.js");



const listado_meses = ['enero','febrero','marzo','abril','mayo'];
console.log(listado_meses.includes("diciembre"));
console.log(listado_meses.includes("enero"));



let listado_estudiantes = [
    {nombre: "juan", edad: 20},
    {nombre: "juan2", edad: 21},
    {nombre: "juan3", edad: 22},
    {nombre: "juan4", edad: 23},
    {nombre: "juan5", edad: 24},

];

console.log("lala");
let existe_estudiante = listado_estudiantes.some((elto) => {
    return elto.nombre == "juan5";
});
console.log(existe_estudiante);

//Otra forma abreviada de ponerlo:
let existe_estudiante2 = listado_estudiantes.some(elto => elto.nombre == "juan5");
console.log(existe_estudiante2);

//la versión del and sería con every, si todos cumplen la condición pues devolvería true
let todos_mayores_edad = listado_estudiantes.every(estudiante => estudiante.edad >=18);
console.log(todos_mayores_edad);
