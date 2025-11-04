import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Xpense Control API',
      version: '1.0.0',
      description: 'Documentação da API de controle financeiro (Node + Prisma + JWT)',
    },
    servers: [
      {
        url: 'http://localhost:3333',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Caminhos para gerar docs
};

export const swaggerSpec = swaggerJSDoc(options);
