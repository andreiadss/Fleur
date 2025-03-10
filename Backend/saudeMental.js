// Função para alternar o menu lateral
function toggleMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".sidebar a[data-link]");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      const destino = this.getAttribute("data-link"); 
      window.location.href = destino; 
    });
  });
});