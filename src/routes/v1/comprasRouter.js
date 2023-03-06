const comprasRouter = require("express").Router();
//Importo el controlador
const comprasController = require("../../controllers/comprasController")

//Acciones de clientes:
comprasRouter.get("/", comprasController.getAll)
comprasRouter.post("/", comprasController.post)


module.exports = comprasRouter