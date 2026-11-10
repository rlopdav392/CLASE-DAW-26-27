//SWITCH

entrada = prompt("introduce tus estudios: ");

estudios(entrada.trim().toUpperCase());

function estudios(modulo) {
  switch (modulo) {
    case "DAW":
      console.log("estoy matriculado en DAW");
      break;
    case "DAM":
      console.log("Estoy matriculado en DAM");
      break;
    default:
      console.log("estoy matriculado en otra movida");
  }
}
