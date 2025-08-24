import { Request, Response } from 'express';
import { pessoaS } from '../schemas/pessoaSchema';
//import { IPessoa } from ''

export const addPessoa = async(req: Request, res: Response) => {
  try{
    req.body.data = {
      criado: new Date(),
      atualizado: new Date()
    }
    const pessoa = new pessoaS({
      ...req.body
    });

    const acheiNome = await pessoaS.findOne({nome: req.body.nome})
    const acheiEmail = await pessoaS.findOne({email: req.body.email})

    if(acheiNome || acheiEmail){
      res.status(404).json({
        message: 'Nome ou e-mail ja cadastrados.'
      });
    }else{
      await pessoa.save();
      res.status(200).json({
        message: 'Pessoa Adicionada',
        inf: pessoa
      })
    }
  }catch(error){
    console.log(error);
    res.status(400).json({
      message: 'Problema ao cadastrar',
      error: error
    })
  }
}