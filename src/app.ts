import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

// 🔹 Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DATABASE_URL;

console.log("⚡ Intentando conectar a MongoDB...");

// 🔹 Verificar si `DATABASE_URL` está definido
if (!DB_URL) {
    console.error("❌ ERROR: `DATABASE_URL` no está definida. Revisa las variables de entorno en Render.");
    process.exit(1);
}

// 🔹 Conectar a MongoDB
mongoose.connect(DB_URL)
    .then(() => console.log("✅ Conexión exitosa a MongoDB"))
    .catch((error) => {
        console.error("❌ Error al conectar a MongoDB:", error);
        process.exit(1); // Detener el servidor si no se conecta a la base de datos
    });

console.log("⚡ Conexión establecida, iniciando servidor...");

// 🔹 Middleware para manejar JSON
app.use(express.json());

// 🔹 Ruta de prueba para verificar que el servidor responde correctamente
app.get('/', (req, res) => {
    res.send('🚀 ¡Servidor corriendo correctamente en Render!');
});

// 🔹 Confirmación de inicio del servidor
console.log("⚡ Antes de iniciar el servidor...");
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
console.log("⚡ Después del app.listen...");
