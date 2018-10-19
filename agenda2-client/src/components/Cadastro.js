import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';

class Cadastro extends Component {

    constructor() {
        super();

        this.state = {
            nome: '',
            telefone: ''
        };

        this.salvar = this.salvar.bind(this);
        this.aoAlterarValorDoCampo = this.aoAlterarValorDoCampo.bind(this);
    }

    aoAlterarValorDoCampo(evento) {
        const nomeCampo = evento.target.name;
        const valor = evento.target.value;
        this.setState({ [nomeCampo]: valor });
    }

    salvar(evento) {
        evento.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.salvar}>
                <br />
                <div className="p-grid">
                    <div className="p-col">
                        <span className="p-float-label">
                            <InputText
                                value={this.state.nome}
                                onChange={this.aoAlterarValorDoCampo}
                                name="nome"
                                type="text"
                                size="30" />
                            <label htmlFor="nome">Nome</label>
                        </span>
                    </div>
                </div>

                <br />

                <div className="p-grid">
                    <div className="p-col">
                        <span className="p-float-label">
                            <InputMask
                                mask="(99) 99999-9999"
                                value={this.state.telefone}
                                onChange={this.aoAlterarValorDoCampo}
                                name="telefone"
                                type="text"
                                size="30" />
                            <label htmlFor="telefone">Telefone</label>
                        </span>
                    </div>
                </div>

                <br />
                <button type="submit" className="botaoSubmit">Salvar</button>
            </form>
        );
    }
}

export default Cadastro;