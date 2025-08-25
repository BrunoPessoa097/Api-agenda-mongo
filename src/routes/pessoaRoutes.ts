import { Router } from 'express';
import { padronizarPessoa } from '../middlewares/pessoaMiddleware';
import { addPessoa, 
        allPessoa, 
        buscarPessoaId,
        atualizarPessoa} from '../controllers/pessoaControllers';

const pessoaRouter: Router = Router();

pessoaRouter.route('/pessoa')
  .post(padronizarPessoa, addPessoa)
  .get(allPessoa);
pessoaRouter.route('/pessoa/:id')
  .get(buscarPessoaId)
  .put(padronizarPessoa, atualizarPessoa);

export default pessoaRouter;