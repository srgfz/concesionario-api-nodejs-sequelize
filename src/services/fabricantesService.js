//Importaciones
const Fabricante = require("../models/Fabricante")
const Vehiculo = require("../models/Vehiculo")

//Funciones del servicio fabricantes:
//*Función para obtener un fabricante con todos sus vehículos
const getOne = async (id_fab) => {
    return await Fabricante.findOne({
        where: {
            id_fab: id_fab,
        },
        include: {
            model: Vehiculo,
            attributes: ["nombre_veh", "precio_veh", "unidades_veh"]
        },
        attributes: ["nombre_fab"],
    })
}

//*Función para crear un fabricante
const post = async (newFab) => {
    try {
        return await Fabricante.create(newFab);
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getOne,
    post,
};