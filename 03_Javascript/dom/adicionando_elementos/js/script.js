// Alterando conteúdo 

const obj = document.getElementById('conteudo')

obj.textContent = 'Conteudo Alterado 1'

obj.innerHTML = "<P style='color:red'>Conteudo alterado 2</p>"


// Adicionando elementos

const ul = document.getElementById('itens')
const li = document.createElement('li')

li.innerHTML = "Clezer"
ul.appendChild(li)

// removendo elementos
const item1 = document.getElementById("item-1")
ul.removeChild(item1)