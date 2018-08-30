import Contato from '../models/contato';

class ContatoController {

    recuperarTodos(req, res) {
        Contato
            .find()
            .exec()
            .then(
                // Função de sucesso
                (contatos) => res.status(200).json(contatos),
                // Função de erro
                (erro) => {
                    console.log(erro);
                    res.status(500).json('Ocorreu um erro ao tentar recuperar os contatos');
                }
            );
    }

    salvar(req, res) {
        const contato = req.body;

        Contato
            .create(contato)
            .then(
                (contato) => res.status(201).json(contato),
                (erro) => {
                    console.log(erro);
                    res.status(500).json('Ocorreu um erro ao tentar salvar o contato');
                }
            );
    }

    atualizar(req, res) {
        const id = req.params.id;
        const contato = req.body;

        Contato
            .findByIdAndUpdate(id, contato)
            .exec()
            .then(
                (contato) => res.status(200).json(contato),
                (erro) => {
                    console.log(erro);
                    res.status(500).json('Ocorreu um erro ao tentar atualizar o contato');
                }
            );
    }

    remover(req, res) {
        const id = req.params.id;

        Contato
            .findByIdAndRemove(id)
            .exec()
            .then(
                () => res.status(204).end(),
                (erro) => {
                    console.log(erro);
                    res.status(500).json('Ocorreu um erro ao tentar remover o contato');
                }
            );
    }
}

export default ContatoController;
