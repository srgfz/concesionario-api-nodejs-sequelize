//Importaciones
const Compra = require("../models/Compra")
const sequalize = require("../db/db")

//Funciones del servicio compras:
//*Función para obtener todas las compras con sus respectivos vehículos, clientes y fabricantes
//Se podría haber hecho mediante en include de sequelize pero habría que haber puesto en la tabla de compras también el id del Fabricante mediante una asociación cuando realmente no es necesario para acceder a todos los datos que necesitamos, así que lo he hecho mediante una query
const getAll = async () => {
    const [compras, metadata] = await sequalize.query(
        `SELECT comp.fecha_compra Fecha_Compra, comp.precio_compra Precio_Compra, 
        veh.nombre_veh Nombre_Vehiculo, fab.nombre_fab Nombre_Fabricante, cli.nombre_cli Nombre_Cliente 
        FROM compras comp INNER JOIN clientes cli ON comp.clienteIdCli=cli.id_cli 
        INNER JOIN vehiculos veh ON veh.id_veh=comp.vehiculoIdVeh 
        INNER JOIN fabricantes fab ON fab.id_fab=veh.fabricanteIdFab`
    )
    return compras
}


//*Función para crear una compra
const post = async (newCompra) => {
    try {
        return await Compra.create(newCompra);
    }
    catch (error) {
        return error
    }
}

module.exports = {
    getAll,
    post,
};