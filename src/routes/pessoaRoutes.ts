import { Router } from 'express';
import { padronizarPessoa } from '../middlewares/pessoaMiddleware';
import { addPessoa, 
        allPessoa, 
        buscarPessoaId,
        atualizarPessoa,
        exluirPessoa} from '../controllers/pessoaControllers';

const pessoaRouter: Router = Router();

// Rotas de pessoas.
pessoaRouter.route('/pessoa')
  .post(padronizarPessoa, addPessoa)
  .get(allPessoa);
pessoaRouter.route('/pessoa/:id')
  .get(buscarPessoaId)
  .put(padronizarPessoa, atualizarPessoa)
  .delete(exluirPessoa);

export default pessoaRouter;