// server.js
require('dotenv').config();  // Importar dotenv para leer el archivo .env
const express = require('express');
const cors = require('cors')
const app = express();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

// Middleware para procesar JSON en las solicitudes
app.use(cors())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

// Ruta POST
app.get('/', upload.single('audio'), (req, res) => {
    res.json({ message: 'Datos recibidos correctamente', data: 'receivedData' });
});

app.post('/data', upload.single('audio'), (req, res) => {
    const receivedData = req.body;

    const {file} = req;
    console.log('Datos recibidos:', receivedData, "file=", file);
    res.json({ message: 'Datos recibidos correctamente', data: receivedData });
});

// Obtener el puerto desde la variable de entorno
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
