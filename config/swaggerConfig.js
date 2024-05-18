// swaggerConfig.js

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Product API',
    version: '1.0.0',
    description: 'API for managing products',
  },
  servers: [
    {
      url: 'http://localhost:5000', // Replace with your server URL
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Adjust the path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
