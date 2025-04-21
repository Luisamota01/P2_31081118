"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
// 🔹 Cargar variables de entorno
dotenv.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DATABASE_URL;
console.log("⚡ Intentando conectar a MongoDB...");
// 🔹 Verificar si `DATABASE_URL` está definido
if (!DB_URL) {
    console.error("❌ ERROR: `DATABASE_URL` no está definida. Revisa las variables de entorno en Render.");
    process.exit(1);
}
// 🔹 Conectar a MongoDB
mongoose_1.default.connect(DB_URL)
    .then(() => console.log("✅ Conexión exitosa a MongoDB"))
    .catch((error) => {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1); // Detener el servidor si no se conecta a la base de datos
});
console.log("⚡ Conexión establecida, iniciando servidor...");
// 🔹 Middleware para manejar JSON
app.use(express_1.default.json());
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
