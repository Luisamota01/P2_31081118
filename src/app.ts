import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

// Verificar si .env realmente existe antes de cargarlo
if (!process.env) {
    console.error('Error: No se encontró el archivo .env en el proyecto.');
    process.exit(1);
}

// Mostrar las variables de entorno para diagnóstico
console.log('TOPARSE:', process.env.TOPARSE);
console.log('URL:', process.env.URL);
console.log('DATABASE:', process.env.DATABASE);
console.log('USER:', process.env.USER);
console.log('PASS:', process.env.PASS);

// Configuración del servidor y puerto
const app = express();
const PORT = process.env.PORT || 4000;

// Ruta de prueba para verificar el servidor
app.get('/', (req, res) => {
    res.send('¡Servidor corriendo correctamente en Render!');
});

// Configuración del puerto con '0.0.0.0' para Render
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});