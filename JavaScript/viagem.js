/*   Desafio 1 - Cálculo de valor de uma viagem

    Declare 3 variaveis sendo elas:
    1. Preço do combustível;
    2. Gasto médio de combustível do carro por KM;
    3. Distância em KM da viagem;

    Imprima no console o valor total gasto com combustível na viagem.
*/
const precoCombustivel = 3.99; 
const kmPorLitro = 5.6;
const distancia = 534;

const valorTotal = (distancia / kmPorLitro) * precoCombustivel

console.log(valorTotal.toFixed(2));