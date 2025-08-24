import { Router } from 'express';
import { padronizarPessoa } from '../middlewares/pessoaMiddleware';
import { addPessoa } from '../controllers/pessoaControllers';

const pessoaRouter: Router = Router();

pessoaRouter.route('/pessoa')
  .post(padronizarPessoa, addPessoa);

export default pessoaRouter;