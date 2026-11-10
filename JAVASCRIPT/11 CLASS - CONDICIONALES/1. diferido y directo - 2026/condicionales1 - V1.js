//OPERADOR TERNARIO
//veremos solo en un if normal, un if anidado no es muy común verlo en formato ternario así que pasamos de él
//condición ? expr1 : expr2
let edadSinConvertir = prompt("Introduce tu edad: ");
console.log(edadSinConvertir);
let edad = Number.parseInt(edadSinConvertir);
console.log(edad);

if (Number.isNaN(edad)) {
  console.log("no has introducido un número");
} else {
  edad >= 18 ? mensaje("mayor") : mensaje("menor");
}

function mensaje(palabra) {
  console.log("Eres " + palabra + " de edad");
}
