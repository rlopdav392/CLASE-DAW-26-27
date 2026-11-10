//declaración de un array vacío
array_respuestas = [];

//insertar valores en el array
array_respuestas.push("hola");
array_respuestas.push("adios");
array_respuestas.push("");


//comprobar si el array contiene algún campo en blanco
if (array_respuestas.includes("")){
    console.log("el array tiene algún campo vacío");
}
else
{
    console.log("todos los campos son no vacíos");
}