import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
import Tarefa from '../models/Tarefa';
import TarefaService from '../services/TarefaService';

class App extends Component {

  constructor() {
    super();

    this.state = {
      tarefa: new Tarefa(),
      tarefas: []
    };

    this.service = new TarefaService();
    this.aoAlterarValorDoCampo = this.aoAlterarValorDoCampo.bind(this);
    this.salvar = this.salvar.bind(this);
  }

  componentDidMount() {
    this.service
      .recuperarTodos((tarefas) => this.setState({ tarefas: tarefas }));
  }

  salvar(evento) {
    evento.preventDefault();
    let tarefa = this.state.tarefa;
    //tarefa.prazo = tarefa.prazo.getTime();
    this.service
      .salvar(
        tarefa,
        (tarefa) => console.log(tarefa),
        (erro) => console.log(erro)
      );
  }

  aoAlterarValorDoCampo(evento) {
    const nomeCampo = evento.target.name;
    const valor = evento.target.value;
    let tarefa = { ...this.state.tarefa };
    tarefa[nomeCampo] = valor;
    this.setState({ tarefa: tarefa });
  }

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col">
            <h3>Nova tarefa</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <form onSubmit={this.salvar}>
              <div className="form-group">
                <label>Descrição</label>
                <input
                  type="text"
                  name="descricao"
                  className="form-control"
                  value={this.state.tarefa.descricao}
                  onChange={this.aoAlterarValorDoCampo}
                  required />
              </div>

              <div className="form-group">
                <label>Severidade</label>
                <select
                  name="severidade"
                  className="form-control"
                  value={this.state.tarefa.severidade}
                  onChange={this.aoAlterarValorDoCampo}
                  required>
                  <option value="baixa">Baixa</option>
                  <option value="media">Média</option>
                  <option value="alta">Alta</option>
                </select>
              </div>

              <div className="form-group">
                <label>Prazo</label>
                <input
                  name="prazo"
                  type="date"
                  className="form-control"
                  value={this.state.tarefa.prazo}
                  onChange={this.aoAlterarValorDoCampo}
                  required />
              </div>

              <input
                type="submit"
                className="btn btn-primary"
                value="Salvar" />

            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
