/*   Desafio 2 - Cálculo de valor de uma viagem

    Declare 5 variáveis sendo elas:
    1. Preço do etanol;
    2. Preço da gasolina;
    3. tipo de combustível do carro
    4. Gasto médio de combustível do carro por KM;
    5. Distância em KM da viagem;

    Imprima no console o valor total gasto com combustível na viagem.
*/

const etanol = 3.99;
const gasolina = 5.78;
const kmPorLitro = 5.6;
const distancia = 100;

const tipoCombustivel = 'Gasolina'

if (tipoCombustivel === 'Etanol') {

    const valorTotal = (distancia / kmPorLitro) * etanol;
    console.log(valorTotal.toFixed(2));

} else {

    const valorTotal = (distancia / kmPorLitro) * gasolina;

    console.log(valorTotal.toFixed(2));
}