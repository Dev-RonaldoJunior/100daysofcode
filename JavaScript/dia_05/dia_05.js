// Dia 5 = Crie um programa que realize uma operação matemática simples (soma, subtração, multiplicação, divisão).

let divresp
        let divzero

        document.addEventListener("DOMContentLoaded", function() {
            divresp = document.querySelector("#resp")
            divzero = document.querySelector("#zerar")

            // Adicionando eventos aos botões de operação
            document.getElementById("btnSoma").addEventListener("click", function() { calcular('somar') })
            document.getElementById("btnSubtracao").addEventListener("click", function() { calcular('subtrair') })
            document.getElementById("btnMultiplicacao").addEventListener("click", function() { calcular('multiplicar') })
            document.getElementById("btnDivisao").addEventListener("click", function() { calcular('dividir') })
        })

        function calcular(operacao) {
            let valor_01 = parseFloat(document.getElementById("numero_01").value)
            let valor_02 = parseFloat(document.getElementById("numero_02").value)

            if (isNaN(valor_01) || isNaN(valor_02)) {
                alert("Por favor, insira apenas números válidos.")
                return
            }

            let resultado

            switch (operacao) {
                case 'somar':
                    resultado = valor_01 + valor_02
                    divresp.innerHTML = `A soma dos valores ${valor_01} + ${valor_02} = ${resultado.toFixed(2)}`
                    break
                case 'subtrair':
                    resultado = valor_01 - valor_02
                    divresp.innerHTML = `A subtração dos valores ${valor_01} - ${valor_02} = ${resultado.toFixed(2)}`
                    break
                case 'multiplicar':
                    resultado = valor_01 * valor_02
                    divresp.innerHTML = `A multiplicação dos valores ${valor_01} x ${valor_02} = ${resultado.toFixed(2)}`
                    break
                case 'dividir':
                    if (valor_02 === 0) {
                        alert("Não é possível dividir por zero.")
                        return
                    }
                    resultado = valor_01 / valor_02
                    divresp.innerHTML = `A divisão dos valores ${valor_01} ÷ ${valor_02} = ${resultado.toFixed(2)}`
                    break
            }

            divzero.innerHTML = `<button id="btnZerar">ZERAR</button>`
            document.getElementById("btnZerar").addEventListener("click", zerar)
        }

        function zerar() {
            divresp.innerHTML = `<div>\
            <input type="number" id="numero_01">\
        </div>\
        <div>\
            <input type="number" id="numero_02">\
        </div>\
        \
        <div>\
            <button id="btnSoma">+</button>\
            <button id="btnSubtracao">-</button>\
            <button id="btnMultiplicacao">x</button>\
            <button id="btnDivisao">÷</button>\
        </div>`
            divzero.innerHTML = ''
            document.getElementById("btnSoma").addEventListener("click", function() { calcular('somar') })
            document.getElementById("btnSubtracao").addEventListener("click", function() { calcular('subtrair') })
            document.getElementById("btnMultiplicacao").addEventListener("click", function() { calcular('multiplicar') })
            document.getElementById("btnDivisao").addEventListener("click", function() { calcular('dividir') })
        }