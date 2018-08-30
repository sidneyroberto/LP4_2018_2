import React, { Component } from 'react';
import axios from 'axios';

class TabelaContatos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contatos: this.props.contatos
        };

        this.enderecoAPI = 'http://localhost:3000/contatos';
    }

    /**
     * Este método é acionado automaticamente quando
     * o componente é montado.
     */
    componentDidMount() {
        axios
            .get(this.enderecoAPI)
            .then((resposta) => this.setState({ contatos: resposta.data }))
            .catch((erro) => console.log(erro));
    }

    componentDidUpdate() {
        console.log('Atualizou');
    }

    render() {
        const listaContatos =
            this.state.contatos && this.state.contatos.length > 0
                ? this.state.contatos.map((contato) => {
                    return (
                        <tr key={contato._id}>
                            <td>{contato.nome}</td>
                            <td>{contato.telefone}</td>
                        </tr>
                    )
                })
                : [];

        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
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
                <div className="col-md-2"></div>
            </div>
        );
    }
}

export default TabelaContatos;