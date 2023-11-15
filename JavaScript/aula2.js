/*  = é para atribuição
    == é para igualdade que ignora o tipo de variável
    === é para igualdade 
    % é para ver o resto de uma divisão
    '!' é para dizer o contrário

*/

/* Programa para verificar se um numero de 0 a 100 é par ou ímpar */

const numero = 103

const isnumeroPar = (numero % 2) === 0; /* como declarar uma variável booleana: se coloca "is" como prefixo do nome da variável e se atribúi uma função como valor */

if(numero === 0) {
    console.log('O número é inválido');
} else if (numero > 100) {
    console.log('O número é inválido');
} else if (numeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}
