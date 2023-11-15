/* 
    3) Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de pagamento.
    Utilize os códigos da tabela para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal sem juros;
    - Acima de duas vezes, preço normal mais 10% de juros;
*/

const preco = 20

const formaPagamento = 'PIX'

if (formaPagamento === 'Débito') {
    const precoFinal = preco - ((preco * 10) / 100);
    console.log(precoFinal.toFixed(2));
} else if (formaPagamento === 'PIX' || formaPagamento === 'Dinheiro') {
    const precoFinal = preco - ((preco * 15) / 100);
    console.log(precoFinal.toFixed(2));
} else if (formaPagamento === 'mais de 2x') {
    const precoFinal = preco + ((preco * 10) / 100);
    console.log(precoFinal.toFixed(2));
} else {
    console.log(preco.toFixed(2));
}