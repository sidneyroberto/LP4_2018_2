import firebase from '../utils/firebaseUtils';

class TarefaService {

    salvar(tarefa, funcaoSucesso, funcaoErro) {
        firebase
            .ref('tarefas')
            .push(tarefa)
            .then((resposta) => funcaoSucesso(resposta))
            .catch((erro) => funcaoErro(erro));
    }

    recuperarTodos(callback) {
        firebase
            .ref('tarefas')
            .on('value', (snapshot) => {
                let tarefas = [];
                snapshot.forEach(item => {
                    let tarefa = item.val();
                    tarefa.id = item.key;
                    tarefas.push(tarefa);
                });
                callback(tarefas);
            });
    }
}

export default TarefaService;