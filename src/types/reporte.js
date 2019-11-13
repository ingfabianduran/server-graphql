export default `
    type Query {
        dataFormReport: DataFormReport
        reporte(input: DataSoporte): [Reporte]
    }

    type DataFormReport {
        consultas: [String]
    }

    type Reporte {
        elemento: String
        sumatoria: Int
    }

    input DataSoporte {
        fInicial: String!
        fFinal: String!
        typeSoporte: String!
    }
`