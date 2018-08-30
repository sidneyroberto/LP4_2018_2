import mongoose from 'mongoose';

const contato = new mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
});

const Contato = mongoose.model('Contato', contato);
export default Contato;