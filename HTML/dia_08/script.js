document.addEventListener("DOMContentLoaded", function() {
    // Selecionar os elementos do DOM
    const addBtn = document.getElementById("addBtn");
    const maxBtn = document.getElementById("maxBtn");
    const txtDiv = document.getElementById("txt");
    const numInput = document.getElementById("numInput");

    // Lista para armazenar números
    const lista = [];

    // Adicionar evento de clique para adicionar número à lista
    addBtn.addEventListener("click", adicionarNaLista);

    // Adicionar evento de clique para encontrar o maior número na lista
    maxBtn.addEventListener("click", mostrarMaior);

    // Função para adicionar número à lista
    function adicionarNaLista() {
        const numero = numInput.value.trim();
        if (numero === "") {
            window.alert('[ERRO] Insira um número!');
            return;
        }
        const num = Number(numero);
        lista.push(num);
        atualizarTexto();
        numInput.value = "";
    }

    // Função para mostrar o maior número da lista
    function mostrarMaior() {
        if (lista.length === 0) {
            window.alert('[ERRO] Insira um número, a lista está vazia!');
            return;
        }
        const maior = Math.max(...lista);
        txtDiv.innerHTML = `O maior número da lista é ${maior}`;
        lista.length = 0; // Limpar a lista
    }

    // Função para atualizar o texto exibido na div
    function atualizarTexto() {
        txtDiv.innerHTML = lista.join(", ");
    }
});
