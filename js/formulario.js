// Seleciona o formulário
const form = document.querySelector('form');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação básica dos campos (você pode adicionar mais validações conforme necessário)
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return; // Impede o envio se houver campos vazios
    }

    // Se a validação passar, exibe o alerta de sucesso e redireciona
    alert('Mensagem enviada com sucesso!');
    window.location.href = '../index.html'; // Redireciona para index.html
});