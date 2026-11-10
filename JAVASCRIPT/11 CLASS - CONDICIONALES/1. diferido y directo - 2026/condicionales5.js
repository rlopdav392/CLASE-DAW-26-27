//OPERADORES LÓGICOS AND (&&) y OR (||)

let estudios = prompt("introduce tus estudios: ").toUpperCase();

if (estudios == "DAM" || estudios == "DAW" || estudios == "ASIR") {
  console.log("estás cursando unos estudios de grado superior de informática");
} else {
  console.log("no estás cursando estudios de superior de informática");
}

let paro = prompt("Estás en paro: ").toString().toUpperCase();

if (paro == "SI" && (estudios == "DAM" || estudios == "DAW")) {
  console.log("tienes derecho a una beca");
} else {
  console.log("no tienes derecho a una beca");
}
