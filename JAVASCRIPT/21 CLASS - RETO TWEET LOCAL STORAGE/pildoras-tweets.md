# Ejercicio: Tweets con localStorage y delegación de eventos

## Objetivo

Crear una pequeña aplicación para escribir tweets. Los tweets se muestran en pantalla (**DOM**) y se guardan en el navegador (**localStorage**), de forma que no se pierden al recargar la página.

---

## ¿Qué es un tweet?

Un tweet es un **objeto** con dos atributos:

| Atributo | Descripción                   |
| -------- | ----------------------------- |
| `id`     | Identificador único del tweet |
| `texto`  | Contenido del mensaje         |

---

## Requisitos

1. **Al cargar la página:** leer los tweets guardados en `localStorage` y mostrarlos en el DOM.
2. **Al pulsar _Agregar_:**
   - Si el mensaje está vacío, mostrar un mensaje de error.
   - Si no, añadir un tweet nuevo **tanto al DOM como a `localStorage`**.
3. **Al pulsar _Resetear_:** eliminar todos los tweets **tanto del DOM como de `localStorage`**.
4. **Al pulsar en la aspa (✖) de un tweet:** eliminar ese tweet **tanto de `localStorage` como del DOM**.

> ⚠️ **El borrado de un tweet (requisito 4) se ha de hacer con DELEGACIÓN DE EVENTOS.**

---

## Regla de oro: copias espejo

Los tweets de `localStorage` y los del DOM han de ser **copias espejo**: en todo momento deben contener **exactamente los mismos tweets**.

Por eso, **cada vez que cambie uno, hay que cambiar el otro**:

| Acción        | DOM                     | localStorage      |
| ------------- | ----------------------- | ----------------- |
| Cargar página | Se pintan los guardados | Se leen           |
| Agregar       | Se añade el tweet       | Se añade el tweet |
| Eliminar      | Se quita el tweet       | Se quita el tweet |
| Resetear      | Se quitan todos         | Se quitan todos   |

---

## Pistas

### localStorage solo guarda texto

`localStorage` únicamente almacena **strings**, así que para guardar un array de objetos hay que convertirlo, y al leerlo hay que volver a convertirlo:

```js
localStorage.setItem("tweets", JSON.stringify(tweets)); // guardar
let tweets = JSON.parse(localStorage.getItem("tweets")) || []; // leer
```

- `JSON.stringify()` convierte un array u objeto en texto.
- `JSON.parse()` convierte ese texto de nuevo en array u objeto.
- Si todavía no hay nada guardado, `getItem` devuelve `null`. El `|| []` evita el error y empieza con un array vacío.

### Cómo identificar cada tweet

Cada tweet necesita un `id` distinto. `Date.now()` devuelve los milisegundos actuales, así que sirve como identificador único.

Para saber **qué tweet hay que borrar** cuando se pulsa su aspa, guarda el `id` dentro del botón con un atributo `data-id`:

```js
boton.setAttribute("data-id", id);
const id = boton.getAttribute("data-id");
```

### Delegación de eventos

Una opción sería ponerle un addEventListener a cada aspa en el momento de crearla. Funcionaría, pero implica un evento por tweet.

La delegación de eventos hace lo contrario: se pone un único evento en el contenedor (el ul).

```js
lista.addEventListener("click", (event) => {
  if (event.target.classList.contains("borrar-tweet")) {
    // el clic fue en una aspa
  }
});
```

### Quitar un tweet del array

`filter` crea un array nuevo con los elementos que cumplen una condición. Para quitar un tweet, nos quedamos con todos **menos** el que tiene ese `id`.

### Función de apoyo

Piensa en crear una función `sincronizarStorage()` que guarde el array en `localStorage`. La llamarás desde varios sitios y así no repites código.
