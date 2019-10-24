import Joi from "@hapi/joi";
import data from "../data/data";

module.exports = {
    // Data validate inputs:
    validateFormSoporte: (dataForm) => {
        const schema = Joi.object({
            servicio: Joi.string().valid(...data.dataForm().servicios).required(),
            tecnico: Joi.string().valid(...data.dataForm().tecnicos).required(),
            solicitante: Joi.string().min(10).max(60).required(),
            perfil: Joi.string().valid(...data.dataForm().perfiles).required(),
            bloque: Joi.string().valid(...data.dataForm().bloques).required(),
            salon: Joi.string().min(3).required(),
            labor: Joi.string().valid(...data.getLabores(dataForm.servicio).labores).required(),
            solucionado: Joi.string().valid("Si", "No", "No Aplica").required(),
            fecha: Joi.date().required()
        });

        const {error} = schema.validate(dataForm);
        return error;
    },
    // Data validate other incident: 
    validateEmailInci: (dataForm) => {
        const schema = Joi.object({
            type: Joi.string().valid("Audiovisuales", "Mantenimiento", "Desarrollo Fisico", "Redes").required(),
            desc: Joi.string().required()
        });

        const {error} = schema.validate(dataForm);
        return error;
    },
    // Validate form generate report: 
    validateConReport: (dataForm) => {
        const schema = Joi.object({
            fInicial: Joi.date().iso().required(),
            fFinal: Joi.date().iso().greater(Joi.ref("fInicial")).required(),
            typeSoporte: Joi.string().valid(...data.dataForm().consultas).required()
        });

        const {error} = schema.validate(dataForm);
        return error;
    }
}