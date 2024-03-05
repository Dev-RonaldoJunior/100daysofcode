// Dia 6 = Crie um programa que determine se um número é par ou ímpar.

let divres = document.querySelector('div#res')

function par_impar() {
    let valor = Number(document.querySelector("input#numero_01").value)

    if (valor == 0) {
        divres.innerHTML = 'Par (0 é considerado um número par)'
    } else {
        if (valor % 2 === 0) {
            divres.innerHTML = `O valor ${valor} é Par`
        } else {
            divres.innerHTML = `O valor ${valor} é Ímpar`
        }
    }
}