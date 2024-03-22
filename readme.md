# API de Pessoas

Esta é uma API simples para realizar operações CRUD (Create, Read, Update, Delete) em uma lista de pessoas. A API foi desenvolvida em Node.js utilizando o framework Express e TypeScript, e também inclui documentação Swagger para facilitar o entendimento das rotas disponíveis.

## Instalação

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).
2. Clone este repositório para o seu computador usando o seguinte comando:
   ```
   git clone https://github.com/seu-usuario/api-pessoas.git
   ```
3. Navegue até o diretório do projeto:
   ```
   cd api-pessoas
   ```
4. Instale as dependências do projeto utilizando o npm:
   ```
   npm install
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando:
```
npm start
```

Isso iniciará o servidor na porta 3000 por padrão.

Para acessar a documentação Swagger, abra um navegador da web e navegue para o seguinte URL:
```
http://localhost:3000/api-docs
```

Isso exibirá a interface do Swagger UI, onde você poderá explorar a documentação da API e interagir com as rotas disponíveis.

## Rotas Disponíveis

- GET /pessoas: Retorna todas as pessoas.
- GET /pessoas/:id: Retorna uma pessoa pelo ID.
- POST /pessoas: Adiciona uma nova pessoa.
- PUT /pessoas/:id: Atualiza os dados de uma pessoa pelo ID.
- DELETE /pessoas/:id: Remove uma pessoa pelo ID.

Certifique-se de substituir `localhost:3000` pelo host e porta onde o servidor está sendo executado, se estiver usando configurações diferentes.

## Bibliotecas Utilizadas

- [Express](https://expressjs.com/): Framework web rápido, não opinativo e minimalista para Node.js.
- [TypeScript](https://www.typescriptlang.org/): Superset de JavaScript que adiciona tipagem estática à linguagem.
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express): Middleware para servir a interface do Swagger UI no Express.
- [Swagger JSDoc](https://www.npmjs.com/package/swagger-jsdoc): Ferramenta para gerar documentação Swagger a partir de comentários JSDoc em código JavaScript/TypeScript.
- [JSON Server](https://www.npmjs.com/package/json-server): Simula um servidor RESTful a partir de um arquivo JSON.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).