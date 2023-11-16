/*
    Crie um código que imprima a sua tabuada
*/

function calcularTabuada(numero) {

    for(let i = 0; i < 10; i++) {
        console.log(i + ' x ' + numero + ' = ' + (numero * i))
    }
}

calcularTabuada(9);