# BEM: nomenclatura y selectores CSS

BEM significa **Block, Element, Modifier** (Bloque, Elemento, Modificador).

Utiliza dos separadores principales: `__` y `--`, cada uno con un significado diferente.

## 1. Doble guion bajo `__` → Element

Identifica una parte de un componente que pertenece a un bloque.

```css
.card {
  /* Bloque */
}

.card__imagen {
  /* Elemento de card */
}

.card__titulo {
  /* Elemento de card */
}

.card__precio {
  /* Elemento de card */
}
```

## 2. Doble guion medio `--` → Modifier

Identifica una variante o modificación de un bloque o de un elemento.

```css
.card--destino {
  /* Variante de card */
}

.card--premium {
  /* Variante de card */
}

.card__titulo--destacado {
  /* Variante del título */
}
```

## 3. Cómo se combinan en HTML

```html
<article class="card card--destino">

  <img class="card__imagen" src="destino.jpg" alt="">

  <div class="card__info">
    <h2 class="card__titulo card__titulo--destacado">
      Málaga
    </h2>
  </div>

</article>
```

Fíjate en que el modificador se añade como una clase independiente, sin sustituir a la clase original.

## 4. Tabla resumen

| Selector | Significado |
|---|---|
| `.card` | Bloque |
| `.card__titulo` | Elemento del bloque |
| `.card--destino` | Variante del bloque |
| `.card__titulo--destacado` | Variante del elemento |

## 5. Regla para recordar

- `card` → Bloque.
- `card__titulo` → Elemento del bloque.
- `card--destino` → Modificador del bloque.
- `card__titulo--destacado` → Modificador del elemento.

**Importante:** el modificador se utiliza junto con la clase original. No debe sustituirla.

Esta es la nomenclatura clásica de BEM: **Block, Element, Modifier**.