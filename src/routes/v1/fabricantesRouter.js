const fabricantesRouter = require("express").Router();
//Importo el controlador
const fabricantesController = require("../../controllers/fabricantesController")

//Acciones de clientes:
fabricantesRouter.get("/:id_fab", fabricantesController.getOne)
fabricantesRouter.post("/", fabricantesController.post)


module.exports = fabricantesRouter