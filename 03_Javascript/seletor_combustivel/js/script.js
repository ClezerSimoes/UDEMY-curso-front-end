function calcularPreco() {
    let precoAlcool = document.getElementById('alcool').value
    let precoGasolina = document.getElementById('gasolina').value

    if (precoAlcool != "") {
        if (precoGasolina != "") {

            let calculo = (precoAlcool / precoGasolina)

            if (calculo < 0.7){
                document.getElementById('resultado').innerHTML = "Melhor usar álcool."
            }else{
                document.getElementById('resultado').innerHTML = "Melhor usar gasolina."
            }
        } else {
            alert("Informe o preço da gasolina")
        }
    } else {
        alert("Informe o preço do álcool")
    }
}