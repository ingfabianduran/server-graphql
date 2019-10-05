import Joi from "@hapi/joi";
import data from "../data";

module.exports = {
    validateFormSoporte: (dataForm) => {

        const schema = Joi.object({
            servicio: Joi.string().valid(...data.dataForm().servicios).required(),
            tecnico: Joi.string().valid(...data.dataForm().tecnicos).required(),
            solicitante: Joi.string().min(10).max(60).required(),
            perfil: Joi.string().valid(...data.dataForm().perfiles).required(),
            bloque: Joi.string().valid(...data.dataForm().bloques).required(),
            salon: Joi.string().min(3).required(),
            labor: Joi.string().valid(...data.getLabores(dataForm.servicio).labores).required(),
            solucionado: Joi.string().valid(...data.dataForm().soluciones).required(),
            fecha: Joi.date().required()
        });

        const {error} = schema.validate(dataForm);
        return error;
    }
}