import dotenv from 'dotenv';
import app from './routes/app';
import conn from './config/db/mongo';


dotenv.config();
const env = process.env;

const PORT: number = parseInt(`${env.PORT || 5000}`);

app.listen(PORT, () => {
  console.log('Servidor rodando!');
  console.log(`Porta: ${PORT}`);
  conn();
})