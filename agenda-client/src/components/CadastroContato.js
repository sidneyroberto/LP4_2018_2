import React, { Component } from 'react';
import $ from 'jquery';

class CadastroContato extends Component {

    constructor() {
        super();
        this.state = {
            nome: '',
            telefone: '',
            erro: false,
            sucesso: false
        };

        this.aoAlterarValorDoCampo = this.aoAlterarValorDoCampo.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    componentDidMount() {
        $('#telefone').mask('(00) 00000-0000', {
            placeholder: '(__) _____-____'
        });
    }

    aoAlterarValorDoCampo(evento) {
        let valor = evento.target.value;
        let nomeCampo = evento.target.name;
        this.setState({ [nomeCampo]: valor });
    }

    salvar(evento) {
        evento.preventDefault();
        /**
         * Agora deve consumir o serviço do Firebase!
         */
    }

    render() {
        return (
            <div>

                {
                    (this.state.sucesso || this.state.erro) &&
                    <div className="row">
                        <div className="col">
                            {
                                this.state.sucesso &&
                                <span className="alert alert-success">Contato salvo</span>
                            }
                            {
                                this.state.erro &&
                                <span className="alert alert-danger">Erro ao tentar salvar o contato</span>
                            }
                        </div>
                    </div>
                }

                <br />

                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.salvar}>
                            <div className="form-group">
                                <label>Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.nome}
                                    onChange={this.aoAlterarValorDoCampo}
                                    name="nome"
                                    required />
                            </div>
                            <div className="form-group">
                                <label>Telefone</label>
                                <input
                                    id="telefone"
                                    type="text"
                                    className="form-control"
                                    value={this.state.telefone}
                                    onChange={this.aoAlterarValorDoCampo}
                                    name="telefone"
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

export default CadastroContato;