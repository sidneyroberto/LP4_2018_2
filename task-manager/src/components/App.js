import React, { Component } from 'react';
import './App.css';
import Tarefa from '../models/Tarefa';

class App extends Component {

  constructor() {
    super();

    this.state = {
      tarefa: new Tarefa(),
      tarefas: []
    };
  }

  render() {
    return (
      <div>
        Oi!
      </div>
    );
  }
}

export default App;
