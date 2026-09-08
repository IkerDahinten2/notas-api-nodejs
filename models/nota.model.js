import mongoose from "mongoose"; // importa el modelador de MongoDB 
const notaSchema = new mongoose.Schema({ // define la forma de cada nota
    titulo: { type: String, required: true}, // texto obligatorio
    contenido: {trype: String, required: true},// texto obligatorio
    categoria: {trype: String, enum: ['clase','tarea','idea'], required: true} // solo 3 valores y es obligatorio
},{timestamps: true}) // crea fechas automaticas
export const Nota = mongoose.model('nota', notaSchema); // expone el modelo