// selecionando por ID:

const obj = document.getElementById('destaque')
obj.style.backgroundColor= "red"

// Selecionando por query selector (CSS) 

const objCss = document.querySelector('h3.subtitulo')
objCss.style.backgroundColor = 'blue'

// Selecionando por query selector All 

const itens = document.querySelectorAll('li.itens')

for (let item of itens){
    item.style.backgroundColor = 'red';
}

// Selecionando por tag 

const paragrafo = document.getElementsByTagName('p')

paragrafo[0].style.backgroundColor = "yellow"
paragrafo[1].style.backgroundColor = "yellow"

// Selecionando por classe

const laranja = document.getElementsByClassName('laranja')
laranja[0].style.backgroundColor = 'orange'

// Selecionando por classe

const nome = document.getElementsByName('nome')
nome[0].style.backgroundColor = 'green'


// ----------------------------------------------------------------------------------------

function trocarCor() {

    const titulo = document.querySelector('h1.vermelho')

    if (titulo.style.color == 'red'){
        titulo.style.color = 'blue'
    }else{
        titulo.style.color = 'red'
    }
}