import dotenv from 'dotenv';
import app from './routes/app';
import conn from './config/db/mongo';

// Importando dotenv.
dotenv.config();
const env = process.env;

// Configurando a porta do servidor.
const PORT: number = parseInt(`${env.PORT || 5000}`);

// Iniciando o servidor.
app.listen(PORT, () => {
  console.log('Servidor rodando!');
  console.log(`Porta: ${PORT}`);
  // Iniciando o banco de dados.
  conn();
})