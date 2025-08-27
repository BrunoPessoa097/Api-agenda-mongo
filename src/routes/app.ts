import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import permissionsPolicy from 'permissions-policy';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from '../config/swagger';


// imports de arquivos criados.
import politics from '../config/politics';
import pessoaRouter from './pessoaRoutes';

const app = express();

// Configurando os middlewares.
app.use(express.json());
app.use(helmet ());
app.use(cors({
  origin: 'http://localhost', // Para adicionar novas origens transformad num array.
  methods: ['GET','POST','PUT','DELETE'] // Métodos permitidos.
}));
// Políticas de privacidade.
app.use(permissionsPolicy({
  features: politics
}))

// Importando rotas.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs,{
  customCss: `
    .response-headers-wrapper {
      display: none !important;
    }
  `
}))
app.use(pessoaRouter);

/**
 * @swagger
 * tags:
 *   name: Rotas padrão
 *   description: Rotas padrão da API
 */

/**
 * @swagger
 * /:
 *  get:
 *   summary: Rota padrão da API.
 *   tags: [Rotas padrão]
 *   responses:
 *    200:
 *     description: Rota principal
 *
 * /aa:
 *  get:
 *   summary: 404
 *   tags: [Rotas padrão]
 *   responses:
 *    404:
 *     description: Rota não encontrada.
 */
app.get('/', (req: Request, res: Response)=>{
   // Rota padrão.
  res.status(200).json({
     message: 'Rota principal'
   });
});

app.use((req: Request, res: Response)=>{
  // Rota Default.
  res.status(404).json({
    message: 'Rota não encontrada'
  });
});

export default app;