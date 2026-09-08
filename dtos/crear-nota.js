export class CrearNotaDTO { // Define el molde de datos permitidos.
    constructor(body){ // Recibe req.body como entrada.
        this.titulo = body.titulo.trim(); // Guarda el titulo sin espacios extremos.
        this.contenido = body.contenido.trim(); // Limpia el contenido.
        this.categoria = body.categoria; // Conserva la categoria validada.
    } // Cierra el constructor
} // Cierra la clase CrearNotaDTO