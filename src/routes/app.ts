import express, { Request, Response } from 'express';
import pessoaRouter from './pessoaRoutes';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(helmet ());
app.use(cors({
  origin: 'http://localhost',
  methods: ['GET','POST','PUT','DELETE']
}))

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