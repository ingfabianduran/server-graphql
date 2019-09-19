import {makeExecutableSchema} from "graphql-tools";
import {resolvers} from "./resolvers";

// hello(name: String!): String: Peticion el cual pide un name obligatorio y retorna un String. 
// soportes: [Soporte]: Return array object Soporte. 

const typeDefs = `
    type Query {
        hello(name: String!): String
        soportes: [Soporte]
    }

    type Mutation {
        createSoporte(input: SoporteInput): Soporte
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

    input SoporteInput {
        servicio: String!
        tecnico: String!
        solicitante: String!
        perfil: String!
        bloque: String!
        salon: String!
        labor: String!
        solucionado: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});