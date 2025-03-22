function enviaProBack() {
    console.log("Enviado para o back, o resto os dev fazem!");
    // 1. Sugestão: Adicionar um comentário explicando o propósito da função.
    // Exemplo: "Simula o envio dos dados para o backend."
}

const form = document.getElementById("myForm");
// 2. Atenção: O código tenta selecionar um elemento com ID "myForm",
// mas no HTML fornecido anteriormente, o formulário não tem um ID.
// Certifique-se de que o formulário tenha o ID correto, como:
// <form id="myForm" action="..." method="...">

form.addEventListener("submit", function(event) {
    event.preventDefault(); // 3. Boa prática: Impede o envio padrão do formulário.

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    console.log("Nome: " + name);
    console.log("Email: " + email);
    // 4. Sugestão: Usar template literals para melhorar a legibilidade.
    // Exemplo: console.log(`Nome: ${name}, Email: ${email}`);

    alert("Formulário interceptado! Não quero enviar pro back.");
    // 5. Sugestão: A mensagem do alerta poderia ser mais informativa.
    // Exemplo: "Formulário validado! Os dados não serão enviados ao backend."
});