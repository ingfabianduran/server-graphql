import data from "../data/data";
import report from "../report/soporte";

export default {
    Query: {
        dataFormReport: (root, {}) => {            
            return data.dataFormReport();
        },
        reporte: async (root, {input}, {user}) => {
            if (!user) {
                throw new Error("Usuario no autenticado");
            } else {
                if (validate.validateConReport(input) === undefined) {
                    if (input.typeSoporte === "Mantenimiento" || input.typeSoporte === "Soporte") {
                        return await report.soportesAndMantenimientos(input);
                    } else {
                        return await report.otherReporte(input);
                    }
                } else {
                    return [];
                }
            }
        },
    },
    Mutation: {
        
    }
}