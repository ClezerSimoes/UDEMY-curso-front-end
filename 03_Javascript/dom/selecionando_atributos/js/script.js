function alterarImagem(){
    const imagem = document.getElementById('imagem')

    console.log(imagem.src)
    console.log(imagem.alt)
    console.log(imagem.width)

    imagem.src = './img/grafico.png'

}
