import { Schema, model } from 'mongoose';
import { IPessoa } from '../interfaces/pessoaInterface';

// Criando schema para a tabrla pessoas
const pessoaShema = new Schema<IPessoa>({
  nome: {type: String, require: true},
  email: {type: String, require: true},
  endereco: {type: String, require:true},
  data: {
    criado: {type: Date, required: true},
    atualizado:{type: Date, require: true}
  }
});

// Criando o modelo e referência.
export const pessoaS = model<IPessoa>('Pessoa',pessoaShema)