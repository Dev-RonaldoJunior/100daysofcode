// Dia 10 = Converta a string para um número inteiro e some-a ao número inteiro declarado.

function somaStringInteiro() {
    var numeroInteiro = parseInt(document.getElementById('numeroInteiro').value);
    var stringNumero = document.getElementById('stringNumero').value;
    
    // Verifica se a string é vazia
    if (stringNumero.trim() === '') {
        alert('Por favor, insira uma string válida.');
        return;
    }
    
    // Verifica se a string é um número válido
    var numero = parseInt(stringNumero);
    if (isNaN(numero)) {
        alert('A string não pode ser convertida para um número inteiro.');
        return;
    }
    
    var resultado = numeroInteiro + numero;
    alert('Resultado da soma: ' + resultado);
}