console.log("borrando claves de localstorage");
localStorage.removeItem("nombre");

//no hay update ,setitem inserta y actualiza
const mesesArray = JSON.parse(localStorage.getItem("meses"));
mesesArray.push("Diciembre");
localStorage.setItem("meses", JSON.stringify(mesesArray));
