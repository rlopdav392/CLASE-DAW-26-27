//ZONA DE DECLARACIÓN DE VARIABLES
//me cargo en memoria los 9 elementos DOM
//declaro las variables globales que vea oportuno



//ZONA DE EVENTOS
//evento para el botón terminado que llamara a la funcion: terminado()

//evento para el botón volver a intentar que llamara a la funcion volver_intentar()

//llamada a la funcion cuenta_regresiva




//ZONA DE FUNCIONES
/**************DECLARACIÓN DE LA FUNCIÓN cuenta_regresiva () ***************************************
 * pues inicializamos el contador HTML a 10
 * Y llamamos cada segundo a una función que lo que hará es decrementarnos el contador
 * Eso hay que hacerlo con el timer setInterval, de esta forma:
 * tiempoIntervalo = setInterval(decrementar_contador,1000)
 * Necesito guardar en una variable el retorno de setInterval, porque lo necesitamos parar cuando
 * el contadorHTML llegue a cero, para ello, necesitamos una referencia al mismo, que la sacamos
 * de lo que devuelve el setInterval, esa variable, obvio, estará definida arriba como global.
 * 
 * ***************************************************************************************************
 
/***********DECLARACIÓN DE LA FUNCIÓN decrementar_contador ***********************************
 * pues leo el tiempo del contador y lo decremento en una unidad
 * Si he llegado a cero, pues invoco a una función de game_over()
 * 
****************************************************************************************************/


/**************DECLARACIÓN DE LA FUNCIÓN game_over()***********************************
 * Se inicializa el contador a 10
 * Se toca la musica de game over (eltoDOM.play())
 * Se muestra en una alerta que ha perdido
 * Se para el intervalo, para ello, cogemos la variable donde tenemos la referencia al intervalo: tiempoIntervalo
 * y hacemos lo siguiente: clear(tiempoIntervalo)
 * 
 *****************************************************************************************************
 
 /**************DECLARACIÓN DE LA FUNCIÓN terminado()**********************************
 * Pues paramos el intervalo como he explicado antes
 * Y mostramos en pantalla pues todos los valores que ha escrito el usuario con la fecha actual:
 * fecha.toLocaleDateString("es-ES")
 * Podemos hacer también un control de errores, de tal forma, que si ha dejado algún campo vacio
 * pues que lo avise también en el alert
 *****************************************************************************************************

  /**************DECLARACIÓN DE LA FUNCIÓN volver_intentar()**********************************
 * Es simplemente volver a recargar la página con: location.reload();
 * Y limpiar todos los input
 *****************************************************************************************************/
