import db from '../utils/firebaseUtils';

class ContatoController {

    recuperarTodos(req, res) {
        db
            .collection('contatos')
            .get()
            .then((snapshot) => {
                let tarefas = [];
                snapshot.forEach((doc) => {
                    let tarefa = doc.data();
                    tarefa.id = doc.id;
                    tarefas.push(tarefa);
                });
                res.json(tarefas);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).json('Erro ao tentar recuperar as tarefas');
            });
    }

    salvar(req, res) {
        const tarefa = req.body;

        db
            .collection('contatos')
            .add(tarefa)
            .then((doc) => {
                let tarefa = doc.data();
                tarefa.id = doc.id;
                res.json(tarefa);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).json('Erro ao tentar salvar a tarefa');
            });
    }

    atualizar(req, res) {
        const id = req.params.id;
        const tarefa = req.body;

        db
            .collection('contatos')
            .doc(id)
            .update(tarefa)
            .then((doc) => {
                let tarefa = doc.data();
                tarefa.id = id;
                res.json(tarefa);
            })
            .catch((erro) => {
                console.log(erro);
                res.status(500).json('Erro ao tentar atualizar a tarefa');
            });
    }

    remover(req, res) {
        const id = req.params.id;

        db
            .collection('contatos')
            .doc(id)
            .delete()
            .then(() => res.status(204).end())
            .catch((erro) => {
                console.log(erro);
                res.status(500).json('Erro ao tentar remover a tarefa');
            });
    }
}

export default ContatoController;