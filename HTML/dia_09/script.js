let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")

function invertString() {
    let stringtxt = document.getElementById("txt").value
    if (stringtxt.length === 0 ){
        alert('[ERRO] Texto vazio, Insira um texto no campo')
    } else {
        div1.innerHTML = stringtxt.split("").reverse().join("")
        div2.innerHTML = '<p><button onclick="refresh()">LIMPAR</button></p>'
    }
}

function refresh() {
    div1.innerHTML = '<p>INSIRA O TEXTO QUE SERÁ INVERTIDO NO CAMPO A BAIXO</p><p><input type="text" id="txt" size="65"></p><p><button onclick="invertString()">INVERTER</button></p>'
    div2.innerHTML = ''
    document.querySelector("#div1 button").onclick = invertString;
}