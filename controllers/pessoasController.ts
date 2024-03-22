
/**
 * @swagger
 * components:
 *   schemas:
 *     Pessoa:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da pessoa
 *         nome:
 *           type: string
 *           description: Nome da pessoa
 *         idade:
 *           type: integer
 *           description: Idade da pessoa
 *         email:
 *           type: string
 *           description: Email da pessoa
 */

import { Request, Response } from 'express';
import { pessoas, Pessoa } from '../db';

/**
 * @swagger
 * /pessoas:
 *   get:
 *     summary: Retorna todas as pessoas
 *     responses:
 *       200:
 *         description: Lista de pessoas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pessoa'
 */
export const listarPessoas = (req: Request, res: Response): void => {
  res.status(200).json(pessoas);
};

/**
 * @swagger
 * /pessoas/{id}:
 *   get:
 *     summary: Retorna uma pessoa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Dados da pessoa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pessoa'
 *       404:
 *         description: Pessoa não encontrada
 */
export const obterPessoaPorId = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id);
  const pessoa: Pessoa | undefined = pessoas.find(p => p.id === id);
  if (!pessoa) {
    res.status(404).json({ error: 'Pessoa não encontrada' });
    return;
  }
  res.status(200).json(pessoa);
};

/**
 * @swagger
 * /pessoas:
 *   post:
 *     summary: Adiciona uma nova pessoa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pessoa'
 *     responses:
 *       201:
 *         description: Pessoa adicionada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pessoa'
 */
export const adicionarPessoa = (req: Request, res: Response): void => {
  const novaPessoa: Pessoa = { id: pessoas.length + 1, ...req.body };
  pessoas.push(novaPessoa);
  res.status(201).json(novaPessoa);
};

/**
 * @swagger
 * /pessoas/{id}:
 *   put:
 *     summary: Atualiza os dados de uma pessoa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pessoa'
 *     responses:
 *       200:
 *         description: Dados da pessoa atualizados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pessoa'
 *       404:
 *         description: Pessoa não encontrada
 */
export const atualizarPessoa = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id);
  const index: number = pessoas.findIndex(p => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Pessoa não encontrada' });
    return;
  }
  const dadosAtualizados: Pessoa = { ...pessoas[index], ...req.body };
  pessoas[index] = dadosAtualizados;
  res.status(200).json(dadosAtualizados);
};

/**
 * @swagger
 * /pessoas/{id}:
 *   delete:
 *     summary: Remove uma pessoa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da pessoa
 *     responses:
 *       200:
 *         description: Pessoa removida com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pessoa'
 *       404:
 *         description: Pessoa não encontrada
 */
export const removerPessoa = (req: Request, res: Response): void => {
  const id: number = parseInt(req.params.id);
  const index: number = pessoas.findIndex(p => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Pessoa não encontrada' });
    return;
  }
  const pessoaRemovida: Pessoa | undefined = pessoas.splice(index, 1)[0];
  res.status(200).json(pessoaRemovida);
};
