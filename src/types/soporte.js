export default `
    type Query {
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
        consultas: [String]
    }

    type Labor {
        labores: [String]
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