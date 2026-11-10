# JSON: a veces objeto, a veces array

## El problema

Algunas APIs devuelven un **objeto** cuando hay un solo resultado y un **array de objetos** cuando hay varios

## Qué hace realmente `.json()`

`res.json()` solo **parsea**: convierte texto en datos de JavaScript. No decide ni cambia la estructura.

Lo que el servidor envía por la red es texto plano:

```
'{"nombre": "Ana", "edad": 30}'
```

`res.json()` lo convierte en un objeto utilizable:

```javascript
{ nombre: "Ana", edad: 30 }
```

Respeta la forma que ya tiene el texto:

| Texto que envía el servidor | Lo que devuelve `.json()`   |
| --------------------------- | --------------------------- |
| `'{"id": 1}'`               | un objeto `{ id: 1 }`       |
| `'[{"id": 1}, {"id": 2}]'`  | un array de objetos         |
| `'[{"id": 1}]'`             | un array con un solo objeto |

Si el texto empieza por `{`, obtienes un objeto; si empieza por `[`, un array. `.json()` es un traductor: traduce lo que le dan, pero no reescribe el mensaje.

Por eso "decirle a la promesa que lo convierta a JSON" solo significa "interpreta este texto como JSON", **no** "devuélvemelo como array".

## Resumen

1. El servidor decide la forma de los datos, no tu código.
2. `.json()` solo traduce texto a datos; no convierte objetos en arrays.
