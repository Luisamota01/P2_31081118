"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
// ⚠️ Verificar si `.env` realmente existe antes de cargarlo
if (fs_1.default.existsSync('.env')) {
    console.log("✅ Archivo .env detectado, cargando variables...");
    dotenv_1.default.config();
}
else {
    console.error("❌ Error: No se encontró el archivo .env en el proyecto.");
    process.exit(1);
}
// Mostrar las variables de entorno para diagnóstico
console.log("🔍 Variables de entorno detectadas:");
console.log("PORT:", process.env.PORT);
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS);
