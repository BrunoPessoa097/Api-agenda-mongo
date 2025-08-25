import { Document, ObjectId  } from 'mongoose';

export interface IPessoa{
  nome: string
  email: string,
  endereco: string,
  data?: {
    criado?: Date,
    atualizado?: Data,
  }
}

export interface IPessoa1 extends Document {
  nome: string
  email: string,
  endereco: string,
  data?: {
    criado?: Date,
    atualizado?: Data,
  }
}