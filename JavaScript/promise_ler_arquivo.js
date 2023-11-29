const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaLeitura = fs.promises.readFile(filePath) /* Variável que gurada a promessa que lê o arquivo */

promessaLeitura /* quando ler o arquivo vai executar as funções a seguir */ 
    .then((arquivo) => arquivo.toString('utf8')) /* conserva caracteres especiais */
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1)) /* divide linhas em strings separadas e desconsidera a primeira linha */
    .then((textoEmLinhas) => textoEmLinhas.map((linha) =>{
        const [nome, feito] = linha.split(';')
        return {
            nome,
            feito: feito.trim() === 'ok'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu ruim!', error))