
function tipoMagia() {
    
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1
}
function  castSpell (spell){
// Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };
  
  if (spell === 1) {
    return mensagens.ataque
  } else if (spell === 2) {
    return mensagens.cura
  } else if (spell === 3) {
    return mensagens.defesa
  } else {
    return mensagens.invalido
  }

}
// Solicita ao usuário a quantidade de vezes que a magia será usada
const quantidade = Math.random() * 10;
// É impresso a mensagem a quantidade de vezes especificada:
for (let i = 0; i < quantidade; i++) {
    const spell = tipoMagia()
    console.log(castSpell(spell));
}