import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Cadastro from './Cadastro';
import Consulta from './Consulta';

class App extends Component {
  render() {
    return (
      <div>
        <div className="p-grid">
          <div id="banner" className="p-col">
            <h1>Agenda</h1>
          </div>
        </div>

        <div id="conteudo" className="p-grid">
          <BrowserRouter>
            <Switch>
              <Route name="cadastro" path="/cadastro" component={Cadastro} />
              <Route name="consulta" path="/consulta" component={Consulta} />
              <Redirect from="/*" to="consulta" />
            </Switch>
          </BrowserRouter>
        </div>

        <div className="p-grid">
          <div id="rodape" className="p-col">
            &copy;Sidney Sousa
          </div>
        </div>
      </div>
    );
  }
}

export default App;
