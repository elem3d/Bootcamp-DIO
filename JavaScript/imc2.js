/*
    Crie uma classe para representar pessoas.
    Cada pessoa deve der os atributos: nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC;
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça para dizer o valor do seu IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura));
    }

    classificarImc() {
       const imc = this.calcularImc()
        if (imc < 18.5) {
            return 'ABAIXOO DO PESO';
        } else if (imc >= 18.5 && imc <= 25) {
            return 'PESO NORMAL';
        } else if (imc > 25 && imc <= 30) {
            return 'ACIMA DO PESO';
        } else if (imc > 30 && imc <= 40) {
            return 'OBESIDADE';
        } else if (imc > 40) {
            return 'OBESIDADE GRAVE';
        }
    }
}

const jose = new pessoa('José', 70, 1.75)

console.log(jose.calcularImc().toFixed(1) + ' ' + jose.classificarImc());

