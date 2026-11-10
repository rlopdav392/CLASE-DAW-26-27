let numero = 20;
let string1 = "string 1s";
let string2 = "string 2s";

//CONVERSIONES Y CONSULTAS DE TIPOS
console.log(numero.toString());
console.log(typeof numero);
console.log(typeof numero.toString());

//CONVERSIONES A MAYUS/MINUS
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());

//CALCULAR LONGITUD
console.log(string1.length);

//CONCATENAR
console.log(string1.concat("fsdgdsf"));

//MÉTODOS DE BUSQUEDA QUE DEVUELVE LA POSICIÓN indexOf === search,  lastindexof
console.log(string1.indexOf("mundo"));
console.log(string1.indexOf("stri"));
console.log(string1.search("xxx"));
console.log(string1.search("stri"));
console.log(string1.lastIndexOf("s"));
console.log(string1.indexOf("s"));

//MÉTDO DE BÚSQUEDA SUBSTRING
console.log(string1.substring(0, 3));
console.log(string1.charAt(5));
console.log(string1.slice(5, 6));
console.log(string1.charAt(5));
console.log(string1.slice(0, 3));

//MÉTODO INCLUDE
console.log(string1.includes("kk"));
console.log(string1.includes("str"));
console.log(string1.startsWith("str"));
console.log(string1.endsWith("s"));

//METODO DE REEMPLAZO
console.log(string1.replace("str", "hola"));

//MÉTODO DE QUITAR ESPACIOS
let correo = "    kkjfg@gmail.com";
console.log(correo.trim());
console.log(correo.trim().length);

//CONVERSIÓN A ARRAY
let string3 = "jkdfs kflkgldf fdljmglñdf";
let array3 = string3.split(" ");
console.log(array3[2]);
