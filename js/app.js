// Creamos un estado donde seleccionamos los elementos del DOM.
let state = {
    prevBTN: $('.prevBtn'),
    nextBtn: $('.nextBtn '), 
    counter: $('.counter')
}

// Creamos un contador global que iremos modificando
let counter = 0;

// Cuando el Dom Cargue ejecutamos la funcion
$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");
    
    // Obtenemos los clicks

    // Numero anterior.
    state.prevBTN.click(function(){
        counter--;
        actualizarNumero();
    });

    // Numero siguiente.
    state.nextBtn.click(function(){
        counter++;
        actualizarNumero();
    });

    // Actualizamos el numero y su color en funcion de si es positivo o negatico
    function actualizarNumero(){
        state.counter.text(counter);
        if(counter >= 1){
            // Es positivo, añadimos clases.
            state.counter.removeClass('red');
            state.counter.addClass('green');
        }else if(counter <= -1){
            // Es negativo, añadimos clases.
            state.counter.removeClass('green');
            state.counter.addClass('red');
        }else{
            // Es 0 quitamos las dos clases
            state.counter.removeClass('green');
            state.counter.removeClass('red');
        }
    }
});