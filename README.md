# Projeto CRUD de Produtos com Node.js e MySQL (ProductNodeJS)

Este projeto é uma aplicação CRUD para gerenciamento de produtos. Ele usa Node.js, Express.js e Sequelize para criar uma API RESTful. O banco de dados é gerenciado pelo MySQL, e as rotas do Express.js são configuradas para fornecer a funcionalidades. O projeto também inclui validações e middlewares para garantir a integridade dos dados.

## 📚 Índice

1. [Recursos do Projeto](#recursos-do-projeto)
2. [📦 Instalação](#instalação)
3. [🛠️ Configuração do Banco de Dados](#configuração-do-banco-de-dados)
4. [📄 Uso da API](#uso-da-api)
5. [🗂️ Estrutura do Projeto](#estrutura-do-projeto)
6. [🔗 Links Úteis](#links-úteis)


## Recursos do Projeto

- Operações CRUD para gerenciamento de produtos.
- Configuração flexível do banco de dados usando variáveis de ambiente.
- Middleware para validação de dados do produto.
- Sistema de migrações para alterações no banco de dados.

## 📦 Instalação

Para instalar o projeto e suas dependências, siga estas etapas:

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/rafaelmarcellodev/ProductNodeJS.git
   ```

2. **Acesse o Diretório do Projeto**:
   ```bash
   cd ProductNodeJS
   ```

3. **Instale as Dependências**:
   ```bash
   npm install
   ```

4. **Configure as Variáveis de Ambiente**:
   Crie um arquivo `.env` no diretório raiz e adicione as seguintes configurações:

   ```env
   NODE_ENV=development  # Pode ser 'development' ou 'production'.
   PORT=3000  # Porta para o servidor

   #Configuração do banco de dados de DESENVOLVIMENTO
   DB_NAME_DEV="db_name"
   DB_USER_DEV="db_user"
   DB_PASS_DEV="db_password"
   DB_HOST_DEV="db_host"

   #Configuração do banco de dados de PRODUCAO
   DB_NAME_PRD="db_name"
   DB_USER_PRD="db_user"
   DB_PASS_PRD="db_password"
   DB_HOST_PRD="db_host"
   ```
   
## 🛠️ Configuração do Banco de Dados

Este projeto usa MySQL para o banco de dados. Certifique-se de que o MySQL está instalado e funcionando.

1. **Crie o Banco de Dados (development ou production)**:
   ```bash
   npx sequelize-cli db:create --env development
   ```
   ```bash
   npx sequelize-cli db:create --env production
   ```

2. **Sincronize o Banco de Dados**:
   No arquivo principal do projeto, o banco de dados é sincronizado usando o Sequelize. Quando você inicia o servidor, ele sincroniza o banco de dados para garantir que todas as tabelas estejam corretas.

   ```javascript
   sequelize.sync()
   ```

## 📄 Uso da API

Para interagir com a API CRUD de produtos, você pode usar ferramentas como exemplo o Postman. Aqui estão alguns exemplos de operações CRUD:

Se preferir importar a collection do Postman, na raiz do projeto contém um arquivo chamado `ProductNodeJS.postman_collection.json`

- **Criar Produto (POST)**:
   Envie uma solicitação POST para `/api/products` com um corpo JSON contendo detalhes do produto.

   ```json
   {
     "name": "Novo Produto",
     "price": 10.99,
     "stock": 20
   }
   ```

- **Obter Todos os Produtos (GET)**:
   Envie uma solicitação GET para `/api/products` para obter uma lista de todos os produtos.

- **Obter Produto pelo ID (GET)**:
   Envie uma solicitação GET para `/api/products/id/:id` para obter detalhes de um produto específico por ID.

- **Obter Produto pelo NAME (GET)**:
   Envie uma solicitação GET para `/api/products/name/:name` para obter detalhes de um produto específico por NAME.   

- **Atualizar Produto pelo ID (PUT)**:
   Envie uma solicitação PUT para `/api/products/:id` com os dados atualizados do produto.

   ```json
   {
     "name": "Produto Atualizado",
     "price": 65.99,
     "stock": 50
   }
   ```

- **Excluir Produto pelo ID (DELETE)**:
   Envie uma solicitação DELETE para `/api/products/:id` para excluir um produto pelo ID.

## 🗂️ Estrutura do Projeto

A estrutura do projeto é organizada para manter separação entre modelos, controladores, rotas, e middlewares. Aqui está uma visão geral:

```
- /controllers
  - productController.js
- /models
  - productModel.js
- /routes
  - productRoutes.js
- /middlewares
  - productValidator.js
- /config
  - sequelize.js
- /migrations
- index.js
- package.json
```

## 🔗 Links Úteis

Aqui estão alguns links para documentação e recursos úteis das tecnologias usadas no projeto:

- [Documentação do Node.js](https://nodejs.org/en/docs/)
- [Documentação do Express.js](https://expressjs.com/)
- [Documentação do Sequelize](https://sequelize.org/)
- [Documentação do MySQL](https://dev.mysql.com/doc/)