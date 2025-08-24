import { Request, Response, NextFunction } from 'express';
import { IPessoa } from '../interfaces/pessoaInterface';


 export const padronizarPessoa = (req: Request<{}, {}, IPessoa>, res: Response, next: NextFunction) => {
   const campoNum: number = propValueVazio(req.body).length;
   const validEmail: number = isEmail(req.body.email);
   
   if(campoNum < 1 || validEmail === -1){
    res.status(404).json({
      message: 'Campo(s) vazio(s) e/ou formato inválido'
    })
   }
   
   else{
     const keyNum: number= Object.keys(req.body).length;
  
     if(campoNum !== keyNum){
       res.status(404).json({
         message: 'Existem campos vazio'
       });
     }
     
     else{
       const pessoa: IPessoa = {
         nome: palavraMaius(req.body.nome.trim()),
         email: req.body.email.trim(),
         endereco: palavraMaius(req.body.endereco.trim())
       }
       
       req.body= pessoa
       
       next();
     }
   }
   
};

export const propValueVazio = (args: IPessoa) => {
  return Object.values(args)
    .map(e=>e)
    .filter(e=>e!=""&&e!=" ");
}

export const palavraMaius = (nome: string) => {
  return nome.split(" ")
    .map(e=>e.replace(e[0],e[0].toUpperCase()))
    .join(" ")
}

export const isEmail = (email: string) =>{
  return email.indexOf('@');
}