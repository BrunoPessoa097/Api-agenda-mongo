import swaggerJsdoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API agenda",
      version: "1.1.0",
      description: `API CRUD para manipulação de usuário(s)
      \n **Desenvolvido por** Bruno Pessoa
      \n **LinkedIn:** [https://www.linkedin.com/in/bruno-pessoa-097/](https://www.linkedin.com/in/bruno-pessoa-097/)
      \n **GiHub:** [https://github.com/BrunoPessoa097/api-agenda.git](https://github.com/BrunoPessoa097/api-agenda.git)
      \n **License**: MIT
      `,
      contact: {
        name: "Bruno Pessoa",
        url: "https://www.linkedin.com/in/bruno-pessoa-097/"
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/license/mit"
      }
    },
  },
  apis: ["./src/routes/*.ts"]
}

export const swaggerSpecs = swaggerJsdoc(swaggerOptions);