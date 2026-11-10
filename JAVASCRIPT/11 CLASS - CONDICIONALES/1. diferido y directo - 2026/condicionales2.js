//IF ELSE IF

//Crea una función que pida la edad de dos personas y que muestre por pantalla quien es menor

let edad1 = parseInt(prompt("introduce la edad de la primera persona: "));
let edad2 = parseInt(prompt("introduce la edad de la segunda persona: "));

edad(edad1, edad2);

function edad(edad1, edad2) {
  if (edad1 > edad2) {
    console.log("la primera persona es mayor que la segunda");
  } else {
    if (edad2 > edad1) {
      console.log("la segunda persona es mayor que la primera");
    } else console.log("tienen la misma edad");
  }
}
