import express from 'express'; // Trae la funcion principal de Express

const app = express(); // Crea nuestra aplicacion web;

app.use(express.json()); // convierte el JSPN recibido en req.body

app.get('/health', (req, res) =>{ // atiende GET /health
    res.status(200).json({estado: 'ok'}); // Devuelve estado HTTP 200 y un objeto JSON
}); // cierra la funcion de la ruta

export default app; // Permite usar app desde server.js