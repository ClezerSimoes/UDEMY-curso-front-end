const btn = document.getElementById("botao")

function clicar(){
    console.log("executar")
}

// btn.onclick = clicar


// Metodo recomendado:

btn.addEventListener("click", clicar)