import {soportes} from "./data";
import moment from "moment-timezone";

export const resolvers = {
    Query: {
        hello: (root, {name}) => {
            return `Hola mundo ${name}`;
        },
        soportes: () => {
            return soportes;
        }
    },
    Mutation: {
        createSoporte: (_, {input}) => {
            input._id = Math.random().toString(36).replace("0.", "");
            input.fecha = moment().tz("America/Bogota").format("YYYY/MM/DD");
        }
    }
}; 