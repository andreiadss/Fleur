document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll(".sidebar a[data-link]");
  
    // Adiciona o evento de clique para cada link
    menuLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que o link recarregue a página
        const destino = this.getAttribute("data-link"); // Pega o valor do data-link
        window.location.href = destino; // Redireciona para a página correspondente
      });
    });
  });
  
  