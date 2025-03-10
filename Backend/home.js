import { auth, db } from "../../Backend/firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Aguarda mudanças no estado de autenticação do usuário
onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const userId = user.uid;
            const userRef = doc(db, "usuarios", userId);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                const userData = userSnap.data();
                document.querySelector(".titulo2").innerText = `Olá, ${userData.nomeCompleto || "Usuário"}! Seja Bem-vinda!`;
                document.querySelector(".nomeBebe").innerText = userData.nomeBebe || "Cadastre o nome do bebê";
                document.querySelector(".semanasDoBebe").innerText = userData.semanasGestacao ? `${userData.semanasGestacao} semanas` : "Cadastre suas semanas de gestação";
            } else {
                console.error("Usuário não encontrado no banco de dados.");
            }
        } catch (error) {
            console.error("Erro ao recuperar dados do usuário:", error);
            alert("Ocorreu um erro ao carregar os dados do usuário.");
        }
    } else {
        alert("Usuário não autenticado! Redirecionando para o login...");
        window.location.href = "login.html";
    }
});

// Função para alternar o menu lateral
function toggleMenu() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}

// Função para selecionar o humor do dia
function selecionarEmoji(emoji) {
    const emojis = document.querySelectorAll(".emoji");
    emojis.forEach(e => e.classList.remove("selecionado"));
    emoji.classList.add("selecionado");
}

// Adicionando eventos aos botões e emojis
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".hamburguer");
    if (menuButton) menuButton.addEventListener("click", toggleMenu);

    const emojis = document.querySelectorAll(".emoji");
    emojis.forEach(emoji => emoji.addEventListener("click", () => selecionarEmoji(emoji)));
});

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