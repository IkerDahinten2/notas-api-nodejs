export function rutaNoEncontrada(req, res){ // Se ejecuta si ninguna ruta conincidio
    res.status(404).json({error: 'Ruta no encontrada'}); // Respuesta clara para elcliente
}
export function manejarError(error, req, res, next){ // recibe errores enviados con next(error)
    console.error(error); // registra el detalle para el desarrollo
    res.status(500).json({error: 'No fue posube completar la peticion'})// No expone datos
}