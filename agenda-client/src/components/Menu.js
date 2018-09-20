import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom';

import CadastroContato from './CadastroContato';
import Consulta from './Consulta';

class Menu extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <Link to="/consulta">
                            <span className="navbar-brand">Agenda</span>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/cadastro">
                                        <span className="nav-link">Novo contato</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/consulta">
                                        <span className="nav-link">Contatos</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <br />

                    <div className="container">
                        <Switch>
                            <Route name="cadastro" path="/cadastro" component={CadastroContato} />
                            <Route name="consulta" path="/consulta" component={Consulta} />
                            <Redirect from="/*" to="consulta" />
                        </Switch>
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

export default Menu;