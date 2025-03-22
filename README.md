👨‍💻 Projeto de Cadastro e Contato de Usuários

📝 Descrição do Projeto
Este projeto consiste em uma aplicação web simples para cadastro de usuários e um formulário de contato. Foi desenvolvido para praticar conceitos de HTML, CSS e JavaScript, além de explorar boas práticas de organização de código e navegação entre páginas.

Funcionalidades Principais:
Cadastrar usuários com nome e e-mail.

Exibir a lista de usuários cadastrados.

Navegar entre as páginas de cadastro, contato e "Sobre".

Enviar mensagens através de um formulário de contato.

🚀 Passos para Rodar o Projeto
Clone o repositório:

Acesse a pasta do projeto:

Abra os arquivos no navegador:

Abra o arquivo index.html (ou cadastro.html) no seu navegador para acessar a página inicial.

Navegue entre as páginas usando os botões disponíveis.


🛠 Problemas Encontrados e Ajustes Realizados
Durante o desenvolvimento, os seguintes problemas foram identificados e corrigidos:

1. Código HTML Desorganizado
Problema: O código HTML original continha estilos inline, tags obsoletas (como <center>), e atributos incorretos (como for em <input>).

Solução:

Removi os estilos inline e centralizei tudo no arquivo style.css.

Substituí a tag <center> por classes CSS (text-align: center).

Corrigi os atributos e a semântica das tags.

2. Duplicação de Código
Problema: Havia duplicação de seletores CSS (por exemplo, button estava definido duas vezes) e lógica repetida no JavaScript.

Solução:

Unifiquei os seletores CSS em um único bloco.

Refatorei o JavaScript para evitar repetição de código, criando funções reutilizáveis como renderizarUsuarios.

3. Falta de Validação de Campos
Problema: O formulário de cadastro não validava se o e-mail já estava cadastrado ou se estava em um formato válido.

Solução:

Adicionei validação de e-mail usando uma expressão regular.

Implementei uma verificação para evitar e-mails duplicados.

4. Navegação Entre Páginas
Problema: Os botões de navegação não estavam funcionando corretamente ou estavam com caminhos incorretos.

Solução:

Corrigi os caminhos dos links e adicionei eventos onclick para redirecionar corretamente.

5. Conteúdo Irrelevante na Página "Sobre"
Problema: A página "Sobre" continha uma imagem de cachorro sem relação com o contexto do projeto.

Solução:

Substituí a imagem por um conteúdo relevante, como uma descrição da equipe e da missão do projeto.

6. Uso de Estilos Inline
Problema: Havia estilos inline no HTML, o que dificulta a manutenção e a consistência visual.

Solução:

Movi todos os estilos para o arquivo style.css.

7. Falta de Responsividade
Problema: O layout não estava adaptado para dispositivos móveis.

Solução:

Adicionei regras CSS para garantir que o layout seja responsivo.


🎯 Conclusão
Este projeto foi uma excelente oportunidade para praticar e aprimorar habilidades em desenvolvimento web, desde a estruturação de páginas com HTML até a estilização com CSS e a interatividade com JavaScript. Através da resolução dos problemas encontrados e da aplicação de boas práticas, conseguimos criar uma aplicação funcional, organizada e de fácil manutenção.

Agora, você está pronto para explorar o projeto! Sinta-se à vontade para clonar o repositório, rodar localmente e até mesmo contribuir com melhorias. Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato.

Obrigado por conferir este projeto! 🚀
