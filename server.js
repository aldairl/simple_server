// server.js
require('dotenv').config();  // Importar dotenv para leer el archivo .env
const express = require('express');
const cors = require('cors')
const app = express();
// const multer = require('multer');
const fileUpload = require('express-fileupload')

// const upload = multer({ dest: 'uploads/' });

// Middleware para procesar JSON en las solicitudes
app.use(cors())
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())

// Ruta POST
app.get('/', (req, res) => {
    res.json({ message: 'Datos recibidos correctamente', data: 'receivedData' });
});

app.post('/data', (req, res) => {
    const receivedData = req.body;

    const {files} = req;
    console.log('Datos recibidos:', receivedData, "file=", files);

    res.json({ message: 'Datos recibidos correctamente', data: receivedData, files });
});

// Obtener el puerto desde la variable de entorno
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
