# Funciones y sus alias

Algunas funciones de JavaScript se pueden escribir de **dos formas**. Hacen lo mismo: una es el nombre corto (el que usamos en clase) y la otra es el **alias** más largo.

El `window` es el objeto global del navegador. Por eso `alert()` y `window.alert()` son la misma cosa.

| Función | Alias | Para qué sirve |
| --- | --- | --- |
| `parseInt()` | `Number.parseInt()` | Convierte un texto a número entero |
| `parseFloat()` | `Number.parseFloat()` | Convierte un texto a número con decimales |
| `alert()` | `window.alert()` | Muestra un mensaje |
| `prompt()` | `window.prompt()` | Pide un dato al usuario |
| `confirm()` | `window.confirm()` | Pregunta Aceptar / Cancelar |
| `setTimeout()` | `window.setTimeout()` | Ejecuta algo pasado un tiempo |
| `setInterval()` | `window.setInterval()` | Ejecuta algo cada cierto tiempo |
| `console.log()` | `window.console.log()` | Muestra algo en la consola |
| `texto.trimStart()` | `texto.trimLeft()` | Quita espacios al principio |
| `texto.trimEnd()` | `texto.trimRight()` | Quita espacios al final |

En clase nos vale la columna **Función**. Si ves el alias en un código o en la documentación, es **lo mismo**.

```js
parseInt("16");
Number.parseInt("16");
// las dos dan 16

alert("Hola");
window.alert("Hola");
// las dos muestran el mismo mensaje

"  hola".trimStart();
"  hola".trimLeft();
// las dos dan "hola"
```
