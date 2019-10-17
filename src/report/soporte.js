import Soporte from "./models/Soporte";

module.exports = {
    soportesAndMantenimientos: async (input) => {
        try {
            const soportes = await Soporte.aggregate([
               {
                    $match: {
                        fecha: {
                            $gte: new Date("2019-07-22T13:35:06.983+00:00"),
                            $lt: new Date("2019-07-23T13:35:06.983+00:00")   
                        },
                        servicio: "Soporte"
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


        } catch (error) {
            
        }
    }
}