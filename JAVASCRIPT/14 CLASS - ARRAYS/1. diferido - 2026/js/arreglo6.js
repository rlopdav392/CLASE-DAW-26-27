//para encontrar la primera posición en la que se encuentra un elemento: findIndex

const listado_meses = ['enero','febrero','marzo','abril','mayo'];
const pos_enero = listado_meses.findIndex((elto) => {
return elto == "enero";
});
console.log(pos_enero);

let listado_estudiantes = [
    {nombre: "juan", edad: 20},
    {nombre: "juan2", edad: 20},
    {nombre: "juan3", edad: 20},
    {nombre: "juan4", edad: 23},
    {nombre: "juan5", edad: 24},

];
const pos_juan4 = listado_estudiantes.findIndex((elto) => {
    return elto.nombre == "juan4";  
})

console.log(pos_juan4);

//findindex, solo te trae la posición, filter te trae el objeto en sí, y no el primero sino que todos
let obj_estudiantes_20 = listado_estudiantes.filter(elto => elto.edad == 20);
console.table(obj_estudiantes_20);
console.log("longitud filter: " + obj_estudiantes_20.length);

//find es como filter pero solo te trae el primero
obj_estudiantes_20 = listado_estudiantes.find(elto => elto.edad == 20);

console.table(obj_estudiantes_20);
console.log("longitud find: " + obj_estudiantes_20.length);