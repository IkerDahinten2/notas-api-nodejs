import app from './app.js' // importa la aplicacion preparada
const PORT = 3000 // define el puerto local
app.listen(PORT, () =>{ //  empieza a recibir peticiones
    console.log(`API lista en http://localhost:${PORT}`) // muestra la direcion
}) // cierre del arranque