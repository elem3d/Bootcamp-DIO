class ItemMagico {
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor( tipo, dano, resistencia ) {
        this.tipo = tipo
        this.dano = dano
        this.resistencia = resistencia
      }
      
      calcularDano() {
      return this.tipo === 'arma' ? this.dano * 2 : this.dano;
      }
    }
    
    function geraritemAleatorio() {
       let num =  Math.floor(Math.random() * (3 - 1 + 1)) + 1
        if (num === 1) {
           return new ItemMagico('arma', 900, 500)
        } else if (num === 2) {
            return new ItemMagico('pocao', 400, 200)
        } else if (num === 3) {
            return new ItemMagico('spell', 700, 1000) 
        } 
    }
    
    //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
    const item = geraritemAleatorio()
    // TODO: Imprima os atributos do item personalizado
    console.log(`Tipo: ${item.tipo}`);
    console.log(`Dano: ${item.dano}`);
    console.log(`Resistencia:  ${item.resistencia}`);
    
    // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
    const danoTotal = item.calcularDano();
    console.log('Dano em combate: ' + danoTotal);
