import { Request, Response } from 'express';
import { pessoaS } from '../schemas/pessoaSchema';
import { IPessoa, IPessoa1 } from '../interfaces/pessoaInterface'

export const addPessoa = async(req: Request, res: Response) => {
  try{
    // Adiciona as datas nos campos em branco.
    req.body.data = {
      criado: new Date(),
      atualizado: new Date()
    }

    // Criando um usuário com os parâmetros do banco de dados.
    const pessoa: IPessoa1 = new pessoaS({
      ...req.body
    });

    // Verificar se nome e e-mail existem.
    const acheiNome = await pessoaS.findOne({nome: req.body.nome})
    const acheiEmail = await pessoaS.findOne({email: req.body.email})

    // Caso exista.
    if(acheiNome || acheiEmail){
      res.status(404).json({
        message: 'Nome ou e-mail ja cadastrados.'
      });
    }
    // Caso usuário e e-mail não exista.
    else{
      await pessoa.save();
      res.status(201).json({
        message: 'Pessoa inserida',
        inf: pessoa
      })
    }
  }
  // Saída em caso de erro.
  catch(error){
    console.log(error);
    res.status(404).json({
      message: 'Problema ao cadastrar',
      error: error
    })
  }
}


export const allPessoa = async(req: Request, res: Response) => {
  // Buscando todos os usuários.
  const pessoas:IPessoa1[] = await pessoaS.find();
  res.status(200).json({
    inf: pessoas
  });
}
export const buscarPessoaId = async (req: Request, res: Response) => {
  // Recebendo o id.
  const id: string = req.params.id;

  try{
    // Buscanco e retornando o usuário com base pelo id.
    await pessoaS.findById(id)
      .then((dados)=>{
        res.status(200).json({
          message: 'Usuario encontrado',
          inf: dados
        })
      }).catch((error)=>{
        res.status(404).json({
          message: 'Usuario nao encontado'
        })
      });
  }
  // Tratamento de erro.
  catch(error){
      res.status(404).json({
        mensage: 'Erro na sua requisição',
        erro: error
      })
  }
}

export const atualizarPessoa = async(req: Request, res: Response) => {
  // Adicionando no parâmetros data da atualização do usuário.
  req.body.data = {
    atualizado: new Date()
  }
  
  // Recendo o id do usuário e verificando se o mesmo existe.
  const id: string = req.params.id;
  const pessoa: IPessoa1 | any = await pessoaS.findById(id);
  
  if(pessoa){
    try{
      // criando um objeto pessoa para atualizar as informações recebidas pelo req.
      const atualizar:IPessoa = {
        ...req.body
      };

      // Buscando o usuário pelo o Id e caso exista atualiza senão retorna erro
      await pessoaS.findByIdAndUpdate(id,atualizar)
        .then((dados)=>{
          res.status(201).json({
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
    }
    // tratamento de erro.
    catch(error){
      res.status(404).json({
        message: "Error",
        error
      })
    }
  }
  // Retornando se pessoa que foi buscada não existe.
  else{
    res.status(404).json({
      message: 'Pessoa nao emcontrada'
    })
  }
}

export const exluirPessoa = async(req:Request, res: Response) => {
  // recebendo o Id para exclusão do usuário e verificando se o mesmo existe.
  const id: string = req.params.id; 
  const exist: IPessoa1 | any = await pessoaS.findById(id);

  // Veirificando se existe o usuário.
  if(exist) {
    // Busca o usuário e deleta pelo id senão achar retorna usuário nao encontrado.
    await pessoaS.findByIdAndDelete(id)
      .then((e)=>{
        res.status(201).json({
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

  }
  // Pessoa não enxontrado.
  else{
    res.status(404).json({
      message: 'Pessoa não encontrada'
    })
  }
}