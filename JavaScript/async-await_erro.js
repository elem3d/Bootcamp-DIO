const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

function textoParaObjeto(texto) {
    var text = texto
    const linha = text.split('\n').slice(1);
    const objeto = linha.map((elemento) => {
        const [tarefa, feito] = elemento.split(';')
        return {
            tarefa,
            feito: feito.trim() === 'ok'
        }
    })
}

async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf8')
    return textoDoArquivo
}

var textoTarefas = buscarArquivo()

const tarefas = textoParaObjeto(textoTarefas)
