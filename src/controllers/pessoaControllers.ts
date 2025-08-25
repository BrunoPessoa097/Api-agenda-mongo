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
    await pessoaS.findById(id)
      .then((dados)=>{
        res.status(200).json({
          message: 'Usuario encontrado',
          inf: dados
        })
      }).catch((error)=>{
        res.status(200).json({
          message: 'Usuario nao encontado'
        })
      });
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
  const pessoa: IPessoa1 | any = await pessoaS.findById(id);
  
  if(pessoa){
    try{
      const atualizar:IPessoa = {
        ...req.body
      };
  
      await pessoaS.findByIdAndUpdate(id,atualizar)
        .then((dados)=>{
          res.status(200).json({
            message: 'Dados Atualizados',
            inf: atualizar
          })
        })
        .catch((error)=>{
          res.status(404).json({
            message: "Error ao atualizar",
            error
          })
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

export const exluirPessoa = async(req:Request, res: Response) => {
  const id: string = req.params.id; 
  const exist: IPessoa1 | any = await pessoaS.findById(id);

  if(exist) {
    await pessoaS.findByIdAndDelete(id)
      .then((e)=>{
        res.status(200).json({
          message: 'Usuario deletado',
          inf: e
        })
      })
      .catch((error)=>{
        res.status(404).json({
          mensage: 'Erro ao excluir',
          error
        });
      });

  }else{
    res.status(404).json({
      message: 'Pessoa não encontrada'
    })
  }
}
//68ab8a8e9ec8be94fe0f6573
//{"_id":{"$oid":"68ab7afffb04adc6b30956b1"},"nome":"Lígia","email":"ligia@gmail","endereco":"Rua E","data":{"criado":{"$date":{"$numberLong":"1756068607540"}},"atualizado":{"$date":{"$numberLong":"1756068607540"}}},"__v":{"$numberInt":"0"}}