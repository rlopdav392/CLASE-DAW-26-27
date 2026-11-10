let numero = parseInt(prompt("Introduzca un número: "));


//console.log(typeof(numero));

//Valido que lo ha insertado el usuario es número

if (Number.isNaN(numero)){
    console.log("no es un numero");
} else{
    console.log("es un numero");
}

//Otra forma de validar si lo que está leyendo de la entrada es número o no

if (!Number.isInteger(numero)){
    console.log("no es un numero");
} else{
    console.log("es un numero");
}


