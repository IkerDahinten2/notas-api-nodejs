import { CrearNotaDTO } from '../dtos/crear-nota.js' // DTO para POST
import { ActualizarNotaDTO } from '../dtos/actualizar-nota.dto' //DTO para PATCH    
import { notaService } from '../services/nota.service.js' // Operaciones de datos

export async function crearNota(req, res, next) { // Controlador de POST
    try{ // Captura posibles errores
        const datos = new CrearNotaDTO(req.body); // Filtra la entrada
        const nota = await notaService.crear(datos); // Pide guardar al servicio
        res.status(201).json({data:nota}); // Devuelve la nota creada.
    } catch (error) { next(error); } // Delega el error
}

export async function listarNotas(req, res, next){ // GET de tda la coleccion
    try{
        const notas = await notaService.listar(); // Solicita la lista
        res.json({ data: notas }); // resoponde 200 automaticamente
    }catch (error) { next(error); }
}

export async function obtenernota(req, res, next){ // GET de una sola nota
    try{
        const nota = await notaSercive.buscarPorId(req.params.id); // Lee: id de la URL
        if (!nota) return res.status(404).json({ error: 'Nota no encontrada'}); // Maneja ausencia
        res.json({data: nota}); // Devuelve la encontrada
    }catch(error) {next(error)};
}

export async function actualizarNota(req, res, next) {// Controlador del PATCH
    try{
        const datos = new ActualizarNotaDTO(req.body);// Toma solo los cambios
        const nota = await notaService.actualizar(req.params.id, datos); // Actualiza por ID
        if (!nota) return res.status(404).json({error: 'Nota no encontrada'});// o existe
        res.json({data:nota}); // Devuelve la version actualizada
    }catch(error) {next(error)};
}

export async function eliminarNota(req,res,next){ 
    try {
        const nota = await notaService.eliminat(req.params.id); // ELimina por ID
        if (!nota) return res.status(404).json({error: 'Nota no encontrada'});// o existe
        res.status(204).send(); // Exito sin contenido
    }catch(error) {next(error)};
}