import { body, param, validationResult } from "express-validator"; // Importa regls para body, URL y errores
const responderErrores = (req, res, next) => { // Crea un middleware reutilizable
    const errores = validationResult(req); // Reune los errores anteriores
    if (!errores.isEmpty()){ // comprueba si fallo alguna regla
        return res.status(400).json({errores: errores.array() }) // Detiene y responde 400
    }
    next(); // Sin errores: continua al controlador
}

export const validarCrearNota = [// Relgas exclusivas para POST
    body('titulo').trim().isLength({ min: 3, max: 60}) // Limpia y mide el titulo
        .withMessage('El titulo debe de tener entre 3 y 60 caracteres'), // Mensaje si falla
    body('contenido').trim().isLength({ min: 1, max: 280}) // Exige contenido
        .withMessage('El contenido debe tener ente 1 y 280 caracteres'), // Explica el limite
    body('categoria').isIn(['clase','tarea','idea']) // acepta tres valores
        .withMessage('Categoria no valida'), // Mensaje de categoria
    responderErrores // eplica la respuesta comun
]// cierra la cadena de validaciones

export const validarActualuzarNota = [ // Reglas para PATCH
    body('titulo').optional().trim(),isLength({min: 3, max: 60}), // Valida solo si llego
    body('contenido').optional().trim().isLength({min: 1, max: 280}), // Tambien es opcional
    body('categoria').optional().isIn(['clase','tarea','idea']), // Limita valores
    responderErrores // responde 400 o continua
]

export const validarnotaId = [ // relgas para :id
    oaran('id').isMongoId().withMessage('El id no es valido'), // exige formato MongoDB
    responderErrores// evita consultar con un ID incorrecto`
]