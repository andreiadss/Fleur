// Função para alternar o menu lateral
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Fecha o menu lateral ao clicar fora dele
document.addEventListener('click', function (event) {
    const sidebar = document.querySelector('.sidebar');
    const hamburguer = document.querySelector('.hamburguer');

    // Se o clique não foi dentro da sidebar nem no botão do menu, fecha o menu
    if (!sidebar.contains(event.target) && !hamburguer.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Adiciona funcionalidade para abrir os links corretamente
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".card-content h3");
    
    links.forEach(link => {
        link.addEventListener("click", function () {
            const url = this.getAttribute("onclick").match(/'(.*?)'/)[1];
            window.open(url, "_blank"); // Abre em uma nova aba
        });
    });
});
