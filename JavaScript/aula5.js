const { gets, print } = require('./aula5_apoio')

/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de Entrada: 5 50 10 98 23 27 | O primeiro nímero do array é a quantidade de alunos, ou seja, a quantidade de numeros

    Saída: 98
*/
let maiorNumero = 0
const alunos = gets();

for(let i = 0; i < alunos; i++) {
    const numero = gets()
    if( numero > maiorNumero) {
    maiorNumero = numero;
    }
}

print(maiorNumero);

