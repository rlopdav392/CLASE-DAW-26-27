//concatenar arrays con concat vs spread operator

const listado_meses = ["enero", "febrero", "marzo", "abril", "mayo"];
const listado_meses2 = ["junio", "julio", "agosto", "septiembre", "octubre"];

union = listado_meses.concat(listado_meses2);
console.log(union);

//SPREAD OPERATOR
union2 = [...listado_meses, ...listado_meses2];
console.log(union2);

//mira, otra alternativa al push-pop, pues el spread operator, que para mi es más fácil
union3 = [...listado_meses, ...listado_meses2, "noviembre", "diciembre"];
console.log(union3);

//Y ahora en objetos
let listado_estudiantes = [
  { nombre: "juan", edad: 20 },
  { nombre: "juan2", edad: 20 },
  { nombre: "juan3", edad: 20 },
  { nombre: "juan4", edad: 23 },
  { nombre: "juan5", edad: 24 },
];

otro_estudiante = { nombre: "juan 7", edad: 40 };
union_estudiantes = [otro_estudiante, ...listado_estudiantes];
console.table(union_estudiantes);
