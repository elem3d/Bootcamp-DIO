/* 
    Crie um programa capazde percorrer uma lista e imprimir cada número par encontrado.
*/

function printnumeroPar(array) {
    
    for(let i = 0; i < array.length; i++) {
        
        if(array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printnumeroPar(lista);