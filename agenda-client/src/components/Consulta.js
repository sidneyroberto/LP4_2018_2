import React, { Component } from 'react';

class Consulta extends Component {

    constructor() {
        super();

        this.state = {
            contatos: [],
            erro: false,
            filtro: ''
        };

        this.consultar = this.consultar.bind(this);
    }

    consultar(evento) {
        let valor = evento.target.value;
        /**
         * Agora iremos consultar o nosso serviço
         * no Firebase!
         */
    }

    render() {

        const listaContatos = this.state.contatos.length > 0 ?
            this.state.contatos.map((contato) => {
                return (
                    <tr key={contato._id}>
                        <td>{contato.nome}</td>
                        <td>{contato.telefone}</td>
                    </tr>
                )
            })
            : [];

        return (
            <div>
                <div className="row">
                    <div className="col text-center">
                        <h3>Pesquisar contatos</h3>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            placeholder="Digite o nome do contato"
                            onChange={this.consultar}
                            className="form-control"
                            name="filtro"
                            value={this.state.filtro}>
                        </input>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <br />

                {
                    listaContatos.length > 0 && this.state.filtro &&

                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <table className="table table-hover table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Telefone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listaContatos}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                }
            </div>
        );
    }
}

export default Consulta;