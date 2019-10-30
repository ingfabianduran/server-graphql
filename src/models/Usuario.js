import {Schema, model} from "mongoose";

const Usuario = new Schema({
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model("Usuario", Usuario);