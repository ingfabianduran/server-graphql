import Soporte from "../models/Soporte";

module.exports = {
    // Query when input == Soporte or Mantenimiento: 
    soportesAndMantenimientos: async (input) => {
        try {
            const soportes = await Soporte.aggregate([
               {
                    $match: {
                        fecha: {
                            $gte: new Date(input.fInicial),
                            $lt: new Date(input.fFinal)   
                        },
                        servicio: input.typeSoporte
                    }
                },
                {
                    $group: {
                        _id: "$" + "labor",
                        suma: {
                            $sum: 1
                        }
                    } 
                },
                {
                    $project: {
                        "_id": 0,
                        "elemento": "$_id",
                        "sumatoria": "$suma"
                    }
                }
            ]);
            return soportes;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    },
    // Query when input != Soporte or Mantenimiento: 
    otherReporte: async (input) => {
        try {
            const soportes = await Soporte.aggregate([{
                    $match: {
                        fecha: {
                            $gte: new Date(input.fInicial), 
                            $lt: new Date(input.fFinal)
                        },
                    }
                },
                {
                    $group: {
                        _id: "$" + input.typeSoporte.toLowerCase(),
                        suma: {
                            $sum: 1
                        }
                    }
                },
                { 
                    $project: {
                        "_id": 0,
                        "elemento": "$_id",
                        "sumatoria": "$suma"
                    }
                }
            ]);

            return soportes;
        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }
}