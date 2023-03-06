const vehiculosRouter = require("express").Router();
//Importo el controlador
const vehiculosController = require("../../controllers/vehiculosController")

//Acciones de clientes:
vehiculosRouter.get("/", vehiculosController.getAll)
vehiculosRouter.get("/:nombre_veh", vehiculosController.getOne)
vehiculosRouter.post("/", vehiculosController.post)
vehiculosRouter.put("/:id_veh", vehiculosController.update)
vehiculosRouter.delete("/:id_veh", vehiculosController.remove)


module.exports = vehiculosRouter