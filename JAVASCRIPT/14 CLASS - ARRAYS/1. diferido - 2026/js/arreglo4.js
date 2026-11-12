console.log("arreglo4.js");
//iterando arrays con for, forEach y map clones

let listado_estudiantes = [
  { nombre: "juan", edad: 20 },
  { nombre: "juan2", edad: 21 },
  { nombre: "juan3", edad: 22 },
  { nombre: "juan4", edad: 23 },
  { nombre: "juan5", edad: 24 },
];

for (let i = 0; i < listado_estudiantes.length; i++) {
  console.log(
    ` ${listado_estudiantes[i].nombre} con edad ${listado_estudiantes[i].edad}`,
  );
}

//utilizando el foreach propio de los arrays
listado_estudiantes.forEach(function (elemento) {
  console.log(` ${elemento.nombre} con edad ${elemento.edad}`);
});

listado_estudiantes.forEach(function (elemento, posicion) {
  console.log(` ${elemento.nombre} con edad ${elemento.edad}`);
  console.log("posición: " + posicion);
});

//map por si lo veis hace lo mismo que foreach, pero si se usa con un return devuelve una copia
//https://www.aluracursos.com/blog/javascript-cuando-debo-usar-foreach-y-map

const copia_estudiantes = listado_estudiantes.map(function (elemento) {
  return elemento.nombre;
});

console.table(listado_estudiantes);
console.table(copia_estudiantes);

const copia_estudiantes2 = listado_estudiantes.map((elemento) => {
  return elemento.nombre;
});

console.table(copia_estudiantes2);

const copia_estudiantes3 = listado_estudiantes.map(
  (elemento) => elemento.nombre,
);

console.table(copia_estudiantes3);
