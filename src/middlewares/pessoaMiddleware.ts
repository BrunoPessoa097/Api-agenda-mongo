import { Request, Response, NextFunction } from 'express';
import { IPessoa } from '../interfaces/pessoaInterface';


 export const padronizarPessoa = (req: Request<{}, {}, IPessoa>, res: Response, next: NextFunction) => {
   // Verificando se existe campos vazios e se o email é valido.
   const campoNum: number = propValueVazio(req.body).length;
   const validEmail: number = isEmail(req.body.email);

   // Se tiver campos em branco e/ou email não válido retorna erro.
   if(campoNum < 1 || validEmail === -1){
    res.status(404).json({
      message: 'Campo(s) vazio(s) e/ou formato inválido'
    })
   }

  // Campos válidos.
   else{
     // Ver o número de keys do objeto.
     const keyNum: number= Object.keys(req.body).length;

     // Verificar se todos os campos foram preenchido corretamente.
     if(campoNum !== keyNum){
       res.status(404).json({
         message: 'Existem campos vazio'
       });
     }

    // Todos os campos foram preenchidos.
     else{
       // cria um objeto pessoa padronizado
       
       const pessoa: IPessoa = {
         nome: palavraMaius(req.body.nome.trim()),
         email: req.body.email.trim(),
         endereco: palavraMaius(req.body.endereco.trim())
       }

       // req recebe os valores padronizados.
       req.body= pessoa

       next();
     }
   }
   
};

export const propValueVazio = (args: IPessoa) => {
  // recebe um objeto e retorna so os valores nao vazios ou em branco.
  return Object.values(args)
    .map(e=>e)
    .filter(e=>e!=""&&e!=" ");
}

export const palavraMaius = (nome: string) => {
  // Deixa todas as primeiras palavras em maiúscula.
  return nome.split(" ")
    .map(e=>e.replace(e[0],e[0].toUpperCase()))
    .join(" ")
}

export const isEmail = (email: string) =>{
  // verificar se é email.
  return email.indexOf('@');
}