# CSS Nesting: anidar selectores en CSS nativo

> Guía basada en la refactorización de nuestro proyecto: de `general.css` (CSS plano) a una hoja con **nesting** y **variables**.

---

## 1. ¿Qué es el nesting?

El **nesting** (anidamiento) permite escribir una regla CSS **dentro de otra**. Así, los elementos que pertenecen a un mismo componente quedan agrupados y no tenemos que repetir el selector padre una y otra vez.

Antes, para hablar de la navegación escribíamos esto:

```css
.navegacion a {
  color: var(--claro);
}
.navegacion a:last-of-type {
  margin-right: 0;
}
```

Ahora lo escribimos así:

```css
.navegacion {
  a {
    color: var(--claro);

    &:last-of-type {
      margin-right: 0;
    }
  }
}
```

El navegador entiende ambos exactamente igual. **El resultado final es el mismo**; lo que cambia es cómo lo escribimos y lo leemos.

> 💡 Esto antes solo era posible con Sass/SCSS. Hoy es **CSS nativo**, no necesita compilador y funciona en todos los navegadores modernos (Chrome, Edge, Safari y Firefox desde 2023).

---

## 2. Las reglas básicas

### 2.1 Anidar un selector descendiente

Un selector dentro de otro equivale a un **selector descendiente** (con espacio).

```css
/* ANTES */
.contenido-hero h1 {
  color: white;
}

/* DESPUÉS */
.contenido-hero {
  h1 {
    color: var(--claro);
  }
}
```

**Se lee como:** "dentro de `.contenido-hero`, el `h1`".

### 2.2 El símbolo `&` (el "yo mismo")

El `&` representa **el selector padre**. Lo usamos cuando queremos **pegar** algo al padre, sin espacio entre medio:

- clases combinadas (`.btn-flotante.activo`)
- pseudo-clases (`:hover`, `:last-of-type`)
- pseudo-elementos (`::before`)
- selectores de atributo sobre el propio elemento

```css
/* ANTES */
.btn-flotante.activo {
  background-color: var(--primario);
}

/* DESPUÉS */
.btn-flotante {
  &.activo {
    background-color: var(--primario);
  }
}
```

Fíjate en la diferencia clave:

| Escribo dentro de `.card`...  | Se convierte en…       | Significa                          |
| ----------------------------- | ---------------------- | ---------------------------------- |
| `img { }`                     | `.card img`            | una `img` **dentro** de `.card`    |
| `&.activo { }`                | `.card.activo`         | la **propia** `.card` con `activo` |
| `&:hover { }`                 | `.card:hover`          | la propia `.card` al pasar el ratón |

> ⚠️ **Error típico:** olvidar el `&`. `.activo { }` dentro de `.card` significa `.card .activo` (un hijo con esa clase), **no** `.card.activo`.

### 2.3 Combinadores (`>`, `+`, `~`)

Se pueden empezar directamente con el combinador:

```css
/* ANTES */
main > section {
  margin-bottom: 2rem;
}

/* DESPUÉS */
main {
  > section {
    margin-bottom: var(--espacio-md);
  }
}
```

### 2.4 Media queries anidadas

Esta es una de las mayores ventajas: la media query **vive junto a la regla que modifica**, en lugar de quedar lejos en otra parte del archivo.

```css
/* ANTES: la regla base y su media query están separadas */
.premium {
  grid-template-columns: unset;
}
@media (min-width: 768px) {
  .premium {
    grid-template-columns: auto 30%;
  }
}

/* DESPUÉS: todo en el mismo sitio */
.premium {
  grid-template-columns: unset;

  @media (min-width: 768px) {
    grid-template-columns: auto 30%;
  }
}
```

Dentro de la media query **no hace falta repetir el selector**: las propiedades se aplican al padre.

---

## 3. Ejemplos reales de nuestra refactorización

### 3.1 El footer: la regla y sus variantes juntas

```css
/* ANTES: 4 bloques separados */
.footer { ... }
.footer.activo { bottom: 0; }
.footer .contenedor { ... }
.footer .nav-footer { ... }
.footer .nav-footer h3 { ... }
.footer .menu a { ... }
```

```css
/* DESPUÉS: un único bloque que se lee como un árbol */
.footer {
  position: fixed;
  bottom: -100%;

  &.activo {
    bottom: 0;
  }

  .contenedor { ... }

  .nav-footer {
    padding: var(--espacio-sm);

    h3 {
      font-size: 1.2rem;
    }
  }

  .menu a { ... }
}
```

Con solo mirar la indentación vemos qué pertenece al footer.

### 3.2 El formulario del hero (3 niveles)

```css
.contenido-hero {
  display: grid;

  h1 { ... }          /* .contenido-hero h1 */

  form {              /* .contenido-hero form */
    position: relative;

    input[type="text"] {   /* .contenido-hero form input[type="text"] */
      flex: 1;
    }
  }
}
```

### 3.3 Redes sociales: `&` con pseudo-elementos y atributos

Aquí se usa mucho el `&` porque `::before` y `[href*="..."]` van **pegados** al enlace:

```css
.sociales {
  ul {
    li {
      a {
        text-decoration: none;

        &:before {
          font-family: "Font Awesome 5 Brands";
        }

        &[href*="facebook.com"]::before {
          content: "\f39e";
        }
      }
    }
  }
}
```

Esto se compila a `.sociales ul li a::before` y `.sociales ul li a[href*="facebook.com"]::before`.

---

## 4. Ventajas

1. **Menos repetición.** Escribimos `.footer` una vez en lugar de diez.
2. **Agrupa por componente.** Todo lo del footer está en un único bloque.
3. **Media queries cerca de su regla.** Es más fácil mantener el diseño responsive.
4. **Más fácil de mover o borrar.** Si quitamos un componente, borramos un solo bloque.
5. **Sin herramientas extra.** Es CSS puro, no hay que compilar nada.

---

## 5. Cuidado: errores y malas prácticas

### 5.1 No anides demasiado

Cada nivel que anidas **aumenta la especificidad** y hace el CSS más difícil de sobrescribir. Una regla general:

> **Máximo 3 niveles de profundidad.**

Fíjate que nuestro bloque `.sociales` llega a 5 niveles (`.sociales > ul > li > a > &:before`). Es un ejemplo para **discutir**: funciona, pero en un proyecto real quizá convendría ponerle una clase propia al enlace y simplificar.

### 5.2 Ojo con los cambios de comportamiento al refactorizar

Al pasar el código a nesting hay que comprobar que los selectores **siguen significando lo mismo**. Un ejemplo en nuestro proyecto:

```css
/* ORIGINAL: span hijo directo de li */
.sociales ul li span {
  display: none;
}

/* REFACTORIZADO: span dentro de a (dentro de li) */
.sociales ul li a span {
  display: none;
}
```

Si en el HTML el `span` está dentro del `<a>`, funciona igual; si estuviera fuera del `<a>`, **dejaría de aplicarse**. Moraleja: tras refactorizar, **revisa el resultado en el navegador**.

### 5.3 Olvidar el `&`

```css
.btn-flotante {
  .activo { }   /* ❌ .btn-flotante .activo  (un hijo) */
  &.activo { }  /* ✅ .btn-flotante.activo   (el mismo elemento) */
}
```

### 5.4 Anidar solo por anidar

No todo tiene que ir anidado. Si una regla es global (como `h1`, `img` o `body`), déjala fuera.

---

## 6. Otros cambios de esta refactorización (no son nesting)

Además del nesting, el archivo nuevo incluye otras mejoras que conviene no confundir:

| Cambio | Qué hace |
| --- | --- |
| `@import url("general.css")` | Separa los estilos globales en otro archivo y los importa. |
| `var(--espacio-sm)`, `var(--radio)`, `var(--sombra)` | Sustituye valores repetidos (`1rem`, `10px`...) por **variables CSS** reutilizables. |
| `.boton-hero` | Reemplaza `input[type="submit"]` por una **clase**, más corta y reutilizable. Requiere cambiar el HTML. |
| Código duplicado eliminado | Reglas como `.contenedor-cards` o `.card` pasan a `general.css`. |

---

## 7. Ejercicio para clase

1. Abre `general.css` y busca todas las reglas que empiezan por `.footer`.
2. Reescríbelas con nesting en un único bloque.
3. Añade un efecto `:hover` a `.menu a` usando `&`.
4. Mueve una media query dentro de una regla.
5. Compara el resultado en el navegador con el original: ¿se ve igual?

**Pregunta de reflexión:** ¿qué pasaría si dentro de `.card` escribes `.activo { }` en vez de `&.activo { }`?

---

## 8. Resumen rápido

| Quiero... | Escribo... |
| --- | --- |
| Un elemento dentro del padre | `hijo { }` |
| El padre con otra clase | `&.clase { }` |
| El padre en `:hover` | `&:hover { }` |
| Un pseudo-elemento del padre | `&::before { }` |
| Un hijo directo | `> hijo { }` |
| Una media query para el padre | `@media (...) { }` |

> **Idea clave:** el nesting no cambia lo que hace el CSS, solo **cómo lo escribimos**. Es la misma regla, mejor organizada.
