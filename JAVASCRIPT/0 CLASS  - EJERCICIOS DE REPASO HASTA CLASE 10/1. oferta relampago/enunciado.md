# Ejercicio 1 — Kiosco Cierva: oferta relámpago

El kiosco tiene una oferta de **15 segundos**. Mientras dura, el alumno puede calcular un pedido (nombre, precio y cantidad). Cuando el tiempo llega a 0, se deshabilita el botón **Calcular pedido**. Con **Reiniciar oferta** vuelve el tiempo a 15 y el botón se habilita otra vez.

---

## Cómo programar

1. Que funcione.
2. Organiza en funciones (nombres con **verbo**).
3. Control de errores: vacío y **entero** 
4. Creación de librerías propias (import, export, type="module") para el control de errores y para aquello que veas necesario.
5. Uso addEventListener y no onClick
6. Buenas prácticas: `camelCase`, código organizado en zonas (zona de declaración de variables, zona de eventos, zona de funciones principales, zona de funcioens auxiliares / reutilizables), código que casi no necesita comentarios gracias a funciones reutilizables.
7. Para deshabilitar el botón "calcular pedido" cuando el timer llege a 0: 
   ```btnCalcular.disabled = true;```

**No uses:** arrays, eso quiero que lo uses en el ejercicio 2, en este no.


