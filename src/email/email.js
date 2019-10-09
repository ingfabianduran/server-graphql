import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import data from "./dataEmail";

module.exports = {
    sendEmail: async () => {
        
        const dataTransporter = data.getDataEmail().transporter;
        const dataEmail = data.getDataEmail().send;
        const transporter = nodemailer.createTransport(dataTransporter);
        transporter.use('compile', hbs({
            viewEngine: {
                extname: '.handlebars',
                layoutsDir: `${__dirname}/views`,
                defaultLayout: 'main',
                partialsDir: `${__dirname}/views/partials`,
                
            },
            viewPath: `${__dirname}/views/`,
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