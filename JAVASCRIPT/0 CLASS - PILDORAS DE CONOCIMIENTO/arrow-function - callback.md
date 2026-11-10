# Cuándo usar arrow function

Un **callback** es una función que se pasa como **parámetro de entrada** a otra función, para que esa otra función la ejecute **cuando le toque**.

```js
nums.map(n => n * 2);
//       └── callback: función pasada como parámetro de map

btn.addEventListener("click", () => alert("Hola"));
//                            └── callback: función pasada como parámetro
```

Incluso puedes crear tu  **propia** función que reciba un callback:

```js
function repetir(veces, accion) {
  for (let i = 0; i < veces; i++) {
    accion(); // aquí se ejecuta el callback
  }
}

repetir(3, () => console.log("Hola"));
// Hola
// Hola
// Hola
```

`accion` es un parámetro como cualquier otro, solo que en vez de recibir un número o un texto, **recibe una función**. Y `repetir` decide **cuándo** y **cuántas veces** la ejecuta.

---

**cuándo usar arrow function**: **cuando pasas una función como parámetro de entrada de otra función** (un callback).

Esa función que pasas normalmente se escribe como arrow:

```js
nums.map(n => n * 2);
//       ↑ esta es la función que pasas como parámetro

btn.addEventListener("click", () => alert("Hola"));
//                            ↑ igual aquí
```

No es obligatorio (`function` también funciona), pero es lo habitual porque queda más corto y limpio.

---

## Las dos situaciones, lado a lado

### 1. Función **llamada** desde otra función (se ejecuta en ese mismo momento)

```js
function saludar() {
  console.log("Hola");
}

function empezar() {
  saludar(); // ← la llamo yo, se ejecuta YA
}

empezar(); // muestra "Hola" inmediatamente
```

Aquí `saludar()` lleva **paréntesis**: eso significa “ejecútala ahora”.

### 2. Función como **parámetro de entrada** de otra función (callback, se ejecuta más tarde)

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Hola");
});
```

Aquí **no** ejecutamos la función: se la **entregamos** a `addEventListener`. Es como decirle: “guárdate esta función y ejecútala tú cuando alguien haga clic”. Si nadie hace clic, nunca se ejecuta.

---

## El error típico que demuestra la diferencia

```js
function saludar() {
  console.log("Hola");
}

btn.addEventListener("click", saludar); // ✅ se ejecuta al hacer clic
btn.addEventListener("click", saludar()); // ❌ se ejecuta YA, al cargar la página
```

- `saludar` (**sin** paréntesis) = le paso la función, que la ejecute cuando toque.
- `saludar()` (**con** paréntesis) = la ejecuto ahora mismo, y lo que paso es su **resultado**.

---

## Por qué hace falta el callback

Depende del caso. Hay **dos motivos** distintos:

1. **Eventos y temporizadores: no sabemos CUÁNDO.**  
   No podemos llamar a la función nosotros, porque el clic todavía no ha pasado. Así que le damos la función al navegador, y él la ejecuta cuando ocurra el clic o pase el tiempo.

   ```js
   btn.addEventListener("click", () => {
     console.log("Has hecho clic");
   });

   setTimeout(() => {
     console.log("Han pasado 2 segundos");
   }, 2000);
   ```

2. **`map`, `filter`, `forEach`: no sabe QUÉ HACER.**  
   Aquí no hay que esperar a nada: el callback se ejecuta en el momento, una vez por cada elemento. `map` ya sabe recorrer el array, pero no sabe qué hacer con cada elemento. Ese “qué hacer” se lo damos con el callback.

   ```js
   const nums = [1, 2, 3];

   // A cada elemento, multiplícalo por 2
   nums.map(n => n * 2); // [2, 4, 6]

   // A cada elemento, súmale 10
   nums.map(n => n + 10); // [11, 12, 13]
   ```

Lo común a los dos casos: le das tu función a otra función, y es esa otra la que decide **cuándo** y **cuántas veces** ejecutarla.

Y como esas funciones que pasamos suelen ser cortas y solo se usan ahí, se escriben muchas veces como **arrow function**.

