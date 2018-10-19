import React, { Component } from 'react';
import ContatoService from '../services/ContatoService';
import { DataTable, Column } from 'primereact/datatable';
import { Button } from 'primereact/button';

class Consulta extends Component {

    constructor() {
        super();

        this.state = {
            contatos: []
        };

        this.service = new ContatoService();
    }

    componentDidMount() {
        let contatos = this.service.recuperarTodos();
        this.setState({ contatos });
    }

    render() {
        return (
            <div>
                <div className="p-grid">
                    <div className="p-col">
                        <Button
                            onClick={() => this.props.history.push('cadastro')}
                            label="Novo contato" />
                    </div>
                </div>

                <br />

                <div className="p-grid">
                    <div className="p-md-3"></div>
                    <div className="p-md-6">
                        <DataTable
                            value={this.state.contatos}
                            emptyMessage="Nenhum contato cadastrado"
                            paginator={true}
                            rows={5}>
                            <Column field="nome" header="Nome" sortable={true} />
                            <Column field="telefone" header="Telefone" />
                        </DataTable>
                    </div>
                    <div className="p-md-3"></div>
                </div>
            </div>
        );
    }
}

export default Consulta;