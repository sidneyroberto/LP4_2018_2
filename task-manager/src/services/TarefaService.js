import firebase from '../utils/firebaseUtils';

class TarefaService {

    salvar(tarefa) {
        firebase
            .ref('tarefas')
            .push(tarefa)
            .then((tarefa) => console.log(tarefa))
            .catch((erro) => console.log(erro));
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