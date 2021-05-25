# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Observações sobre o projeto

O projeto está rodando na porta 3000, tudo foi feito como pedido com a exceção do starred por meio deste endpoint : https://api.github.com/users/NOME_USUARIO/starred{/owner}{/repo}
pois não consegui fazer requisição por meio dele.

Ele foi feito utilizando a estratégia Mobile First, portanto é responsivo.
Foi pensado também na facilidade de uso do sistema.

Estou aberto a melhorias.

## Available Scripts

In the project directory, you can run:

### Configuração para Executar o projeto

1. Executar o comando npm i ou yarn na raiz do projeto
2. Executar o comando yarn start ou npm start para rodar o projeto na porta 3000

### Estrutura

O projeto contém 3 componentes atómicos que são o **Button**, **Card** e o **Search**
um arquivo de Views composto pelo compomente de **DetailUser** e **Results** o componente DetailUser apresenta as informações relacionadas aos detalhes do usuários que é possível ser visto ao clicar em detalhes.

Em results contém as informações relacionadas ao resultado ao digitar os usuários no campo de pesquisa e os repositórios deste usuário onde contém um link de cada repositório respectivamente.
