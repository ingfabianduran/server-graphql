import data from "../data/data";
import moment from "moment-timezone";
import Soporte from "../models/Soporte";
import validate from "../validations/soporte";
import email from "../email/email";
import destEmail from "../email/dataEmail";

export default {
    Query: {
        // Get data by form Soporte: 
        dataForm: (root, {}) => {         
            return data.dataForm();
        },
        labores: (root, {typeSuport}) => {
            return data.getLabores(typeSuport);
        },
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
}