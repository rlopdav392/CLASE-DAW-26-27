# Ejercicio: validación de formulario con JavaScript

## Objetivo

Crear un script que valide un formulario con tres campos (**nombre**, **apellidos** y **edad**) y, si todo es correcto, muestre los datos introducidos en el recuadro `.dashed`.

---

## 1. Cuando se cargue el documento

1. Resetear los tres mensajes de error (vaciar el `textContent` de sus `span`).
2. Ocultar el recuadro `.dashed`.

---

## 2. Evento: cuando se pulse el botón *submit*

1. **Cancelar** el comportamiento que el navegador haría por defecto (`preventDefault()`).
2. Volver a **resetear** los tres mensajes de error y **ocultar** el recuadro `.dashed`.
3. **Leer** el `value` de los tres `input`.
4. Hacer el **control de errores** de los tres campos:

   | Campo | Tipo | Condición de error | Qué hacer |
   | --- | --- | --- | --- |
   | Nombre | `string` | Está vacío | Mostrar el mensaje en el `textContent` de su `span`, con color **rojo** |
   | Apellidos | `string` | Está vacío | Mostrar el mensaje en el `textContent` de su `span`, con color **rojo** |
   | Edad | número | No es un número o **no es mayor que 0** | Mostrar el mensaje en el `textContent` de su `span`, con color **rojo** |

5. Si **no hay errores**:
   - Mostrar el recuadro `.dashed`.
   - Escribir en él el `value` de los tres `input`.

---

## Pistas

- `trim()` elimina los espacios al principio y al final de un texto. Sirve para detectar un campo escrito solo con espacios.
- `Number.parseInt()` convierte un texto en número. Si no puede, devuelve `NaN`.
- `Number.isNaN()` comprueba si un valor es `NaN`.
- Una variable booleana (por ejemplo `hayErrores`) te ayuda a saber al final si todo fue bien.
- Para **ocultar** o **mostrar** un bloque se usa la propiedad `style.display`:

  ```js
  bloque.style.display = "none";   // oculta el bloque
  bloque.style.display = "block";  // muestra el bloque
  ```
