import express from 'express';
import ContatoController from '../controllers/ContatoController';

const router = express.Router();
const contatroCtrl = new ContatoController();

/* GET index page. */
router.get('/', (req, res) => {
  res.json('Olá!');
});

// Serviço para recuperar contatos por filtro
router.get('/contatos/:filtro', contatroCtrl.recuperarPorFiltro);

// Serviço para salvar um novo contato
router.post('/contatos', contatroCtrl.salvar);

// Serviço para atualizar um contato já existente
router.put('/contatos/:id', contatroCtrl.atualizar);

// Serviço para remover um contato
router.delete('/contatos/:id', contatroCtrl.remover);

export default router;
