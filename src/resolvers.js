import data from "./data";
import moment from "moment-timezone";
import Soporte from "./models/Soporte";

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
                const soporte = new Soporte(input);
                await soporte.save();
                
                const res = {
                    state: true,
                    message: "Soporte Registrado correctamente"
                };

                return res;
            } catch (error) {
                const res = {
                    state: false,
                    message: `Error: ${error}`
                };

                return res;
            }
        }
    }
}; 