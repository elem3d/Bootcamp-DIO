/*  

    1) Faça um algorítmo que dado as 3 notas tiradas por um aluno em um  semestre, sua média calcule e imprima sua média e sua classificação condorme a tabeta abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/ 

const nota1 = 10;
const nota2 = 7;
const nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;

const isAprovado = media > 7;
const isReprovado = media < 5;

if (isaprovado) {
    console.log(media 'APROVADO');
} else if (isReprovado) {
    console.log(media 'REPROVADO');
} else {
    console.log(media 'RECUPERAÇÃO');
}