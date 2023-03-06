const fabricantesService = require("../services/fabricantesService")

//Métodos:
//*Mostrar un fabricante con todos sus vehículos
const getOne = async (req, res) => {
    res.json(await fabricantesService.getOne(req.params.id_fab))
}

//*Crear un fabricante
const post = async (req, res) => {
    res.status(200).json(await fabricantesService.post(req.body))
}

module.exports = {
    getOne,
    post,
}