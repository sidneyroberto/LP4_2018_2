import express from 'express';
import ContatoController from '../controllers/ContatoController';

const router = express.Router();
let contatoCtrl = new ContatoController();

/* GET index page. */
router.get('/', (req, res) => {
  res.json('Oi!');
});

router.get('/contatos', contatoCtrl.recuperarTodos);
router.post('/contatos', contatoCtrl.salvar);
router.put('/contatos/:id', contatoCtrl.atualizar);
router.delete('/contatos/:id', contatoCtrl.remover);

export default router;
