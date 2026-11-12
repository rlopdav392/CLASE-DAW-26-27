# `...` en JavaScript: REST, SPREAD y destructuración

## La idea clave

Los tres puntos `...` son **el mismo símbolo con dos significados opuestos**. Para saber cuál es, solo hay que mirar **dónde está escrito**:

| Palabra | Idea | Qué hace |
| --- | --- | --- |
| **REST** (resto) | **RECOGER** | Junta varios valores sueltos **en un array** |
| **SPREAD** (esparcir) | **EXPANDIR** | Saca los valores de un array (u objeto) **y los deja sueltos** |

> 🧠 **Truco para recordar:**
> - **REST** = "recoger lo que **resta**" → mete cosas **dentro** de un array.
> - **SPREAD** = "**esparcir**" como mantequilla → saca cosas **fuera** del array.

---

## 1. REST: recoger valores en un array

### 1.1 En los parámetros de una función

Se usa cuando no sabemos cuántos argumentos nos van a pasar. **Tiene que ser siempre el último parámetro.**

```js
function listadoFrutas(f1, f2, ...resto_frutas) {
  console.log("fruta 1: " + f1);
  console.log("fruta 2: " + f2);
  console.log("resto de frutas: ", resto_frutas);
}

listadoFrutas("melon", "sandia");
// f1 = "melon", f2 = "sandia", resto_frutas = []   (array vacío)

listadoFrutas("melon", "sandia", "coco");
// resto_frutas = ["coco"]

listadoFrutas("melon", "sandia", "coco", "naranja");
// resto_frutas = ["coco", "naranja"]
```

Los dos primeros argumentos van a `f1` y `f2`. **Todo lo que sobre** se recoge en el array `resto_frutas`.

Otro ejemplo típico, una función que suma cualquier cantidad de números:

```js
function sumar(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(sumar(1, 2));        // 3
console.log(sumar(1, 2, 3, 4));  // 10
```

❌ **Error típico:** el rest no puede ir en medio.

```js
function mal(...resto, ultimo) { }   // SyntaxError
```

### 1.2 En la destructuración de arrays (ver apartado 3)

```js
const [primero, ...resto] = [1, 2, 3, 4];
// primero = 1
// resto = [2, 3, 4]
```

### 1.3 En la destructuración de objetos (ver apartado 3)

```js
const { nombre, ...otrosDatos } = { nombre: "Ana", edad: 30, ciudad: "Málaga" };
// nombre = "Ana"
// otrosDatos = { edad: 30, ciudad: "Málaga" }
```

---

## 2. SPREAD: expandir un array u objeto

### 2.1 En la llamada a una función

Convierte un array en una lista de argumentos sueltos.

```js
let frutas = ["manzana", "fresa"];

listadoFrutas(...frutas, "melon", "sandia", "coco", "naranja");
```

JavaScript lo lee así:

```js
listadoFrutas("manzana", "fresa", "melon", "sandia", "coco", "naranja");
//             f1         f2       resto_frutas = ["melon","sandia","coco","naranja"]
```

Otro ejemplo muy útil, `Math.max` necesita números sueltos, no un array:

```js
const notas = [7, 9, 4, 10, 6];

console.log(Math.max(notas));      // NaN  ❌ (le pasamos un array)
console.log(Math.max(...notas));   // 10   ✅ (le pasamos 7, 9, 4, 10, 6)
```

### 2.2 Unir arrays (alternativa a `concat`)

```js
const listado_meses = ["enero", "febrero", "marzo", "abril", "mayo"];
const listado_meses2 = ["junio", "julio", "agosto", "septiembre", "octubre"];

// Con concat
const union = listado_meses.concat(listado_meses2);

// Con spread (misma salida, más fácil de leer)
const union2 = [...listado_meses, ...listado_meses2];
```

### 2.3 Añadir elementos al principio, al final o en medio

Es una alternativa a `push`, `unshift`...: escribimos el array nuevo con lo que queramos.

```js
// Al final
const union3 = [...listado_meses, ...listado_meses2, "noviembre", "diciembre"];

// Al principio
const conPrimero = ["diciembre del año pasado", ...listado_meses];

// En medio
const frutas = ["manzana", "pera"];
const masFrutas = ["fresa", ...frutas, "uva"]; // ["fresa","manzana","pera","uva"]
```

**Ventaja:** no modifica el array original, crea uno nuevo.

### 2.4 Copiar un array

```js
const original = [1, 2, 3];
const copia = [...original];

copia.push(4);
console.log(original); // [1, 2, 3]       (no cambia)
console.log(copia);    // [1, 2, 3, 4]
```

⚠️ **Sin spread** `const copia = original;` **no copia**, solo crea otro nombre para el mismo array.

### 2.5 Con arrays de objetos

```js
let listado_estudiantes = [
  { nombre: "juan", edad: 20 },
  { nombre: "juan2", edad: 20 },
];

let otro_estudiante = { nombre: "juan 7", edad: 40 };

let union_estudiantes = [otro_estudiante, ...listado_estudiantes];
// [ {juan 7}, {juan}, {juan2} ]
```

### 2.6 Con objetos

Copiar, añadir y modificar propiedades:

```js
const persona = { nombre: "Ana", edad: 30 };

// Copiar
const copia = { ...persona };

// Añadir una propiedad
const conCiudad = { ...persona, ciudad: "Málaga" };
// { nombre: "Ana", edad: 30, ciudad: "Málaga" }

// Modificar una propiedad (la última gana)
const cumple = { ...persona, edad: 31 };
// { nombre: "Ana", edad: 31 }

// Unir dos objetos
const contacto = { telefono: "600000000" };
const ficha = { ...persona, ...contacto };
// { nombre: "Ana", edad: 30, telefono: "600000000" }
```

> 💡 **El orden importa:** si una propiedad aparece dos veces, **gana la que se escribe después**.
> `{ ...persona, edad: 31 }` ✅ cambia la edad.
> `{ edad: 31, ...persona }` ❌ la edad vuelve a ser 30.

### 2.7 Convertir un texto en un array de letras

```js
const letras = [..."hola"];
console.log(letras); // ["h", "o", "l", "a"]
```

---

## 3. Destructuración: sacar valores de arrays y objetos

Destructurar es **sacar valores de un array u objeto y guardarlos en variables** en una sola línea.

### 3.1 Destructuración de arrays (por **posición**)

```js
const colores = ["rojo", "verde", "azul"];

// Sin destructurar
const c1 = colores[0];
const c2 = colores[1];

// Destructurando
const [primero, segundo] = colores;
console.log(primero); // "rojo"
console.log(segundo); // "verde"
```

**Saltar elementos** (dejando un hueco con la coma):

```js
const [primero, , tercero] = colores;
// primero = "rojo", tercero = "azul"
```

**Con rest** (recoger el resto):

```js
const [cabeza, ...cola] = [1, 2, 3, 4];
// cabeza = 1
// cola = [2, 3, 4]
```

**Intercambiar dos variables** (¡muy útil!):

```js
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```

### 3.2 Destructuración de objetos (por **nombre**)

Aquí no importa el orden, sino que **el nombre de la variable coincida con el de la propiedad**.

```js
const estudiante = { nombre: "juan", edad: 20, ciudad: "Madrid" };

// Sin destructurar
const nombre1 = estudiante.nombre;
const edad1 = estudiante.edad;

// Destructurando
const { nombre, edad } = estudiante;
console.log(nombre); // "juan"
console.log(edad);   // 20
```

**Renombrar** la variable (`propiedad: nuevoNombre`):

```js
const { nombre: nombreAlumno } = estudiante;
console.log(nombreAlumno); // "juan"
```

**Valor por defecto** (por si la propiedad no existe):

```js
const { pais = "España" } = estudiante;
console.log(pais); // "España"
```

**Con rest** (recoger el resto de propiedades):

```js
const { nombre, ...resto } = estudiante;
// nombre = "juan"
// resto = { edad: 20, ciudad: "Madrid" }
```

**Objetos anidados:**

```js
const persona = { nombre: "Ana", direccion: { ciudad: "Málaga", cp: 29000 } };

const {
  direccion: { ciudad },
} = persona;
console.log(ciudad); // "Málaga"
```

### 3.3 Destructuración en los parámetros de una función

**Con destructuración** (la función recibe el objeto y saca `nombre` y `edad` directamente en los parámetros):

```js
function saludar({ nombre, edad }) {
  console.log("Hola " + nombre + ", tienes " + edad + " años");
}

saludar({ nombre: "Ana", edad: 30 });
```

**Forma tradicional** (la función recibe el objeto entero y accedemos a sus propiedades con el punto):

```js
function saludar(persona) {
  console.log("Hola " + persona.nombre + ", tienes " + persona.edad + " años");
}

saludar({ nombre: "Ana", edad: 30 });
```

**Tradicional, guardando en variables** (el paso intermedio que la destructuración hace por nosotros):

```js
function saludar(persona) {
  const nombre = persona.nombre;
  const edad = persona.edad;
  console.log("Hola " + nombre + ", tienes " + edad + " años");
}

saludar({ nombre: "Ana", edad: 30 });
```

Las tres versiones hacen **exactamente lo mismo** y muestran `Hola Ana, tienes 30 años`. La destructuración solo ahorra escribir `persona.` cada vez.

---

## 4. Resumen: ¿cómo sé si es REST o SPREAD?

| Dónde aparece `...` | Es | Qué hace |
| --- | --- | --- |
| Último parámetro al **declarar** una función: `function f(a, ...resto)` | **REST** | Recoge los argumentos sobrantes en un array |
| A la **izquierda** de `=` al destructurar: `const [a, ...resto] = arr` | **REST** | Recoge los elementos sobrantes |
| Al **llamar** a una función: `f(...arr)` | **SPREAD** | Expande el array en argumentos sueltos |
| Dentro de un **array** nuevo: `[...a, ...b]` | **SPREAD** | Expande los elementos dentro del nuevo array |
| Dentro de un **objeto** nuevo: `{ ...a, x: 1 }` | **SPREAD** | Expande las propiedades dentro del nuevo objeto |

> 🔑 **Regla de oro:**
> - Si `...` está donde **se recibe** (parámetros o lado izquierdo del `=`) → **REST** (recoge).
> - Si `...` está donde **se usa o se construye** (llamadas, `[ ]`, `{ }` a la derecha) → **SPREAD** (expande).

---

## 5. ⚠️ Cuidado: la copia es superficial

El spread copia **un solo nivel**. Si dentro hay objetos o arrays, **se comparte la referencia**, no se duplican.

```js
const listado_estudiantes = [{ nombre: "juan", edad: 20 }];
const copia = [...listado_estudiantes];

copia[0].edad = 99;

console.log(listado_estudiantes[0].edad); // 99 😱 (también cambió en el original)
```

El array `copia` es nuevo, pero los objetos de dentro son **los mismos**.
