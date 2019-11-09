import {makeExecutableSchema} from "graphql-tools";
import {resolvers} from "./resolvers";

// Define Query, Mutation, model input and res model: 
const typeDefs = `
    type Query {
        dataForm: DataForm
        dataFormReport: DataFormReport
        labores(typeSuport: String!): Labor
        reporte(input: DataSoporte): [Reporte]
        login(input: DataLogin): AuthData
    }

    type Mutation {
        createSoporte(input: SoporteInput): Status
        sendEmailAdd(input: Incidente): Status
    }

    type AuthData {
        status: Boolean!
        message: String!
        resLogin: String!
        userId: ID
        token: String
        tokenExpiration: Int
    }

    type DataForm {
        servicios: [String]
        tecnicos: [String]
        perfiles: [String]
        bloques: [String]
        soluciones: [String]
        consultas: [String]
    }

    type DataFormReport {
        consultas: [String]
    }

    type Labor {
        labores: [String]
    }

    type Status {
        state: Boolean
        message: String
    }

    type Reporte {
        elemento: String
        sumatoria: Int
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

    input DataSoporte {
        fInicial: String!
        fFinal: String!
        typeSoporte: String!
    }

    input DataLogin {
        usuario: String!
        password: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});