import { Document, ObjectId  } from 'mongoose';

// Interface para a entrada dos usuários.
export interface IPessoa{
  nome: string
  email: string,
  endereco: string,
  data?: {
    criado?: Date,
    atualizado?: Date,
  }
}

// Interface para basear no banco de dados.
export interface IPessoa1 extends Document {
  nome: string
  email: string,
  endereco: string,
  data?: {
    criado?: Date,
    atualizado?: Date,
  }
}