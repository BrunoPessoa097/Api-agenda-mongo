import mongoose from 'mongoose';

/**
 * Faz a conexão com o banco de dados
 */

const conn = async(): Promise<any> => {
  // recebendo l valor da variável do .env
  let url:string = process.env.MONGODB_URL as string;
  
  if(!url) {
    console.log('erro na variavel');
    process.exit(1);
  }
  
  try {
    // Fazendo conexão com o banco de dados.
    await mongoose.connect(url).then(()=>{
      console.log('Banco de dados conectado');
    }).catch((error)=>{
      console.log('Erro ao conectar ao banco se dados')
    })
  }catch(error){
    // Tratamento de erro.
    console.log('Error ao conectar');
    console.log(error);
  }
}

export default conn;