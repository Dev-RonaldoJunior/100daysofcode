// Dia 4 = Faça um programa que solicite dois números ao usuário, some-os e imprima o resultado.

function confirmar() {
    let numero_01 = Number(document.querySelector("input#numero_01").value)
    let numero_02 = Number(document.querySelector("input#numero_02").value)
    let soma = numero_01 + numero_02
    alert(`A soma dos numero ${numero_01} + ${numero_02} = ${soma}`)
}