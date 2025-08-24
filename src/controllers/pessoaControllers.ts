import { Request, Response } from 'express';
import { pessoaS } from '../schemas/pessoaSchema';
import { IPessoa } from '../interfaces/pessoaInterface'

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
        message: 'Pessoa inserida',
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

export const allPessoa = async(req: Request, res: Response) => {
  const pessoas = await pessoaS.find();
  res.status(200).json({
    inf: pessoas
  });
}
//export const buscarPessoa = (req:)
//68ab8a8e9ec8be94fe0f6573