import express, { Request, Response } from 'express';
import pessoaRouter from './pessoaRoutes';

const app = express();
app.use(express.json());

app.use(pessoaRouter);

app.get('/', (req: Request, res: Response)=>{
   res.status(200).json({
     message: 'Rota principal'
   });
});

app.use((req: Request, res: Response)=>{
  res.status(404).json({
    message: 'Rota não encontrada'
  });
});

export default app;