# Promesas en JavaScript (resumen)

## ¿Qué es una promesa?

Una **promesa** es un objeto que representa un valor que **todavía no tienes, pero tendrás en el futuro** (o un error si algo sale mal).

Es como el ticket que te dan en un restaurante de comida rápida: no tienes la comida aún, pero el ticket te garantiza que te avisarán cuando esté lista… o cuando se haya acabado.

```js
const promesa = fetch("http://localhost:3000/api/frutas");
console.log(promesa); // Promise { <pending> } → aún no hay datos
```

## Los estados de una promesa

Una promesa pasa por estos estados:

| Estado | Significado | Ejemplo con `fetch` |
|---|---|---|
| **pending** (pendiente) | La operación está en marcha, aún no hay resultado | La petición ha salido y se espera respuesta |
| **fulfilled** (cumplida) | Terminó bien y tiene un valor | Llegó la respuesta del servidor |
| **rejected** (rechazada) | Terminó con un error | Error de red, servidor apagado |

```
              ┌──→ fulfilled (valor)
pending ──────┤
              └──→ rejected (error)
```

- Cuando una promesa ya no está en *pending* (es decir, está *fulfilled* o *rejected*) se dice que está **settled** (resuelta / asentada).
- **Solo cambia de estado una vez.** Una promesa cumplida no puede pasar a rechazada después, ni al revés.

> Ojo: con `fetch`, un **404 o un 500 son *fulfilled***, porque el servidor sí respondió. Solo pasa a *rejected* si no llega respuesta (error de red). Por eso hay que comprobar `res.ok`.

## ¿Por qué se usan en las peticiones HTTP?

Porque una petición HTTP **tarda un tiempo que no conoces**: puede tardar 20 ms o 5 segundos, o no responder nunca.

JavaScript tiene **un solo hilo**. Si esperase la respuesta bloqueando el programa, la página se congelaría: no podrías hacer clic, escribir ni hacer scroll hasta que llegase.

Con una promesa, JavaScript:

1. Lanza la petición.
2. Sigue ejecutando el resto del código sin esperar.
3. Cuando llega la respuesta, ejecuta lo que le dijiste que hiciera con ella.

```js
console.log("1. Antes del fetch");

fetch("http://localhost:3000/api/frutas")
  .then((res) => res.json())
  .then((frutas) => console.log("3. Frutas:", frutas));

console.log("2. Después del fetch");

// Salida:
// 1. Antes del fetch
// 2. Después del fetch
// 3. Frutas: [...]
```

### ¿Por qué hay dos promesas (`fetch` y `res.json()`)?

1. `fetch()` se cumple cuando llegan las **cabeceras** de la respuesta (el código de estado, etc.).
2. `res.json()` es otra promesa porque el **cuerpo** puede seguir llegando por la red y además hay que convertirlo de texto a objeto JavaScript.

## Cómo usar una promesa

### Con `.then()` y `.catch()`

```js
fetch("http://localhost:3000/api/frutas")
  .then((res) => {
    if (!res.ok) throw new Error("Error HTTP " + res.status);
    return res.json();
  })
  .then((frutas) => console.log(frutas))   // fulfilled
  .catch((err) => console.error(err));     // rejected
```

### Con `async` / `await` (más legible)

`await` pausa **solo esa función** hasta que la promesa se resuelve; el resto de la página sigue funcionando.

```js
async function cargarFrutas() {
  try {
    const res = await fetch("http://localhost:3000/api/frutas");
    if (!res.ok) throw new Error("Error HTTP " + res.status);
    const frutas = await res.json();
    console.log(frutas);
  } catch (err) {
    console.error("Algo falló:", err.message);
  }
}
```

## ¿Por qué un `import` normal no usa promesas?

```js
import array_frutas from "./data.json" with { type: "json" };
import express from "express";
```

Un `import` estático (arriba del archivo) **se resuelve antes de que se ejecute tu código**:

1. JavaScript lee el archivo y detecta todos los `import`.
2. Carga todos esos módulos (y los módulos que estos importan).
3. **Solo cuando todo está cargado**, empieza a ejecutar tu código.

Así que cuando tu código se ejecuta, `array_frutas` **ya está disponible**. No hay nada que esperar, por eso no necesitas promesa.

Además, en tu backend el `data.json` se lee **del disco una sola vez al arrancar**, no se pide por la red en cada uso.

### Comparación

| | `import` estático | `fetch()` |
|---|---|---|
| ¿Cuándo ocurre? | Antes de ejecutar el código | Mientras el código se ejecuta |
| ¿Cuántas veces? | Una, al cargar el módulo | Cada vez que lo llamas |
| ¿Datos fijos o cambiantes? | Fijos (lo que hay en el archivo al arrancar) | Actuales (lo que responda el servidor en ese momento) |
| ¿Devuelve promesa? | No | Sí |

### Excepción: `import()` dinámico

Si usas `import` **como función**, dentro del código, sí devuelve una promesa, porque se carga en mitad de la ejecución:

```js
const modulo = await import("./utilidades.js");
modulo.saludar();
```

Se usa para cargar código solo cuando hace falta (por ejemplo, al pulsar un botón).

## Resumen rápido

- **Promesa** = valor que llegará en el futuro (o un error).
- **Estados**: *pending* → *fulfilled* o *rejected*. Solo cambia una vez.
- **HTTP usa promesas** porque la red es lenta e impredecible, y JavaScript no puede quedarse bloqueado esperando.
- **`import` estático no usa promesas** porque se carga antes de ejecutar el código: cuando lo usas, ya está listo.
- **`import()` dinámico sí** devuelve una promesa.
