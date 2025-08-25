import { Request, Response } from 'express';
import { pessoaS } from '../schemas/pessoaSchema';
import { IPessoa, IPessoa1 } from '../interfaces/pessoaInterface'

export const addPessoa = async(req: Request, res: Response) => {
  try{
    req.body.data = {
      criado: new Date(),
      atualizado: new Date()
    }
    const pessoa: IPessoa1 = new pessoaS({
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
  const pessoas:IPessoa1[] = await pessoaS.find();
  res.status(200).json({
    inf: pessoas
  });
}
export const buscarPessoaId = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try{
    const pessoa = await pessoaS.findById(id);

    if(pessoa){
      res.status(200).json({
        message: 'usuário encontrado',
        inf: pessoa
      });
    }else{
      res.status(400).json({
        mensage: 'usuario nao encontrado',
        id
      });
    }
  }catch(error){
      res.status(404).json({
        mensage: 'Erro na sua requisição',
        erro: error
      })
  }
}

export const atualizarPessoa = async(req: Request, res: Response) => {
  req.body.data = {
    atualizado: new Date()
  }
  const id: string = req.params.id;
  const pessoa = await pessoaS.findById(id);
  
  if(pessoa){
    try{
      const atualizar = {
        ...req.body
      };
  
      const ok = await pessoaS.findByIdAndUpdate(id,atualizar)
  
      res.status(200).json({
        message: 'ok',
        infAtua: pessoa
      })
    }catch(error){
      res.status(400).json({
        message: "Error",
        error
      })
    }
  }else{
    res.status(404).json({
      message: 'Pessoa nao emcontrada'
    })
  }
  

}
//68ab8a8e9ec8be94fe0f6573
//{"_id":{"$oid":"68ab7afffb04adc6b30956b1"},"nome":"Lígia","email":"ligia@gmail","endereco":"Rua E","data":{"criado":{"$date":{"$numberLong":"1756068607540"}},"atualizado":{"$date":{"$numberLong":"1756068607540"}}},"__v":{"$numberInt":"0"}}