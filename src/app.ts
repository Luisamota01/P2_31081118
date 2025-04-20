import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

// 🔹 Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DATABASE_URL;

// 🔹 Conectar a MongoDB
mongoose.connect(DB_URL)
    .then(() => console.log("✅ Conexión exitosa a MongoDB"))
    .catch((error) => console.error("❌ Error al conectar a MongoDB:", error));

// 🔹 Middleware para manejar JSON
app.use(express.json());

// 🔹 Ruta de prueba para verificar que el servidor responde correctamente
app.get('/', (req, res) => {
    res.send('🚀 ¡Servidor corriendo correctamente en Render!');
});

// 🔹 Confirmación antes de iniciar el servidor
console.log("Iniciando servidor..."); 

// 🔹 Inicio del servidor en Render con `0.0.0.0`
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});