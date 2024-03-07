document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("addBtn");
    const maxBtn = document.getElementById("maxBtn");
    const txtDiv = document.getElementById("txt");
    let lista = [];

    addBtn.addEventListener("click", adicionarNaLista);
    maxBtn.addEventListener("click", mostrarMaior);

    function adicionarNaLista() {
        const numInput = document.getElementById("num");
        const numero = numInput.value.trim();
        if (numero === "") {
            window.alert('[ERRO] Insira um número!');
            return;
        }
        const num = Number(numero);
        lista.push(num);
        txtDiv.innerHTML = lista.join(", ");
        numInput.value = "";
    }

    function mostrarMaior() {
        if (lista.length === 0) {
            window.alert('[ERRO] Insira um número, a lista está vazia!');
            return;
        }
        const maior = Math.max(...lista);
        txtDiv.innerHTML = `O maior número da lista é ${maior}`;
        lista = [];
    }
});
