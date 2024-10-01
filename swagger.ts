// swagger.ts
import swaggerJsDoc from 'swagger-jsdoc';
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'DJOKWA API',
      version: '1.0.0',
      description: 'API documentation for the DJOKWA platform',
    },
    servers: [
      {
        url: `http://localhost:${PORT}/`,
      },
    ],
  },
  apis: ['./src/routes/*route.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
