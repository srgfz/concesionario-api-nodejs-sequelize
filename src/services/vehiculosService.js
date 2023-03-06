//Importaciones
const Vehiculo = require("../models/Vehiculo")

//Funciones del servicio veniculos:
//*Función para obtener todos los vehículos
const getAll = async () => {
    return await Vehiculo.findAll()
}

//*Función para obtener un vehículo a partir del nombre
const getOne = async (nombre_veh) => {
    return await Vehiculo.findAll({//Hago un find all para que me devuelva todos los que tienen un determinado nombre en caso de que los nombres coincidan
        where: {
            nombre_veh: nombre_veh,
        },
    })
}

//*Función para crear un vehículo
const post = async (newVeh) => {
    try {
        return await Vehiculo.create(newVeh);
    }
    catch (error) {
        return error
    }
}

//*Actualizar un vehículo a partir de su id
const put = async (newVeh, id_veh) => {
    return await Vehiculo.update(newVeh, { where: { id_veh } })
};

//*Borrar un vehículo a partir de su id
const remove = async (id_veh) => {
    return await Vehiculo.destroy({ where: { id_veh: id_veh } });
};

module.exports = {
    getAll,
    getOne,
    post,
    put,
    remove,
};