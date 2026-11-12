"use strict";

//1.for - while - do while
let array_meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

imprimiendo_con_for(array_meses);
imprimiendo_con_while(array_meses);
imprimiendo_con_do_while(array_meses);
imprimiendo_con_forEach(array_meses);

function imprimiendo_con_for(array) {
  console.log("imprimiendo con for");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

function imprimiendo_con_while(array) {
  console.log("imprimiendo con do while");
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
}

function imprimiendo_con_do_while(array) {
  console.log("imprimiendo con do while");
  let i = 0;
  do {
    console.log(array_meses[i]);
    i++;
  } while (i < array_meses.length);
}

function imprimiendo_con_forEach(array) {
  console.log("con for each y la función de callback: arrow function");
  estructura.forEach((elto) => {
    console.log(elto.id + " " + elto.fruta + " " + elto.precio);
  });
}
