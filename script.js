function mostrarSecao(id) {
    const secoes = document.querySelectorAll(".secao");
    secoes.forEach(secao => secao.style.display = "none");

    const secaoSelecionada = document.getElementById(id);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarSecao('tecnologia');
});

document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("mensagem-sucesso").innerText = "Mensagem enviada com sucesso!";
    document.getElementById("mensagem-sucesso").style.display = "block";
});
