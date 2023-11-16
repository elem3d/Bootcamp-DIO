/* 
    1) Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca, cor, kmPorL) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = 1 / kmPorL;
    }

    calcularValorDeViagem(distancia, preco) {
        return 'R$ ' + ((distancia * this.gastoPorKm) * preco);
    }
}



const fusca = new carro('VolksWagen', 'amarelo', 5.6);
const uno = new carro('Fiat', 'Branco', 12);

console.log(uno.calcularValorDeViagem(100, 3.99));