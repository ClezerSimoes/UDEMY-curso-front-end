let nomes= [
    'clezer',
    'angela',
    'paulo',
    'kawan',
    'andrea',
    'marlene',
    'aparecido',
    'wilson',
    'angela'
]

function pesquisarNomes(){
    let nomePesquisa = document.getElementById('campo-nome').value
    let itensLista = ''

    for (indice in nomes){
        let nome = nomes[indice]

        if (nome == nomePesquisa){
            itensLista = itensLista + `<li class="list-group-item">${nome}</li>`
        }
    }

    document.getElementById('lista').innerHTML = itensLista
}

function carregarNomes(){
    let itensLista = ''

    for(indice in nomes){
        let nome = nomes[indice]

        itensLista = itensLista + `<li class="list-group-item">${nome}</li>`
    }

    document.getElementById('lista').innerHTML = itensLista
}