declare module 'swagger-jsdoc' {
  import { SwaggerDefinition } from 'swagger-schema-official';

  export interface Options {
    swaggerDefinition: SwaggerDefinition;
    apis: string[];
  }

  export default function swaggerJsDoc(options: Options): any;
}
