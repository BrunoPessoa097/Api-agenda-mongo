import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import permissionsPolicy from 'permissions-policy';

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
app.use(pessoaRouter);

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