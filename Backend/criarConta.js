document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("criarContaForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        const formData = {};
        new FormData(form).forEach((value, key) => {
            formData[key] = value;
        });

        // Verifica se a senha e a confirmação da senha coincidem
        if (formData.senhaUsuario !== formData.confirmarSenha) {
            alert("As senhas não coincidem. Tente novamente.");
            return; // Impede o envio se as senhas não coincidirem
        }

        // Exibe os dados no console
        console.log("Cadastro de Conta:", formData);

        // Se as senhas coincidirem, redireciona para a próxima página
        window.location.href = "concluirCadastro.html";
    });
});
