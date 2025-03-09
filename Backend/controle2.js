// Menu flutuante
function toggleMenu() {
    const menu = document.querySelector('.sidebar')
    menu.classList.toggle('active') // Mostra ou esconde o menu
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
  