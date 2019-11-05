import data from "./data/data";
import moment from "moment-timezone";
import Soporte from "./models/Soporte";
import Usuario from "./models/Usuario";
import validate from "./validations/soporte";
import email from "./email/email";
import destEmail from "./email/dataEmail";
import report from "./report/soporte";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const resolvers = {
    Query: {
        dataForm: (root, {}, {user}) => {            
            return data.dataForm();
        },
        labores: (root, {typeSuport}) => {
            return data.getLabores(typeSuport);
        },
        reporte: async (root, {input}, {user}) => {
            if (!user) {
                throw new Error("Usuario no autenticado");
            } else {
                if (validate.validateConReport(input) === undefined) {
                    if (input.typeSoporte === "Mantenimiento" || input.typeSoporte === "Soporte") {
                        return await report.soportesAndMantenimientos(input);
                    } else {
                        return await report.otherReporte(input);
                    }
                } else {
                    return [];
                }
            }
        },
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
        // Send email for mesa de ayuda: 
        createSoporte: async (_, {input}, {user}) => {
            
            input.fecha = moment().tz("America/Bogota").format("YYYY/MM/DD");
                
            if (input.solucionado === "" || input.solucionado === null || input.solucionado === undefined) input.solucionado = "No Aplica";

            if (validate.validateFormSoporte(input) === undefined) {
                
                const dataEmail = {
                    dataIncidente: null,
                    dataSoporte: input
                }

                const resEmail = await email.sendEmail(dataEmail, destEmail.getDestEmail(dataEmail.dataSoporte.servicio));
                var res = {};
                
                if (resEmail.status) {
                    try {
                        const soporte = new Soporte(input);
                        await soporte.save();
                    
                        return res = {
                            state: true,
                            message: "Soporte Registrado correctamente"
                        };
                        
                    } catch (error) {
                        return res = {
                            state: false,
                            message: `Error: ${error}`
                        };
                    }
                }
                else {
                    return res = {
                        state: false,
                        message: resEmail.message
                    };
                }
            } else {
                return res = {
                    state: false,
                    message: "Algo raro paso aquí"
                };
            }
        }, 
        
        // Send email for audiovisules, redes or desarrollo fisico: 
        sendEmailAdd: async(_, {input}) => {
            if (validate.validateEmailInci(input) === undefined) {
                var res = {};
                var dest = null;

                const dataEmail = {
                    dataIncidente: input,
                    dataSoporte: null
                }

                const resEmail = await email.sendEmail(dataEmail, destEmail.getDestEmail(dataEmail.dataIncidente.type));   
                
                if (resEmail.status){
                    return res = {
                        state: true,
                        message: "Correo enviado correctamente"
                    }
                } else {
                    return res = {
                        state: false,
                        message: resEmail.message
                    }
                }
            } else {
                return res = {
                    state: false,
                    message: "Algo raro paso aquí"
                }
            }
        },
    }
};   