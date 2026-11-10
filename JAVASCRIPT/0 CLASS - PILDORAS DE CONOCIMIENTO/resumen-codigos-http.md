# Códigos de estado HTTP (resumen)

## Los 5 más habituales

| Código | Nombre | Significado |
|---|---|---|
| **200** | OK | Todo ha ido bien |
| **400** | Bad Request | La petición del cliente es incorrecta |
| **401** | Unauthorized | No estás autenticado, necesitas identificarte |
| **404** | Not Found | Recurso o ruta no encontrada |
| **500** | Internal Server Error | Fallo interno del servidor (p. ej. un error en el código del backend) |

**Truco:** 200 = bien · 400 = petición mal · 401 = falta autenticación · 404 = no existe · 500 = falla el servidor

## Ejemplos

```
GET  /productos/15                 → 200 OK
POST /productos { precio: "barato" } → 400 Bad Request
GET  /mi-perfil (sin token)        → 401 Unauthorized
GET  /productos/99999              → 404 Not Found
GET  /productos/15 (backend falla) → 500 Internal Server Error
```

## Error de red ≠ código HTTP

Si el servidor está apagado, no llega ninguna respuesta y por tanto **no hay código HTTP**.

- `fetch()` **no** lanza error con un 404 o un 500: son respuestas válidas del servidor. Hay que comprobar `res.ok`.
- `fetch()` solo salta al `catch` cuando no llega respuesta (error de red).

```js
try {
  const res = await fetch("http://localhost:3000/api/frutas");
  if (!res.ok) {
    console.log("El servidor respondió con error:", res.status);
  }
} catch (err) {
  console.log("Error de red, sin respuesta:", err.message);
}
```

## En el backend con Express

### Lo que Express hace solo

- **200**: `res.json(datos)` envía 200 por defecto. `res.status(200)` es opcional.
- **404 de ruta inexistente**: si la ruta no está definida, Express responde 404 automáticamente.
- **500**: si el código lanza un error no controlado, Express responde 500.

### Lo que tienes que hacer tú

Express no conoce tu lógica, así que estos los envías tú:

- **404 de recurso**: la ruta existe, pero el elemento pedido no.
- **400**: datos del cliente incorrectos.
- **401**: usuario no autenticado.

```js
app.get("/api/frutas/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "El id debe ser un número" });
  }

  const fruta = array_frutas.find((f) => f.id === id);

  if (!fruta) {
    return res.status(404).json({ error: "Fruta no encontrada" });
  }

  res.json(fruta); // 200 implícito
});
```

### Ojo

- Sin el `if (!fruta)`, Express devolvería **200** con respuesta vacía y el frontend creería que todo fue bien.
- Usa `return` antes de `res.status(...)` para cortar la función y no responder dos veces.

## ¿Y si se cae el backend o la base de datos?

### 1. Se cae el servidor backend

Si Node está apagado o colgado, **no puede enviar ningún código**: no hay nadie para responder. En el frontend, `fetch()` salta al `catch` con un error de red (`Failed to fetch`).

- **Frontend**: capturar el error en el `catch` y mostrar algo como "No se puede conectar con el servidor".
- **Servidor**: usar herramientas que reinicien Node si se cae, como `pm2`.

En producción suele haber un intermediario delante de Node (p. ej. Nginx). Si Node está caído, ese intermediario sí responde, normalmente con **502 Bad Gateway** o **503 Service Unavailable**. En local (`localhost:3000`) no hay intermediario, así que verás el error de red.

### 2. Se cae la base de datos, pero el backend sigue vivo

Aquí **sí debes devolver un código**: Node funciona y puede responder. Capturas el error de la consulta y respondes con **500** (o **503** si quieres indicar que el servicio no está disponible temporalmente).

```js
app.get("/api/frutas", async (req, res) => {
  try {
    const frutas = await db.query("SELECT * FROM frutas");
    res.json(frutas);
  } catch (err) {
    console.error("Error con la base de datos:", err); // detalle solo en el log
    res.status(500).json({ error: "Error interno del servidor" }); // mensaje genérico
  }
});
```

### Buenas prácticas

- **No envíes el error real al cliente** (`err.message`): puede revelar datos internos. Guárdalo en el log y envía un mensaje genérico.
- **Captura los errores de funciones `async`**: en Express 5 se convierten en 500 automáticamente; en Express 4 no, y sin `try/catch` la petición puede quedarse colgada.

### Resumen

| Situación | ¿Hay respuesta? | Qué recibe el frontend |
|---|---|---|
| Backend caído (local) | No | Error de red en el `catch` |
| Backend caído (con Nginx delante) | Sí, de Nginx | 502 / 503 |
| Base de datos caída, backend vivo | Sí, de tu código | 500 / 503 que envías tú |
