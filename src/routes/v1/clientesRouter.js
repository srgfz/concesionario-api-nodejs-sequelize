const clientesRouter = require("express").Router();
//Importo el controlador
const clientesController = require("../../controllers/clientesController")


//Acciones de clientes:
clientesRouter.get("/", clientesController.getAll)
clientesRouter.post("/", clientesController.post)

module.exports = clientesRouter