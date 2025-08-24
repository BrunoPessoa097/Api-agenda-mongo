export interface IPessoa{
  nome: string
  email: string,
  endereco: string,
  data?: {
    criado?: Date,
    atualizado?: Data,
  }
}