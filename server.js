const express = require('express');
const http = require('http');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos de Nexus WebOS
app.use(express.static(__dirname));

const server = http.createServer(app);

// Obtener la IP local de la máquina
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('===================================================');
  console.log('🚀 Nexus WebOS Server corriendo exitosamente');
  console.log(`💻 Local:    http://localhost:${PORT}`);
  console.log(`🌐 Red Local: http://${localIP}:${PORT}`);
  console.log('===================================================');
});
