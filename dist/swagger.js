"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.default = swaggerDocs;
