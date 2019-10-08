import nodemailer from "nodemailer";
import data from "./dataEmail";

module.exports = {
    sendEmail: async () => {
        
        const dataTransporter = data.getDataEmail().transporter;
        const dataEmail = data.getDataEmail().send;
        const transporter = nodemailer.createTransport(dataTransporter);
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