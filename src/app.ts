import dotenv from 'dotenv';
import fs from 'fs';

// ⚠️ Verificar si `.env` realmente existe antes de cargarlo
if (fs.existsSync('.env')) {
  console.log("✅ Archivo .env detectado, cargando variables...");
  dotenv.config();
} else {
  console.error("❌ Error: No se encontró el archivo .env en el proyecto.");
  process.exit(1);
}

// Mostrar las variables de entorno para diagnóstico
console.log("🔍 Variables de entorno detectadas:");
console.log("PORT:", process.env.PORT);
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);