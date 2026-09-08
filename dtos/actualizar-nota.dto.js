export class ActualizarNotaDTO { // Molde para PATCH
    constructor(body){ // Recibe solo los campos que el cliente quiere cambiar
        if (body.titulo !== undefined){ // Comprueba si enviaron el titulo
            this.titulo = body.titulo.trim(); // Lo limpia y agrega el DTO
        };
        if (body.contenido !== undefined){ // Comprueba si enviaron el contenido
            this.contenido = body.contenido.trim(); // Agrega unicamente ese cambio
        };
        if (body.categoria !== undefined){ // Comprueba si enviaron categoria
            this.categoria = body.categoria(); // Agrega la nueva categoria
        };
    }
} // El DTO final contine solo lo que se actializara