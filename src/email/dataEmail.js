require('dotenv').config();

module.exports = {
    // Get data config and data template: 
    getDataEmail: (dataForm, dest) => {
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
                to: dest,
                subject: "Nuevo Caso",
                template: "main",
                context: {
                    data: dataForm
                }
            }
        }

        return dataEmail;
    },
    // Get email dest depend type: 
    getDestEmail: (type) => {
        var dest = null

        switch (type) {
            case "Soporte": case "Mantenimiento": case "Redes":  
                dest = process.env.IT;
                break;
            case "Audiovisuales": 
                dest = process.env.AUDIOVISUALES;
                break;
            case "Desarrollo Fisico": 
                dest = process.env.ASISTENTE;
                break;
        }

        return dest;
    }
}