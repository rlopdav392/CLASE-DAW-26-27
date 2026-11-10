'use strict'
document.addEventListener("DOMContentLoaded",()=>{
    //ZONA DE DECLARACIÓN DE VARIABLES
    const op1 = document.querySelector("#op1");
    const op2 = document.querySelector("#op2");
    const btnSuma = document.querySelector("#suma");
    const btnPotencia = document.querySelector("#potencia");
    const eltoResultado = document.querySelector("#resultado");

  
    //ZONA DE LISTENERS -EVENTOS
    btnSuma.addEventListener("click",() => {
        let resultado  = "";
        if (esNumero(op1.value) &&  esNumero(op2.value)) {
            resultado = sumar(op1.value,op2.value);
        }
        else{
            resultado = "número/s incorrectos";
        }
        imprimirDOM(resultado,eltoResultado);
    });


    btnPotencia.addEventListener("click",() => {
        let resultado = "";
        if (esNumero(op1.value) &&  esNumero(op2.value)) {
            resultado = potencia(op1.value,op2.value);
        }
        else
        {
            resultado = "número/s incorrectos";
        }
        imprimirDOM(resultado,eltoResultado);

    });


    //ZONA DE FUNCIONES
    function  sumar(op1,op2){
        let res = +op1 + +op2;
        return res;
        //let res2 = Number.parseInt(op1) + Number.parseInt(op2);
        //let res3 = Numnber(op1) + Number(op2);
    }


    function potencia(op1,op2){
        let res = Math.pow(+op1,+op2);
        return res;
    }

    function imprimirDOM(mensaje,componenteDOM){
        componenteDOM.innerHTML = `<h3> ${mensaje} </h3>`;
    }

    //CONTROL DE ERRORES
    function esNumero(dato){
        if ((dato.trim().length == 0) || (Number.isNaN(+dato))){
            return false;
        }
        else {
            return true;
        }
    }







});