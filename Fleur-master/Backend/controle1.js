// Menu flutuante
function toggleMenu() {
    const menu = document.querySelector('.sidebar')
    menu.classList.toggle('active') // Mostra ou esconde o menu
  }
  // Espera o DOM carregar antes de executar
  document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("cadastroForm");
      
      // Função para validar o formulário antes de enviar
      form.addEventListener("submit", function (event) {
          event.preventDefault(); // Impede o envio padrão
          
          const formData = new FormData(form);
          let isValid = true;
          let dataObj = {};
  
          formData.forEach((value, key) => {
              if (!value.trim()) {
                  isValid = false;
              }
              dataObj[key] = value;
          });
  
          if (!isValid) {
              alert("Por favor, preencha todos os campos antes de salvar.");
              return;
          }
  
          // Salva os dados no Local Storage/ depois ajustar para salvar no bd
          localStorage.setItem("dadosGestacionais", JSON.stringify(dataObj));
          alert("Dados salvos com sucesso!");
          form.reset();


         // Redireciona para a nova página
          window.location.href = "";
      });
    });