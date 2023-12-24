import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
            .then(() => {
                console.log("No errors");
            }).catch((err) => {
                console.log(err);
            });
    } catch (err) {
        console.log(err);
    }
}

mongoose.connection.on('connected', () => {
    console.log("DB is connected");
    console.log(`DataBase name: ${mongoose.connection.name}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Error generated: ${err}`);
});

export default mongoose;