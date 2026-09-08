import express from 'express'; // Trae la funcion principal de Express
import {notaRouter} from './routes/nota.routes.js'
import {manejarError, rutaNoEncontrada} from './middlewares/error.middleware.js'
const app = express(); // Crea nuestra aplicacion web;
app.use(express.json()); // convierte el JSPN recibido en req.body
app.get('/health', (req, res) =>{ // atiende GET /health
    res.status(200).json({estado: 'ok'}); // Devuelve estado HTTP 200 y un objeto JSON
}); // cierra la funcion de la ruta
app.use('./api/v1/notas', notaRouter);
app.use(rutaNoEncontrada);
app.use(manejarError);
export default app; // Permite usar app desde server.js