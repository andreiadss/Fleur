import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    const email = document.getElementById("emailUsuario").value.trim();
    const senha = document.getElementById("senhaUsuario").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        alert(`Bem-vindo, ${email}!`);
        window.location.href = "home.html"; // Redireciona para a Home após login
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao fazer login: " + error.message);
    }
});
