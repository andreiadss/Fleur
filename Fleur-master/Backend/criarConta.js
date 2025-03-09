import { auth, db } from "../../Backend/firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.getElementById("criarContaForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
    const email = document.getElementById("emailUsuario").value.trim();
    const senha = document.getElementById("senhaUsuario").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        const user = userCredential.user;

        await setDoc(doc(db, "usuarios", user.uid), {
            nomeUsuario: nomeUsuario,
            email: email
        });

        alert("Conta criada com sucesso! Agora, finalize seu cadastro.");
        window.location.href = "concluirCadastro.html";
    } catch (error) {
        console.error("Erro ao criar conta:", error);
        alert("Erro ao criar conta: " + error.message);
    }
});
