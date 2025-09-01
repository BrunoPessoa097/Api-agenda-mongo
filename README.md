q# API RestFull de Registo de Pessoas.
_API RestFull_ com _CRUD(create, registre, update e delete)_, para manipulação dos dados, feito em `Typescript`, `Node js`, `Express Js` e outras tecnologias, para afim de demostrar conhecimentos na manipulação de dados.

## Índice 
1. [Informações Sobre o Projeto](#informacoes-sobre-o-projeto)
2. [Funcionabilidade](#funcionabilidade)
3. [Tratamento de Erro nas Rotas](#tratamento-de-erro-nas-rotas)
4. [Atenção especial](#atencao-especial)
5. [Tecnologias Usadas](#tecnologia-usadas)
6. [Dependências](#depedencias)
7. [Como Iniciar o Projeto](#como-iniciar-o-projeto)
8. [Códigos da _API_](#codigos-da-api)
9. [Formato das informações](#formato-das-informacoes)
10. [_Endpoints_](#endpoints)
11. [Criado Por](#criado-por)
12. [License](#license)

## Informações Sobre o Projeto
* **Versão:** 1.1.0
* **Status:** Concluída 
* **Licença:** MIT

## Funcionabilidade 
* `GET /` - Rota Principal.
* `GET /<qualquer-rota-não-definida>` - Rota 404 não encontrado.
* `POST /pessoa` - Cria um novo usuário.
* `GET /pessoa` - Lista todas as pessoas.
* `GET /pessoa/{id}` - Buscar pessoa por ID.
* `PUT /pessoa/{id}` - Atualizar usuário pelo ID.
* `DELETE /pessoa/{id}` - Deletar o usuário usando o ID.
* `/api-docs` - Documentação da _API_ via _swagger_.

## Tratamento de Erro nas Rotas
Em cada _endpoint_ da _API_ em caso de erro irá retornar no seguinte formato:
```json
   {
     message: '<_endpoint_-nome>',
     error
   }
```

## Atenção Especial 
A _API_ está garantida de ter as melhores práticas de segurança usando o `helmet`, `cors` e `permissionsPolicy`, assim existem diversas configurações no qual garante a segurança da mesma, onde foi testada no [segurity headers](https://securityheaders.com/) garantindo boa nota(_API_ testada em: 25/08/2025), mais dependendo das configurações da máquina pode ocasionar algum tipo conflito, para fim de ajudar à sanar às principais dúvidas e/ou problemas no qual possa haver, segue abaixo algumas soluções para ajudar.
* Problema no: 
  * **`Cors`:** 
    O `cors` esta configurado para ter apenas permitidos os seguintes métodos `GET`,`PUT`,`POST` e `DELETE`, com origem local, podendo assim adicionar mais origens para o mesmo, aceitando assim outras origens como mostrado abaixo:
   ```typescript
      app.use(cors({
        origin: ['http://localhost','<nova-origin>'],
        methods: ['GET','POST','PUT','DELETE'] // Métodos permitidos.
      }));
   ```

  * **`Helmet`:** 
    O `helmet` ele garante que as informações do _heladers_ sejam ocultas e/ou desabilitada, para resolver caso for esse o problema remover ou apenas comentar o treche abaixo:
    ```typescript
       app.use(helmet());
    ```

  * **`permissionsPolicy`:** 
    A `permissionsPolicy` refere-se as permissão que a _API_ tem que no qual está desabilitadas todas como pode ver na variável que se encontra no seguinte caminho `src/config/politics.ts` e ativada no trecho abaixo:
    ```typescript
       app.use(permissionsPolicy({
         features: politics
       }))
    ```
  * **Outros problemas**
    Caso o problema não foi relacionado as dependências acima, existem outros problemas, no qual pode solucionar, segue abaixo o que pode fazer.
    1. Verificar a versão do `NodeJs` na qual usa, que pode ocasionar problema na versão.
    2. Verificar a versão das dependências que pode ocasionar error e/ou conflito.
    3. Atualizar a versao do `npm` ou `yarn`.
    4. Deixar os códigos acima comentado.
    5. Se os erros não for(em) os citados acima, verificar qual erro está ocorrendo.
    6. Verificar qual erro resulta e buscar fóruns para ver resolução.

## Tecnologias Usadas
* [Node.js](https://nodejs.org/pt) - Ambiente execução Javascript.
* [Express.js](https://expressjs.com/) - _Framework web_ Javascript.
* [Typescript](https://www.typescriptlang.org/) - Linguagem que adiciona tipagem ao Javascript.
* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação.
* [ECMAScript](https://ecma-international.org/publications-and-standards/standards/ecma-262/) - Especificação da linguagem Javascript.
* [Helmet](https://helmetjs.github.io/) - _Middleware_ para segurança.
* [MongoDB](https://www.mongodb.com/) - Banco de dados _NoSql_(banco de dados não relacional).
* [Swagger](https://swagger.io/) - Conjunto de ferramentas para documentar _API RestFull_.

## Dependências
* `express` - (versão: ^5.1.0) - _Framework web_ para Node js.
* `nodemon` - (versão: ^3.1.10) - Utilitário para facilitar o processo de desenvolvimento.
* `cors` - (versão: ^2.8.5) - Controlador de acesso de recursos.
* `dotenv` - (versão: ^17.2.1) - Carregar variáveis do ambiente.
* `ts-node` - (versão: ^10.9.2) - Interpretador typescript.
* `helmet` - (versão: ^8.1.0) - _Middleware_ para segurança.
* `cors` - (versão: ^2.8.5) - Mecanismo de segurança que permite acessar requisição de uma origem diferente.
* `mongoose` - (versão: ^8.18.0) - Banco de dados NoSql(banco nao relacional).
* `permissions-policy` - (versão: ^0.6.0) - Politica de permissões.
* `swagger-jsdoc` - (versão: ^6.2.8) - JsDoc voltado para interagir com o swagger.
* `swagger-ui-express` - (versão: ^5.0.1) - Biblioteca _swagger_ para interagir com o _Node express_.

## Como Iniciar o Projeto 
 1. Clone o projeto.
    ```shell
       git clone https://github.com/BrunoPessoa097/Api-agenda-mongo.git
    ```
 2. Instalar as dependência.
    * Via `npm`:
    ```shell
       npm install
    ```
    * Via `yarn`:
    ```shell
       yarn install
    ```
3. Criar uma conexão com o banco de dados `mongodb` localmente ou online.
4. Criar um arquivo `.env` e adicionar as seguintes variáveis com os respectivos valores à sua escolha.
   ```dotenv
      PORT=<porta-da-sua-escolha>
      MONGODB_URL:<sua-conexao>
   ```
5. Rodar a aplicação.
   * Usando `npm`:
     ```shell
        npm run start
     ```
   * Usando `yarn`:
     ```shell
        yarn start
     ```

## Codigos HTTP da _API_
* Em caso de sucesso:
  * 200 - Sucesso.
  * 201 - Sucesso e alterado.
* Em caso de erro/falha.
  * 404 - Erro.

## Formato das Informações 
```typescript 
   interface IPessoa{
        nome: string
        email: string,
        endereco: string,
        data?: {
          criado?: Date,
          atualizado?: Date,
        }
     }
```

## _Endpoints_
Todos os _endpoints_ abaixo seguem o princípio que retornaram sucesso, caso esteja em dúvida qual erro retornaria ver o [tratamento de erro nas rotas](#tratamemto-de-erro-nas-rotas).

### _Endpoin `/`
* **Método:** GET
* **Descrição:** Rota Principal.
* **Exemplo da requisição:**
  ```shell
   GET /
  ```
* **Respostas:**
  ```json
   {
      "message": "Rota principal"
   }
  ```
  
### _Endpoint_ `404`
* **Método:** 404
* **Descrição:** Rota não encontrada
* **Exemplo da requisição:**
  ```shell
   /
  ```
* **Resposta:**
  ```json
     {
       "message": "Rota não encontrada"
     }
  ```
### _Endpoint_ `/pessoa`
* **Método:** POST
* **Descrição:** Inserir usuário.
* **Requisitos:**
  * nome(obrigatório) - Nome
  * email(obrigatório) - E-mail
  * endereco(obrigatório) - Endereço
  * data.criacao(opcional) - Data quando a informação foi inserida.
  * data.atualizacao(opcional) - Data do último updata na informação.
* **Resposta:**
  ```json
      {
        "message": "Pessoa inserida",
        "inf": {
          "nome": "Juniroesssss",
          "email": "sddsdd@gmail",
          "endereco": "Rua E",
          "data": {
            "criado": "2025-08-26T02:52:48.240Z",
            "atualizado": "2025-08-26T02:52:48.240Z"
          },
          "_id": "68ad2180226049d2d4e48e8b",
          "__v": 0
        }
      }
  ```
### _Endpoint_ `/pessoa`
* **Método:** GET
* **Descrição:** Listar pessoas
* **Exemplo da requisição:**
  ```shell
   GET /pessoas
  ```
* **Respostas:**
  ```json
   {
      "inf": [
          {
            "nome": "Juniroesssss",
            "email": "sddsdd@gmail",
            "endereco": "Rua E",
            "data": {
              "criado": "2025-08-26T02:52:48.240Z",
              "atualizado": "2025-08-26T02:52:48.240Z"
            },
            "_id": "68ad2180226049d2d4e48e8b",
            "__v": 0
          }
        ]
   }
  ```
  
### _Endpoint_ `/pessoa/{id}`
* **Método:** GET
* **Descrição:** Buscar usuário.
* **Requisitos:**
  * id(obrigatório): ID válido 
* **Exemplo da requisição:**
    ```shell
    GET /pessoas/68ad2180226049d2d4e48e8b
    ```
* **Respostas:**
  ```json
      {
        "message": "Usuario encontrado",
        "inf": {
            "nome": "Juniroesssss",
            "email": "sddsdd@gmail",
            "endereco": "Rua E",
            "data": {
              "criado": "2025-08-26T02:52:48.240Z",
              "atualizado": "2025-08-26T02:52:48.240Z"
            },
            "_id": "68ad2180226049d2d4e48e8b",
            "__v": 0
        }
      }
  ```
### _Endpoint_ `/pessoa/{id}`
* **Método:** PUT
* **Descrição:** Atualizar usuário.
* **Requisitos:**
  * id(obrigatório): ID válido
  * nome(obrigatório) - Nome
  * email(obrigatório) - E-mail
  * endereco(obrigatório) - Endereço
  * data.criacao(opcional) - Data quando a informação foi inserida.
  * data.atualizacao(opcional) - Data do último updata na informação.
* **Respostas:**
  ```json
     {
      "message": "Dados Atualizados",
      "inf": {
        "nome": "Lígia Pessoa",
        "email": "ligia@gmail.com",
        "endereco": "Rua Lover",
        "data": {
          "atualizado": "2025-08-26T03:05:57.117Z"
         }
      }
    }
  ```
### _Endpoint_ `/pessoa/{id}`
* **Método:** DELETE
* **Descrição:** Pegar por id
* **Requisitos:**
  * id(obrigatório): ID válido
* **Resposta:**
  ```json
     {
        "message": "Usuario deletado",
        "inf": {
          "data": {
            "criado": "2025-08-24T20:50:07.540Z",
            "atualizado": "2025-08-24T20:50:07.540Z"
          },
          "_id": "68ab7afffb04adc6b30956b1",
          "nome": "Lígia",
          "email": "ligia@gmail",
          "endereco": "Rua E",
          "__v": 0
        }
      }
  ```
### _Endpoint_ `/api-docs`
* **Descrição:** Rota para testar, e fazer o teste de todas as rotas de maneira simples.

## Criado Por
* **Nome**: Bruno Pessoa
* **Área**: Desenvolver NodeJs|Typescript|Javascript
* **Formado**: UNIGRANDE - Centro Universitário da grande Fortaleza.
* **Curso**: Sistemas para _Internet_.
* **Git Hub**: [github.com/BrunoPessoa097](https://github.com/BrunoPessoa097/api-agenda.git)
* **LinkedIn**: [www.linkedin.com/in/bruno-pesoa-097](https://www.linkedin.com/in/bruno-pessoa-097/)

## _License_
Esse projeto esta sobre a licença `MIT` ©Bruno Pessoa - 2025.