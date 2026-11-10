# Métodos de arrays

Basado en *Ecosistema JavaScript — Arrays*.

## Qué método usar

Un elto → `find()`.  
Un nuevo array con algunos eltos → `filter()`.  
Un nuevo array con elementos transformados → `map()`.  
El mismo array con los eltos transformados → `forEach()`.

`map()` no modifica directamente el array original; devuelve un array nuevo con los resultados.

Comprueba si un elto existe → `includes()`  
Añade un elto al final del array → `push()`  
Convierte un array en string → `join()`

---

## Cómo se escribe un arrow function

<table>
<thead>
<tr>
<th>Función tradicional</th>
<th>Arrow function corta</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```js
function (numero) {
  return numero > 10;
}
```

</td>
<td>

```js
(numero) => {
  return numero > 10;
}
```

</td>
</tr>
<tr>
<td>

```js
function (numero) {
  return numero > 10;
}
```

</td>
<td>

```js
numero => numero > 10
```

</td>
</tr>
</tbody>
</table>

---

## FIND()

Devuelve el primer elto que cumpla la condición.

<table>
<thead>
<tr>
<th>Forma <code>for</code></th>
<th>Arrow function corta</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```js
const numeros = [4, 12, 7, 20, 15];
let encontrado;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    encontrado = numeros[i];
    break;
  }
}

console.log(encontrado); // 12
```

</td>
<td>

```js
const numeros = [4, 12, 7, 20, 15];
const encontrado = numeros.find(
  numero => numero > 10
);

console.log(encontrado); // 12
```

</td>
</tr>
</tbody>
</table>

---

## FILTER()

Devuelve un array con todos los eltos que cumplan la condición.

<table>
<thead>
<tr>
<th>Forma <code>for</code></th>
<th>Arrow function corta</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```js
const numeros = [4, 12, 7, 20, 15];
const mayores = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 10) {
    mayores.push(numeros[i]);
  }
}

console.log(mayores); // [12, 20, 15]
```

</td>
<td>

```js
const numeros = [4, 12, 7, 20, 15];
const mayores = numeros.filter(
  numero => numero > 10
);

console.log(mayores); // [12, 20, 15]
```

</td>
</tr>
</tbody>
</table>

---

## MAP()

Devuelve un array con todos los eltos del array original transformados.

<table>
<thead>
<tr>
<th>Forma <code>for</code></th>
<th>Arrow function corta</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```js
const numeros = [4, 12, 7, 20, 15];
const dobles = [];

for (let i = 0; i < numeros.length; i++) {
  dobles.push(numeros[i] * 2);
}

console.log(dobles);
// [8, 24, 14, 40, 30]
```

</td>
<td>

```js
const numeros = [4, 12, 7, 20, 15];
const dobles = numeros.map(
  numero => numero * 2
);

console.log(dobles);
// [8, 24, 14, 40, 30]
```

</td>
</tr>
<tr>
<td>

```js
const nombres = ["ana", "luis", "marta"];
const mayusculas = nombres.map(function (nombre) {
  return nombre.toUpperCase();
});

console.log(mayusculas);
// ["ANA", "LUIS", "MARTA"]
```

</td>
<td>

```js
const nombres = ["ana", "luis", "marta"];
const mayusculas = nombres.map(
  nombre => nombre.toUpperCase()
);

console.log(mayusculas);
// ["ANA", "LUIS", "MARTA"]
```

</td>
</tr>
</tbody>
</table>

---

## FOREACH()

A diferencia de `map`, no devuelve un array nuevo, sino que transforma los eltos en el mismo array original.

<table>
<thead>
<tr>
<th>Forma <code>for</code></th>
<th>Arrow function corta</th>
</tr>
</thead>
<tbody>
<tr>
<td>

```js
const numeros = [4, 12, 7, 20, 15];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
```

</td>
<td>

```js
const numeros = [4, 12, 7, 20, 15];

numeros.forEach(
  numero => console.log(numero)
);
```

</td>
</tr>
<tr>
<td>

```js
const nombres = ["Ana", "Luis", "Marta"];

for (let i = 0; i < nombres.length; i++) {
  nombres[i] = nombres[i].toUpperCase();
}

console.log(nombres);
// ["ANA", "LUIS", "MARTA"]
```

</td>
<td>

```js
const nombres = ["Ana", "Luis", "Marta"];

nombres.forEach((nombre, indice) => {
  nombres[indice] = nombre.toUpperCase();
});
```

</td>
</tr>
</tbody>
</table>

---

## INCLUDES()

Comprueba si un elto existe.

```js
const nombres = ["Ana", "Luis", "Marta"];

console.log(nombres.includes("Luis")); // true
console.log(nombres.includes("Pedro")); // false
```

---

## PUSH()

Añade un elto al final del array.

```js
const nombres = ["Ana", "Luis"];
nombres.push("Marta");

console.log(nombres);
// ["Ana", "Luis", "Marta"]
```

---

## JOIN(delimitador)

Convierte un array a un string con ese delimitador.

```js
const nombres = ["Ana", "Luis", "Marta"];
const resultado = nombres.join(", ");

console.log(resultado);
// "Ana, Luis, Marta"
```
