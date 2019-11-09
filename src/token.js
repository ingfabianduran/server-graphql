import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Usuario from "./models/Usuario";

dotenv.config();

const token = {
    checkHeaders: async(req, res, next) => {
        const token = req.headers["x-token"];
        if (token) {
            try {
                const {id} = jwt.verify(token, process.env.SECRET);
                req.user = id;
            } catch (e) {
                var idUser = null;

                try {
                    const {id} = await jwt.decode(token);
                    idUser = id;
                } catch (e) {
                    return {};
                }

                const usuario = await Usuario.findOne({_id: idUser});
               
                const newToken = jwt.sign({
                    id: usuario.id
                }, process.env.SECRET, {
                    expiresIn: "1d"
                });

                req.user = usuario.id;
                
                if (newToken) {
                    res.set('Access-Control-Expose-Headers', "x-token");
                    res.set("x-token", newToken);
                }
            }
        }

        next();
    }
}

export default token;