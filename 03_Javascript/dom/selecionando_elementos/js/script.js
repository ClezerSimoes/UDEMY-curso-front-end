// selecionando por ID:

const obj = document.getElementById('destaque')

// Selecionando por query selector (CSS) 

const objCss = document.querySelector('p.paragrafo')

obj.style.backgroundColor= "red"

objCss.style.backgroundColor = 'blue'

console.log(obj)
console.log(objCss)


function trocarCor() {

    const titulo = document.querySelector('h1.vermelho')

    if (titulo.style.color == 'red'){
        titulo.style.color = 'blue'
    }else{
        titulo.style.color = 'red'
    }
}