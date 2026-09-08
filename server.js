import app from './app.js' // importa la aplicacion preparada
import mongoose from 'mongoose'
const PORT = 3000 // define el puerto local
const MONGODB_URI = 'mongodb://127.0.0.1:27017/api_notas_clase'
try{
    app.listen(PORT, () =>{ //  empieza a recibir peticiones
        console.log(`API lista en http://localhost:${PORT}`) // muestra la direcion
    }) // cierre del arranque
}catch(error){
    console.error('No fue posible conectar con mongoDB', error-message);
    process.exit(1);
}