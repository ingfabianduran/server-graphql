import Usuario from "../models/Usuario";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default {
    Query: {
        login: async (root, {input}) => {
            const usuario = await Usuario.findOne({"usuario": input.usuario});
            
            if (!usuario) {
                return {
                    status: false,
                    message: "Usuario No Encontrado",
                    resLogin: "error",
                    userId: null,
                    token: null,
                    tokenExpiration: null
                }
            }

            const isValid = await bcrypt.compare(input.password, usuario.password);

            if (!isValid) {
                return {
                    status: false,
                    message: "Contraseña Incorrecta",
                    resLogin: "error",
                    userId: null,
                    token: null,
                    tokenExpiration: null
                }
            }
            
            const token = jsonwebtoken.sign({
                id: usuario.id
            }, process.env.SECRET, {
                expiresIn: "1d"
            });

            return {
                status: true,
                message: "Bienvenido al Sistema",
                resLogin: "success",
                userId: usuario.id,
                token: token,
                tokenExpiration: 1
            }
        }
    },
    Mutation: {
        
    }
}