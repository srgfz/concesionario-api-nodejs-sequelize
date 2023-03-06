//Importaciones
const Cliente = require("../models/Cliente")

//Funciones del servicio cliente:
//*Función para obtener todos
const getAll = async () => {
    return await Cliente.findAll()
}

//*Función para crear un cliente
const post = async (newCliente) => {
    try {
        return await Cliente.create(newCliente);
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getAll,
    post,
};