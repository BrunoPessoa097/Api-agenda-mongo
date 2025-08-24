import { Router } from 'express';
import { padronizarPessoa } from '../middlewares/pessoaMiddleware';
import { addPessoa, allPessoa } from '../controllers/pessoaControllers';

const pessoaRouter: Router = Router();

pessoaRouter.route('/pessoa')
  .post(padronizarPessoa, addPessoa)
  .get(allPessoa);

export default pessoaRouter;