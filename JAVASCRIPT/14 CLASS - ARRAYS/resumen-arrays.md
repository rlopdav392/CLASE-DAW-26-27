# Resumen de arrays

## 1. Crear un array y leer una posición

Dos formas de crearlo:

```javascript
const numeros = [1, 2, 3, 4, 5];
const meses = new Array("Enero", "Febrero");
```

La posición empieza en `0`. La última es `array.length - 1`. Si pides una posición que no existe, el resultado es `undefined`.

Un array puede mezclar tipos: texto, número, booleano, `null`, objeto y otro array.

```javascript
const deTodo = ["animales", 100, true, null, { nombre: "juan" }, [4, 5, 6]];
deTodo[4].nombre; // "juan"
deTodo[5][0]; // 4
```

`console.table(array)` lo muestra en forma de tabla.

## 2. Arrays dentro de arrays

```javascript
let cine = [categorias, peliculas];
cine[0][1]; // segundo elemento del primer array
cine[1][2]; // tercer elemento del segundo array
```

El primer corchete elige el array interior. El segundo elige el elemento.

## 3. Recorrer

**`for`.** Controlas el índice a mano.

```javascript
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
```

**`forEach`.** Recorre cada elemento. Puede recibir el elemento, la posición y el array completo. No devuelve un array nuevo.

```javascript
lenguajes.forEach((elto, index, arreglo) => {
  console.log(elto, index);
});
```

**`map`.** Recorre igual, pero el `return` de cada vuelta forma un array nuevo. El original no cambia. Sirve para transformar: sacar solo el nombre, multiplicar por 10, o cambiar un texto y dejar el resto igual.

```javascript
const nombres = estudiantes.map((elemento) => elemento.nombre);
const porDiez = numeros.map((num) => num * 10);
```

La función del `map` puede escribirse de tres maneras, y las tres hacen lo mismo:

```javascript
estudiantes.map((elemento) => {
  return elemento.nombre;
});
estudiantes.map((elemento) => elemento.nombre);
```

`forEach` se usa para hacer algo con cada elemento (pintarlo, imprimirlo). `map` se usa cuando necesitas el array resultante.

## 4. Añadir y quitar

| Método                               | Qué hace                                   | ¿Modifica el original? |
| ------------------------------------ | ------------------------------------------ | ---------------------- |
| `push`                               | Añade al final                             | Sí                     |
| `pop`                                | Quita el último                            | Sí                     |
| `unshift`                            | Añade al principio                         | Sí                     |
| `shift`                              | Quita el primero                           | Sí                     |
| `splice(inicio, cuantos, ...nuevos)` | Corta y, si hace falta, inserta            | Sí                     |
| `array[i] = valor`                   | Escribe en una posición concreta           | Sí                     |
| `delete array[i]`                    | Borra el valor, pero deja el hueco         | Sí                     |
| `filter`                             | Devuelve otro array sin los que no cumplen | No                     |
| `[...array, nuevo]`                  | Copia y añade                              | No                     |
| `slice(inicio, fin)`                 | Copia un trozo. El fin no se incluye       | No                     |

`splice(1, 2)` quita 2 elementos desde la posición 1. `splice(1, 0, "nuevo")` no quita nada e inserta en la posición 1.

`delete` no junta el array: esa posición queda vacía. Para quitar de verdad y obtener un array compacto, se usa `splice` o `filter`.

Añadir sin tocar el original:

```javascript
peliculas2 = ["vampiros", ...peliculas]; // al principio
peliculas3 = [...peliculas, "amelie"]; // al final
```

## 5. Copiar

```javascript
let copia = [...peliculas];
let trozo = array.slice(1, 4);
let unidos = lista1.concat(lista2);
```

Si después haces `push`, `pop`, `sort` o `reverse` sobre la copia, el original se queda igual solo si de verdad copiaste antes. `reverse` y `sort` modifican el array sobre el que se llaman.

Métodos que **no** cambian el original: `map`, `filter`, `slice`, `concat`, `[...array]`.

Métodos que **sí** lo cambian: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`.

## 6. Buscar

| Método                 | Para qué                        | Qué devuelve                   |
| ---------------------- | ------------------------------- | ------------------------------ |
| `includes(valor)`      | Saber si un valor simple está   | `true` o `false`               |
| `some(condicion)`      | Saber si algún objeto cumple    | `true` o `false`               |
| `every(condicion)`     | Saber si todos cumplen          | `true` o `false`               |
| `findIndex(condicion)` | Posición del primero que cumple | El índice, o `-1`              |
| `indexOf(valor)`       | Posición de un valor simple     | El índice, o `-1`              |
| `find(condicion)`      | El primer elemento que cumple   | El elemento, o `undefined`     |
| `filter(condicion)`    | Todos los que cumplen           | Un array, aunque solo haya uno |

`includes` vale para textos y números. Con objetos, `includes` compara la referencia, no el contenido. Para buscar por una propiedad se usa `some`.

```javascript
listado_meses.includes("enero");
estudiantes.some((elto) => elto.nombre === "juan");
estudiantes.every((elto) => elto.edad >= 18);
```

`find` devuelve un elemento. `filter` devuelve un array. Por eso a `filter` se le puede pedir `.length`, y a lo que devuelve `find` no.

Si no hay coincidencia, `findIndex` e `indexOf` dan `-1`. En el ejercicio, la posición que se enseña al usuario es `posicion + 1`, porque las personas cuentan desde 1 y el array desde 0.

## 7. Unir

```javascript
const union = meses.concat(meses2);
const union2 = [...meses, ...meses2, "noviembre", "diciembre"];
const conOtro = [otroEstudiante, ...estudiantes];
```

`concat` y el spread crean un array nuevo. El spread también sirve para colar elementos sueltos en medio de la unión.

## 8. Destructuring

Sacar valores a variables por su posición:

```javascript
let [pos1, pos2] = array_numeros; // los dos primeros
let [, , pos3] = array_numeros; // se salta dos y se queda el tercero
let [a, b, ...resto] = array_numeros; // resto es un array con lo que sobra
```

En objetos se saca por el nombre de la propiedad:

```javascript
let { nombre, edad } = estudiante;
```

## 9. De array a texto y al revés

```javascript
peliculas.join(); // "peli1,peli2,peli3"
"hola,que,tal".split(","); // ["hola", "que", "tal"]
```

`join()` sin argumento usa la coma. `join(", ")` pondría coma y espacio.

## 10. Ordenar

`sort()` sin función ordena como texto. `"10"` queda antes que `"2"`.

Para números:

```javascript
numeros.sort((a, b) => a - b); // menor a mayor
numeros.sort((a, b) => b - a); // mayor a menor
```

`reverse()` da la vuelta al array y lo modifica. En el ejercicio se copia antes:

```javascript
let res = [...un_array];
res.reverse();
```

## 11. Acumular con `reduce`

Recorre el array y se queda con un solo resultado. El segundo argumento es el valor inicial.

```javascript
let carrito = [10, 20, 30, 40];
let total = carrito.reduce((acumulado, numero) => numero + acumulado, 0);
// 100
```

## 12. Rest y spread en funciones

Los tres puntos no significan lo mismo según dónde estén.

**Rest.** Al final de los parámetros, junta en un array los argumentos que sobran.

```javascript
function listadoFrutas(f1, f2, ...resto_frutas) {
  console.log(resto_frutas);
}
listadoFrutas("melon", "sandia", "coco", "naranja");
// resto_frutas = ["coco", "naranja"]
```

**Spread.** Delante de un array, al llamar a la función, lo abre en argumentos sueltos.

```javascript
let frutas = ["manzana", "fresa"];
listadoFrutas(...frutas, "melon", "sandia");
```

El rest de un destructuring (`let [a, b, ...resto]`) es la misma idea: quédate con lo que sobra, dentro de un array.
