import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

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