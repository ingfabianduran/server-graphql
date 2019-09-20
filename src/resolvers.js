import {soportes} from "./data";
import moment from "moment-timezone";
import Soporte from "./models/Soporte";

export const resolvers = {
    Query: {
        hello: (root, {name}) => {
            return `Hola mundo ${name}`;
        },
        soportes: async () => {
            return await Soporte.find();
        }
    },
    Mutation: {
        createSoporte: async (_, {input}) => {
            input.fecha = moment().tz("America/Bogota").format("YYYY/MM/DD");
            const soporte = new Soporte(input);
            await soporte.save();
            return soporte;
        }
    }
}; 