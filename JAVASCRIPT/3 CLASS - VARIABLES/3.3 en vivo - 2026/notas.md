# VAR vs LET

- var no se usa no es prededible, genera líos, mira:

```
function ejemplo() {
if (true) {
var a = 1;
let b = 2;
}
console.log(a); // 1
console.log(b); // Error: b no está definida
}
```

- Además tanto con var como con let se pueden declarar variables globales
