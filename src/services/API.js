

// OBTENER USUARIOS
export const obtenerComentarios = async () => {
    try {
        const resultado = await fetch('./data.json');

        if(!resultado.ok){
            throw new Error(`Error ${resultado.status}`);
        }

        const users = await resultado.json();
        return users;
    } catch (error) {
        console.log(error)
    }
}
