import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DATABASE_URL;

console.log("⚡ Intentando conectar a MongoDB...");
mongoose.connect(DB_URL)
    .then(() => console.log("✅ Conexión exitosa a MongoDB"))
    .catch((error) => console.error("❌ Error al conectar a MongoDB:", error));