import data from "./data/data";
import moment from "moment-timezone";
import Soporte from "./models/Soporte";
import validate from "./validations/soporte";
import email from "./email/email";

export const resolvers = {
    Query: {
        hello: (root, {name}) => {
            return `Hola mundo ${name}`;
        },
        soportes: async () => {
            return await Soporte.find();
        },
        dataForm: () => {
            return data.dataForm();
        },
        labores: (root, {typeSuport}) => {
            return data.getLabores(typeSuport);
        }
    },
    Mutation: {
        createSoporte: async (_, {input}) => {
            input.fecha = moment().tz("America/Bogota").format("YYYY/MM/DD");
            
            if (input.solucionado === "" || input.solucionado === null || input.solucionado === undefined) input.solucionado = "No Aplica";

            if (validate.validateFormSoporte(input) === undefined) {
                const resEmail = await email.sendEmail();
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
        }
    }
}; 