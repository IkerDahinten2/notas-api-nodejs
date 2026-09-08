import { Router } from "express"; // importa el enrutador
import {crearNota, listarNotas, obtenernota as obtenerNota, actualizarNota, eliminarNota} from '../controllers/nota.controller.js'
import {validarActualuzarNota, validarCrearNota,validarnotaId} from '../validators/nota.validators.js' // Trae validaciones
export const notaRouter = Router(); // Crea el enrutador
notaRouter.post('/', validarCrearNota, crearNota); // POST -> validar -> crear
notaRouter.get('/', listarNotas); // GET -> listar todas
notaRouter.get('/', validarnotaId, obtenerNota); // GET -> validar ID -> buscar una
notaRouter.patch('/', validarnotaId, validarActualuzarNota, actualizarNota); // PATCH -> validar -> actualizar
notaRouter.delete('/', validarnotaId, eliminarNota); // DELETE -> validar -> id -> eliminar