import { auth, db } from "../../Backend/firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        alert("Usuário não autenticado! Redirecionando para o login...");
        window.location.href = "login.html";
    }
});

document.getElementById("cadastroForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const nomeCompleto = document.querySelector("input[name='nome']").value.trim();
    const dataNascimento = document.querySelector("input[name='dataNascimento']").value;
    const semanasGestacao = document.querySelector("input[name='semanasGestacao']").value;
    const dataParto = document.querySelector("input[name='dataParto']").value;
    const nomeBebe = document.querySelector("input[name='nomeBebe']").value.trim();
    const condicoesSaude = document.querySelector("input[name='condicoesSaude']").value.trim();
    const hospital = document.querySelector("input[name='hospital']").value.trim();

    const user = auth.currentUser;

    if (user) {
        try {
            await setDoc(doc(db, "usuarios", user.uid), {
                nomeCompleto: nomeCompleto || "Nome não informado",
                dataNascimento: dataNascimento || "Data não informada",
                semanasGestacao: semanasGestacao || "Não informado",
                dataParto: dataParto || "Não informado",
                nomeBebe: nomeBebe || "Cadastre o nome do bebê",
                condicoesSaude: condicoesSaude || "Nenhuma condição informada",
                hospital: hospital || "Nenhum hospital informado"
            }, { merge: true });

            alert("Cadastro atualizado com sucesso!");
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);

        } catch (error) {
            console.error("Erro ao salvar informações:", error);
            alert("Erro ao salvar informações. Tente novamente.");
        }
    }
});
