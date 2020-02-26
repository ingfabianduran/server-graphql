import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import data from "./dataEmail";

module.exports = {
    // Send email with config data email and content data: 
    sendEmail: async (dataForm, dest) => {
        const dataTransporter = data.getDataEmail(null, null).transporter;
        const dataEmail = data.getDataEmail(dataForm, dest).send;
        // dataEmail.subject = dataForm.dataSoporte.labor;
        const transporter = nodemailer.createTransport(dataTransporter);
        transporter.use('compile', hbs({
            viewEngine: {
                extname: '.handlebars',
                layoutsDir: `${__dirname}`,
                defaultLayout: 'main',
                partialsDir: `${__dirname}/partials`,
                
            },
            viewPath: `${__dirname}`,
        }))
        var resEmail = {};

        try 
        {
            const newEmail = await transporter.sendMail(dataEmail);
            return resEmail = {
                status: true,
                message: "Correo enviado satisfactoriamente"
            }
        } 
        catch (error) 
        {
            return resEmail = {
                status: false,
                message: `Error: ${error}`
            };
        }
    }
}