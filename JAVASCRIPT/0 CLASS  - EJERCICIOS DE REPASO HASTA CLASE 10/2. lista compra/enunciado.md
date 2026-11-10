# Ejercicio 2 — Lista de la compra

Hay 3 artículos. Se guardan en un **array**. Con **Mostrar lista** se comprueba si falta alguno y se pintan en el DOM. Con **Resetear lista** se vacían los inputs usando un método de array.

---

## Cómo programar

1. Que funcione.
2. Organiza en funciones (nombres con **verbo**).
3. Control de errores
4. Creación de librerías propias (import, export, type="module") para el control de errores  y para aquello que veas necesario.
5. Uso addEventListener y no onClick
6. Buenas prácticas: `camelCase`, código organizado en zonas (zona de declaración de variables, zona de eventos, zona de funciones principales, zona de funcioens auxiliares / reutilizables), código que casi no necesita comentarios gracias a funciones reutilizables.
7. Uso de arrays:
  - Carga los tres artículos en un array en vez de en tres constantes
  - Como en el array has guardado los input, para mostrar la lista necesitas otro array con los value, usa map, para crear ese array, también puedes luego convetir ese array de values en string con join, antes de pintar en el DOM lo conviertes a string y lo separas con el salto de línea
  - para resetear la lista usa el forEach




