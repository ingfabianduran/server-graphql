require('dotenv').config();

module.exports = {
    getDataEmail: (dataForm) => {
        const dataEmail = {
            transporter: {
                host: process.env.SERVER_MAIL,
                port: process.env.PORT_SMTP,
                secure: true, 
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD_EMAIL
                }
            },
            send: {
                from: process.env.EMAIL,
                to: process.env.IT,
                subject: "Nuevo Caso",
                template: "main",
                context: {
                    data: dataForm
                }
            }
        }

        return dataEmail;
    }
}