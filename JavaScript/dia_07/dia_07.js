// Dia 7 = Escreva um loop que imprima os números de 1 a 10.

let div = document.getElementById("num");

function start() {
    let numeros = "" // Inicializa uma string vazia
    let numero = 1
    while (numero <= 10) {
        numeros += `${numero} ` // Adiciona o número atual à string
        numero++
    }
    div.innerHTML = numeros
}