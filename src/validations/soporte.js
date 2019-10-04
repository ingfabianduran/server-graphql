import Joi from "@hapi/joi";

module.exports = {
    validateFormSoporte: (dataForm) => {

        

        const schema = Joi.object({
            servicio: Joi.string().valid("Soporte", "Mantenimiento", "Audiovisuales", "Desarrollo Fisico", "Redes").required(),
            tecnico: Joi.string().valid("John Jairo Agudelo", "Julian Camilo Lopez", "Orlando Garcia Zapata", "Fabian Esteban Duran", "Ivan Arturo Ortiz", "David Stiven Martinez", "Sebastian Torres").required(),
            solicitante: Joi.string().min(25).max(60).required(),
            perfil: Joi.string().valid("Administrativo", "Docente", "Estudiante").required(),
            bloque: Joi.string().valid("Bloque A", "Bloque B", "Bloque C", "Bloque E", "Bloque F", "Bloque G", "Bloque I", "Bloque J", "Bloque K", "Bloque L", "Bloque M", "Bloque N", "Bloque O", "Edificio HUB", "Centro de Lenguas", "Casa Fotografia").required(),
            salon: Joi.string().min(3).required(),
            labor: Joi.string().valid(labores).required(),
            solucionado: Joi.string().valid("Si", "No").required(),
            fecha: Joi.date().required()
        });

        const {error} = schema.validate(dataForm);
        return error;
    }
}