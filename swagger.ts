// swagger.ts
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Pessoas',
      version: '1.0.0',
      description: 'Documentação da API de Pessoas usando Swagger',
    },
    components: {
      schemas: {
        Pessoa: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            idade: { type: 'integer' },
            email: { type: 'string' }
          }
        }
      }
    }
  },
  apis: ['./controllers/*.ts'], // Caminho para os arquivos que contêm os comentários JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
