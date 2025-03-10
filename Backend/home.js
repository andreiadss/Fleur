// Menu flutuante
function toggleMenu() {
    const menu = document.querySelector('.sidebar')
    menu.classList.toggle('active') // Mostra ou esconde o menu
  }



// Emoji selecionado
function selecionarEmoji(emojiClicado) {
    // Primeiro, tira a classe 'selecionado' de todos os emojis
    let emojis = document.querySelectorAll('.emoji');
    emojis.forEach(function (emoji) {
      emoji.classList.remove('selecionado');
    });
  
    // Depois, adiciona a classe só no emoji que foi clicado
    emojiClicado.classList.add('selecionado');
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
  
  