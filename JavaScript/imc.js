/* 
    2) Elabode um algorítmo que dado o peso e a altura de um adulto mostre sua condição física de acordo com a tabela abaixo:

    Fórmula do IMC:
    IMC = peso / (altura * alruta);

    IMC em adultos Condição:
    - Abaixo de 18.5 = Abaixo do peso;
    - Entre 18.5 e 25 = Peso normal;
    - Entre 25 e 30 = Acima do Peso;
    - Entre 30 e 40 = Obesidade;
    - Acima de 40 = Obesidade Grave;
*/

const peso = 70
const altura = 1.70
const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log('ABAIXOO DO PESO');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('PESO NORMAL');
} else if (imc > 25 && imc <= 30) {
    console.log('ACIMA DO PESO');
} else if (imc > 30 && imc <= 40) {
    console.log('OBESIDADE');
} else if (imc > 40) {
    console.log('OBESIDADE GRAVE');
}