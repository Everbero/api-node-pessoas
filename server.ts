// server.ts
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';
import * as pessoasController from './controllers/pessoasController';

const app: Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());

// Rotas para pessoas
app.get('/pessoas', pessoasController.listarPessoas);
app.get('/pessoas/:id', pessoasController.obterPessoaPorId);
app.post('/pessoas', pessoasController.adicionarPessoa);
app.put('/pessoas/:id', pessoasController.atualizarPessoa);
app.delete('/pessoas/:id', pessoasController.removerPessoa);

// Rota para a documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
