import {Schema, model} from "mongoose";

const Soporte = new Schema({
    servicio: {
        type: String,
        required: true,
    },
    tecnico: {
        type: String,
        required: true
    },
    solicitante: {
        type: String,
        required: true
    },
    perfil: {
        type: String,
        required: true
    },
    bloque: {
        type: String,
        required: true
    },
    salon: {
        type: String,
        required: true
    },
    labor: {
        type: String,
        required: true
    },
    cambio: {
        type: String,
        required: false
    },
    solucionado: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
}, { strict: false });

export default model("Soporte", Soporte);