Write-Host "🚀 Iniciando configuración del proyecto..."

# Verificar si npm está instalado
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Error: npm no está instalado. Por favor, instala Node.js antes de continuar."
    exit
}

Write-Host "✅ npm encontrado. Instalando dependencias..."
npm install

Write-Host "✅ Dependencias instaladas. Ejecutando la aplicación..."
npm start

Write-Host "🎉 ¡Aplicación iniciada correctamente!"