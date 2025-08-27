import { Router } from 'express';
import { padronizarPessoa } from '../middlewares/pessoaMiddleware';
import { addPessoa, 
        allPessoa, 
        buscarPessoaId,
        atualizarPessoa,
        exluirPessoa} from '../controllers/pessoaControllers';

const pessoaRouter: Router = Router();

// Rotas de pessoas.
/**
 * @swagger
 * tags:
 *  name: Pessoas
 *  description: Rotas de pessoas
 */

/**
 * @swagger
 * /pessoa:
 *  post:
 *   summary: Cria um novo usuário
 *   tags: [Pessoas]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       required:
 *        - nome
 *        - email
 *        - endereco
 *       properties:
 *        nome:
 *         type: string
 *         exemple: Bruno
 *        email:
 *         type: string
 *         exemple: bruno@hotmail.com
 *        endereco:
 *         type: string
 *         exemple: Rua A
 *   responses:
 *    201:
 *     description: Pessoa inserida.
 *    404:
 *     description: Nome ou e-mail já cadastrados.
 *  
 *  get:
 *   summary: Lista todos os usuários.
 *   tags: [Pessoas]
 *   responses:
 *    200:
 *     description: pessoas
 */
pessoaRouter.route('/pessoa')
  .post(padronizarPessoa, addPessoa)
  .get(allPessoa);
/**
 * @swagger
 * /pessoa/{id}:
 *  get:
 *   summary: Buscar usuário.
 *   tags: [Pessoas]
 *   parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *       type: string
 *      description: Id do usuário.
 *   responses:
 *    200:
 *     description: Usuário encontrado
 *    404:
 *     description: Usuário não encontrado.
 *
 *  put:
 *   sumamary: Atualizar usuário.
 *   tags: [Pessoas]
 *   parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *       type: string
 *      description: Id do usuário.
 *   requestBody:
 *    requires: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        nome:
 *         type: string
 *        email:
 *         type: string
 *        endereco:
 *         type: string
 *   responses:
 *    201:
 *     description: Dados Atualizados
 *    404:
 *     description: Erro ao atualizar.
 *
 *  delete:
 *   summary: Deletar usuário pelo ID.
 *   tags: [Pessoas]
 *   parameters:
 *    - name: id
 *      in: path
 *      required: true
 *      schema:
 *       type: string
 *      description: ID válido do usuário.
 *   responses:
 *    201:
 *     description: Usuário deletado.
 *    404:
 *     description: Error ao excluir.
 */
pessoaRouter.route('/pessoa/:id')
  .get(buscarPessoaId)
  .put(padronizarPessoa, atualizarPessoa)
  .delete(exluirPessoa);

export default pessoaRouter;