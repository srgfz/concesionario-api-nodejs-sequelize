const clientesService = require("../services/clientesService")

//Métodos:
//*Mostar todos los clientes
const getAll = async (req, res) => {
    res.json(await clientesService.getAll())
}

//*Crear un cliente
const post = async (req, res) => {
    res.status(200).json(await clientesService.post(req.body))
}

module.exports = {
    getAll,
    post,
}