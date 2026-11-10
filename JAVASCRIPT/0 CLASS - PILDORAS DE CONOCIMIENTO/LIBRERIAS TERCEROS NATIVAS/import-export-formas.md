# Formas de compartir código entre archivos

Hay **cuatro** maneras que usamos en clase. Las tres últimas son módulos modernos (`type="module"`). La primera **no usa** las palabras `import` / `export`.

---

## 0. Recordatorio: HTML

| Forma | Cómo se carga |
| --- | --- |
| Antigua | Varios `<script src="...">` **sin** `type="module"`. Primero la librería, después el script. |
| Moderna | Un solo `<script type="module" src="script.js">`. El `import` carga el resto. |



---

## 1. Forma antigua (sin `type="module"`, sin `import` / `export`)

No hay `import` ni `export`. Se cargan varios scripts y las funciones quedan **globales**.

**`miLibreria.js`**

```js
function isEmpty(valor) {
  return valor.trim().length === 0;
}

function esEntero(dato) {
  return Number.isInteger(+dato);
}
```

**`script.js`** — se usan directo, sin importar:

```js
if (isEmpty(nombre.value)) {
  alert("vacío");
}
```

**`index.html`** — orden obligatorio (librería **antes**):

```html
<script src="miLibreria.js"></script>
<script src="script.js"></script>
```

Inconvenientes: el orden importa; no se ve de dónde sale cada función; si dos archivos tienen el mismo nombre, uno pisa al otro.

---

## 2. Forma moderna: exports **con nombre** (`import { ... }`)

Cada función se exporta con su nombre. Se importan **solo las que hace falta**, **con llaves**.

**`miLibreria.js`**

```js
export function isEmpty(valor) {
  return valor.trim().length === 0;
}

export function esEntero(dato) {
  return Number.isInteger(+dato);
}
```

**`script.js`**

```js
import { isEmpty, esEntero } from "./miLibreria.js";

if (isEmpty(nombre.value)) {
  alert("vacío");
}
```

Las llaves **no son un objeto**. Significan: “quiero **estas** funciones, por su nombre”. El nombre en el `import` tiene que coincidir con el del `export`.

**`index.html`**

```html
<script type="module" src="script.js"></script>
```

`miLibreria.js` **no** se pone en el HTML: lo trae el `import`.



---

## 3. Forma moderna: importar **todo** con `*`

En vez de listar funciones, se importa el módulo entero y se guarda en un nombre (como un “cajón”).

**`miLibreria.js`** — igual que en el punto 2 (`export function ...`).

**`script.js`**

```js
import * as miLibreria from "./miLibreria.js";

if (miLibreria.isEmpty(nombre.value)) {
  alert("vacío");
}

miLibreria.esEntero("16");
```

Se usa con **punto**: `miLibreria.isEmpty`, como `_.isEmpty` en Lodash.

**HTML:** igual, `type="module"` en el script principal.

---

## 4. Forma moderna: `export default`

Un archivo puede tener **un** valor por defecto (una función, un objeto, una clase…). El `import` va **sin llaves** y **tú eliges el nombre**.

**`miLibreria.js`**

```js
export default function isEmpty(valor) {
  return valor.trim().length === 0;
}
```

**`script.js`** — el nombre puede ser otro:

```js
import isEmpty from "./miLibreria.js";
// también valdría: import estaVacio from "./miLibreria.js";
```

Si exportas **un objeto** por defecto:

```js
function isEmpty(valor) {
  return valor.trim().length === 0;
}

function esEntero(dato) {
  return Number.isInteger(+dato);
}

export default { isEmpty, esEntero };
```

```js
import miLibreria from "./miLibreria.js";

miLibreria.isEmpty(nombre.value);
```

**HTML:** otra vez `type="module"`.

---

## Resumen rápido

| # | Cómo se llama | Librería | Script | HTML |
| --- | --- | --- | --- | --- |
| 1 | Antigua | `function isEmpty` (nada más) | `isEmpty(...)` directo | Varios `<script>` **sin** module |
| 2 | Nombres | `export function isEmpty` | `import { isEmpty } from "./miLibreria.js"` | `type="module"` |
| 3 | Todo con `*` | igual que 2 | `import * as miLibreria from "./miLibreria.js"` y luego `miLibreria.isEmpty` | `type="module"` |
| 4 | Default | `export default function ...` | `import isEmpty from "./miLibreria.js"` (**sin** llaves) | `type="module"` |

### Truco de las llaves

| En la librería | En el script |
| --- | --- |
| `export function isEmpty` | `import { isEmpty } from "..."` |
| `export default function isEmpty` | `import isEmpty from "..."` (sin `{ }`) |
| varios `export function` | `import * as miLibreria from "..."` |

---

## 5. Mezclar `default` + nombres

En el **mismo archivo** puede haber **un** `export default` y varios `export` con nombre.

**`miLibreria.js`**

```js
export default function isEmpty(valor) {
  return valor.trim().length === 0;
}

export function esEntero(dato) {
  return Number.isInteger(+dato);
}

export function esEmail(valor) {
  return valor.includes("@");
}
```

**`script.js`** — el default **sin llaves**, los nombres **con llaves**, en **un solo** `import`:

```js
import isEmpty, { esEntero, esEmail } from "./miLibreria.js";

isEmpty("  ");
esEntero("16");
esEmail("a@b.com");
```

El default puede llamarse como quieras (`estaVacio`, `util`, …). Los de las llaves tienen que llamarse como en la librería.

Otras dos formas de mezclar:

```js
// Primero el default, luego los nombres (igual que arriba)
import estaVacio, { esEntero } from "./miLibreria.js";

// El default y, aparte, todo lo demás con *
import isEmpty, * as extras from "./miLibreria.js";
extras.esEntero("16");
```

**HTML:** sigue siendo `type="module"` en `script.js`.
