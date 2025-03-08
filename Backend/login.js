document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o recarregamento da página
  
    const nomeUsuario = document.getElementById("nomeUsuario");
    const senhaUsuario = document.getElementById("senhaUsuario");
    const errorMessage = document.getElementById("errorMessage");
  
    if (nomeUsuario.value.trim() === "" || senhaUsuario.value.trim() === "") {
      errorMessage.textContent = "Preencha todos os campos!";
      errorMessage.classList.remove("hidden");
  
      nomeUsuario.classList.add("error");
      senhaUsuario.classList.add("error");
  
      nomeUsuario.focus();
    } else {
      errorMessage.classList.add("hidden");
      nomeUsuario.classList.remove("error");
      senhaUsuario.classList.remove("error");
  
      alert(`Bem-vindo, ${nomeUsuario.value}!`);
      window.location.href = "home.html"; // Redirecionamento
    }
  });
  