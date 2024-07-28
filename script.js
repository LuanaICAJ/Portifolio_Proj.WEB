document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
        } else {
            // Aqui você pode adicionar o código para enviar o formulário via AJAX, por exemplo.
            alert('Formulário enviado com sucesso!');
        }
    });
});
