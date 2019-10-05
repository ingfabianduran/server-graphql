import data from "./data";
import moment from "moment-timezone";
import Soporte from "./models/Soporte";
import validate from "./validations/soporte";

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
            try {
                input.fecha = moment().tz("America/Bogota").format("YYYY/MM/DD");
                var res = {};

                if (validate.validateFormSoporte(input) === undefined) {
                    const soporte = new Soporte(input);
                    await soporte.save();
                
                    return res = {
                        state: true,
                        message: "Soporte Registrado correctamente"
                    };
                }
                else {
                    return res = {
                        state: false,
                        message: "Algo raro paso aquí"
                    };
                }
            } catch (error) {
                return res = {
                    state: false,
                    message: `Error: ${error}`
                };
            }
        }
    }
}; 