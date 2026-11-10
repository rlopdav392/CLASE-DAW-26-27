const header = document.getElementsByClassName("header");
console.log(header.length);

const hero = document.getElementsByClassName("hero");
console.log(hero.length);

const contenedor = document.getElementsByClassName("contenedor");
console.log(contenedor.length);

const contenedorArray = [...contenedor];
console.log(Array.isArray(contenedorArray));

const contenedorArray2 = Array.from(contenedor);
console.log(Array.isArray(contenedorArray2));

contenedorArray.forEach((elto, pos) => {
  console.log(`elto con clas contenedor: ${pos} ${elto.className}`);
});

const noExiste = document.getElementsByClassName("no-existe");
console.log(noExiste.length);

const form = document.getElementById("formulario");
console.log(form.action);
