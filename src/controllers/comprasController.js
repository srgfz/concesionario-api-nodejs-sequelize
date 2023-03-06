const comprasService = require("../services/comprasService")

//Métodos:
//*Mostrar todas las compras con sus vehículos, el cliente y el fabricante
const getAll = async (req, res) => {
    res.json(await comprasService.getAll())
}

//*Crear una compra
const post = async (req, res) => {
    res.status(200).json(await comprasService.post(req.body))
}

module.exports = {
    getAll,
    post,
}