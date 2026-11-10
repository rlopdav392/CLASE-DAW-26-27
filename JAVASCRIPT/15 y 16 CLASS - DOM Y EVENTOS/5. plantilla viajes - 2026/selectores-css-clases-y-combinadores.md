# Diferencia entre `.btn-flotante.activo` y `.btn-flotante .activo`

La diferencia es muy importante: **el primero selecciona el mismo elemento y el segundo selecciona un elemento descendiente.**

## 1. `.btn-flotante.activo` (sin espacio)

Selecciona un elemento que tiene **las dos clases simultáneamente**.

CSS:

```css
.btn-flotante.activo {
  background-color: red;
}
```

HTML:

```html
<a class="btn-flotante activo">Idioma y moneda</a>
```

El enlace tiene ambas clases: `btn-flotante` y `activo`.

## 2. `.btn-flotante .activo` (con espacio)

Selecciona un elemento con clase `activo` que está dentro de otro elemento con clase `btn-flotante`.

CSS:

```css
.btn-flotante .activo {
  background-color: red;
}
```

HTML:

```html
<div class="btn-flotante">
  <a class="activo">Idioma y moneda</a>
</div>
```

Aquí `.activo` es descendiente de `.btn-flotante`.

## 3. Resumen de selectores

| Selector | Significado |
|---|---|
| `.A.B` | Un mismo elemento tiene las dos clases. |
| `.A .B` | Un elemento B está dentro de un elemento A (descendiente). |
| `.A > .B` | B es hijo directo de A. |

## Truco para recordar

- **Sin espacio (`.A.B`)**: las dos clases pertenecen al mismo elemento.
- **Con espacio (`.A .B`)**: un elemento está dentro de otro.
- **Con `>` (`.A > .B`)**: un elemento es hijo directo de otro.

En CSS, el espacio no es decorativo: es un combinador que significa descendencia.