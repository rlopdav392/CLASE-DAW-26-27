# REFACTORIZACIÓN DEL ANALIZADOR DE PREGUNTAS

1. **USO DE ARRAYS** en `respuestas`, y utilización de `forEach()`, `map()` y `join()` correspondiente.

2. **SIMPLIFICACIÓN DEL CONTADOR:** `tiempo--;`

3. **NOMENCLATURA CORRECTA DE FUNCIONES**, utilizando verbos que indican acciones:
   - `finalizar()` en vez de `finalizado()`
   - `resetear()` en vez de `reseteado()`

4. **FUNCIONES REUTILIZABLES Y, CON ELLO, MAYOR ABSTRACCIÓN**
   - **Reutilización →** no repetir código.
   - **Abstracción →** esconder los detalles y poder trabajar con una operación mediante un nombre que indica qué hace.

   ### 4.1. Funciones reutilizables

   Funciones que pueden ser reutilizadas en diferentes partes del código:
   - `detenerCuenta()`

   ### 4.2. Aumentar el nivel de abstracción

   Utilizar funciones con nombres cercanos al lenguaje natural que expresen **qué queremos hacer y no cómo lo vamos a hacer**, ocultando los detalles de implementación:
   - `finalizarTiempo()`
   - `obtenerRespuestas(respuestas)`
   - `validarRespuestas()`
   - `reiniciarCuenta()`
   - `limpiarRespuestas()`

5. **ORGANIZACIÓN DEL CÓDIGO EN ZONAS**
6. **ELIMINACIÓN DE COMENTARIOS**

   Al usar funciones con nombres cercanos al lenguaje naturales, el código ha de poder interpretarse fácilmente sin necesidad de recurrir a los comentarios.

---

# LENGUAJE DECLARATIVO VS. IMPERATIVO

### Declarativo

Indicamos **qué queremos hacer**:

```js
reiniciarCuenta();
```

### Imperativo

Indicamos **cómo hacerlo**, paso a paso:

```js
function reiniciarCuenta() {
  detenerCuenta();
  cuentaRegresiva.textContent = 10;
  miIntervalo = setInterval(decrementarCuenta, 1000);
}
```

---

# ANALOGÍA CON REACT

En React podemos indicar **qué queremos que ocurra** sin encargarnos directamente de cómo modificar el DOM:

```jsx
<button disabled={cargando}>Enviar</button>
```

En este caso estamos expresando:

> El botón debe estar deshabilitado cuando `cargando` sea `true`.

React se encarga de realizar los cambios necesarios en el DOM.
