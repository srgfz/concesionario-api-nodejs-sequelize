const vehiculosService = require("../services/vehiculosService")

//Métodos:
//*Mostar todos los vehículos
const getAll = async (req, res) => {
    res.json(await vehiculosService.getAll())
}

//*Mostrar un vehículo a partir del nombre
const getOne = async (req, res) => {
    res.json(await vehiculosService.getOne(req.params.nombre_veh))
}

//*Crear un vehículo
const post = async (req, res) => {
    res.status(200).json(await vehiculosService.post(req.body))
}

//*Actualizar un vehículo
const update = (req, res) => {
    vehiculosService.put(req.body, req.params.id_veh)
    res.status(200).json(req.body)
}

//*Borrar un vehículo a partir de su id
const remove = async (req, res) => {
    const borrado = await vehiculosService.remove(req.params.id_veh)
    if (borrado) {//Si el borrado se ha producido correctamente
        res.json({ correcto: `Registro ${req.params.id_veh} borrado correctamente` })
    } else {//Si no se ha producido ningún borrado
        res.json({ error: `Error al borrar - El registro ${req.params.id_veh} no existe en la BD` })
    }
}

module.exports = {
    getAll,
    getOne,
    post,
    update,
    remove,
}