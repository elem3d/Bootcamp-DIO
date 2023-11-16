/* 
    3) Elabore um programa que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha de pagamento.
    Utilize funções e os códigos da tabela para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal sem juros;
    - Acima de duas vezes, preço normal mais 10% de juros;
*/

function aplicarDesconto(preco, desconto) {
    return (preco - ((preco * desconto) / 100));
     
}

function aplicarJuro(preco, juros) {
    return (preco + ((preco * juros) / 100));
     
}

function print(string){
    console.log(string);
}

function caulcularPrecoFinal (preco, formaPagamento) {
    if (formaPagamento === 'Débito') {
        print('R$' + aplicarDesconto(preco, 10));
    } else if (formaPagamento === 'PIX' || formaPagamento === 'Dinheiro') {
        print('R$' + aplicarDesconto(preco, 15));
    } else if (formaPagamento === 'mais de 2x') {
        print('R$' + aplicarJuro(preco, 10));
    } else {
        print('R$' + preco);
    }
}

caulcularPrecoFinal(35, 'PIX')