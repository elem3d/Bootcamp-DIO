class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
        
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos.`);
    }
}

function compararIdade(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    } else if(p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`)
    }
}

const elem = new pessoa('Elem', 23);
const paula = new pessoa('Paula', 40);
const rafa = new pessoa('Rafa', 24);
const elaia = new pessoa('Elaia', 21);
const gi = new pessoa('Gi', 23);

compararIdade(elem, gi)