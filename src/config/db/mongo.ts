import mongoose from 'mongoose';

const conn = async(): Promise<any> => {
  let url:string = process.env.MONGODB_URL as string;
  
  if(!url) {
    console.log('erro na variavel');
    process.exit(1);
  }
  
  try {
    await mongoose.connect(url);
    console.log('Banco conectado');
  }catch(error){
    console.log('Error ao conectar');
    console.log(error);
  }
}

export default conn;