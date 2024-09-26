// server.js
require('dotenv').config();  // Importar dotenv para leer el archivo .env
const express = require('express');
const cors = require('cors')
const app = express();

// Middleware para procesar JSON en las solicitudes
app.use(cors())
app.use(express.json());

// Ruta POST
app.get('/', (req, res) => {
    res.json({ message: 'Datos recibidos correctamente', data: 'receivedData' });
});

app.post('/data', (req, res) => {
    const receivedData = req.body;
    console.log('Datos recibidos:', receivedData);
    res.json({ message: 'Datos recibidos correctamente', data: receivedData });
});

// Obtener el puerto desde la variable de entorno
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
