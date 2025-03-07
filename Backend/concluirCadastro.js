document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {};
        new FormData(form).forEach((value, key) => {
            formData[key] = value;
        });

        console.log("Cadastro enviado", formData);
    });
});
