import {makeExecutableSchema} from "graphql-tools";
import {resolvers} from "./resolvers";

// Define Query, Mutation, model input and res model: 
const typeDefs = `
    type Query {
        hello(name: String!): String
        soportes: [Soporte]
        dataForm: DataForm
        labores(typeSuport: String!): Labor
    }

    type Mutation {
        createSoporte(input: SoporteInput): Status
        sendEmailAdd(input: Incidente): Status
    }

    type DataForm {
        servicios: [String]
        tecnicos: [String]
        perfiles: [String]
        bloques: [String]
        soluciones: [String]
    }

    type Labor {
        labores: [String]
    }
    
    type Soporte {
        _id: ID
        servicio: String
        tecnico: String
        solicitante: String
        perfil: String
        bloque: String
        salon: String
        labor: String
        solucionado: String
        fecha: String
    }

    type Status {
        state: Boolean
        message: String
    }

    input SoporteInput {
        servicio: String!
        tecnico: String!
        solicitante: String!
        perfil: String!
        bloque: String!
        salon: String!
        labor: String!
        solucionado: String
    }

    input Incidente {
        type: String!
        desc: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});