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
  