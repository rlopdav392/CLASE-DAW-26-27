# Convenciones de nombres en JavaScript

Además de utilizar `camelCase`, en JavaScript se suelen utilizar determinadas palabras al principio de los nombres para indicar qué representan o qué hace una función.

| Elemento               | Convención             | Ejemplo                      | Significado                                                           |
| ---------------------- | ---------------------- | ---------------------------- | --------------------------------------------------------------------- |
| **Booleanos**          | `is...`                | `isActive`                   | Indica si algo es o está de una determinada manera (`true` / `false`) |
| **Funciones**          | Verbo + `camelCase`    | `obtenerUsuario()`           | Indica una acción que realiza la función                              |
| **Obtener datos**      | `get...`               | `getUser()`                  | Obtiene o devuelve información                                        |
| **Modificar datos**    | `set...`               | `setUser()`                  | Establece o modifica información                                      |
| **Gestionar eventos**  | `handle...`            | `handleClick()`              | Gestiona un evento                                                    |
| **Validar**            | `validate...`          | `validateForm()`             | Comprueba si algo es válido                                           |
| **Calcular**           | `calculate...`         | `calculateTotal()`           | Realiza un cálculo                                                    |
| **Mostrar**            | `show...`              | `showMenu()`                 | Muestra algo                                                          |
| **Ocultar**            | `hide...`              | `hideMenu()`                 | Oculta algo                                                           |
| **Abrir / cerrar**     | `open...` / `close...` | `openMenu()` / `closeMenu()` | Abre o cierra algo                                                    |
| **Varios elementos**   | Nombre en plural       | `usuarios`                   | Contiene varios elementos                                             |
| **Un elemento**        | Nombre en singular     | `usuario`                    | Contiene un único elemento                                            |
| **Índice de un bucle** | `i`, `j`, etc.         | `for (let i = 0; ...)`       | Se utiliza habitualmente para representar un índice                   |

## Ejemplo

```javascript
const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
];

const usuario = usuarios[0];

const isActive = true;

function getUser() {
  return usuario;
}

function handleClick() {
  console.log("Botón pulsado");
}

function validateUser(user) {
  return user.nombre !== "";
}
```

### 💡 Idea clave

> **El nombre debe ayudarnos a entender qué representa y qué hace.**

Por ejemplo:

```javascript
isActive;
```

nos hace pensar en un **booleano**.

```javascript
getUser();
```

nos indica que la función **obtiene un usuario**.

```javascript
handleClick();
```

nos indica que la función **gestiona un evento `click`**.
