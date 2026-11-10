# EXPLICACIONES

## CONDICIONALES 4 - V1: arrays: find vs filter

| `find()`                                   | `filter()`                                   |
| ------------------------------------------ | -------------------------------------------- |
| Busca un elemento                          | Filtra elementos                             |
| Devuelve el **primer elemento** que cumple | Devuelve **todos los elementos** que cumplen |
| Devuelve un elemento                       | Devuelve un **array**                        |
| Si no encuentra nada → `undefined`         | Si no encuentra nada → `[]`                  |

## Ejemplo

```js
const numeros = [4, 7, 10, 7, 15];

numeros.find((numero) => numero === 7);
// 7

numeros.filter((numero) => numero === 7);
// [7, 7]
```
