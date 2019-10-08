import mongoose from "mongoose";

export async function connect() {
    try {
            await mongoose.connect("mongodb://localhost/soportes", {
            useNewUrlParser: true
        });

        console.log(">>>DB is connect!!!");
    } catch(error) {
        console.log(`>>> BD is not connect :( ${error}`);
    }
}