import { Nota } from "../models/nota.model"; // trae el modelo
export const notaService = { // agreupa las operaciones de datos
    crear: (datos) => Nota.create(datos), // POST: inserta un documento
    listar: () => Nota.find().sort({createAt: -1}),// GET: trae todas
    buscarPorId: (id) => Nota.findById(id), // GET /:id: trae una
    actualizar: (id, datos) => Nota.findByIdAndUpdate(id, datos, { // PATCH: busca y cambia
        new: true, runValidators: true // Devuelve version y valida
    }),
    eliminar: (id) => Nota.findByIdAndDelete(id) // DELETE: busca y elimina
}// Termina el servicio