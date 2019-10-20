import mongoose from "mongoose";
require('dotenv').config();

export async function connect() {
    try {
            await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true
        });

        console.log(">>>DB is connect!!!");
    } catch(error) {
        console.log(`>>> BD is not connect :( ${error}`);
    }
}