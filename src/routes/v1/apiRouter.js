const apirouter = require("express").Router();
//Importo los middlewares
const middlewares = require("./middlewares/middlewares")

//Importo los router de cada elemento:
const usuariosRouter = require("./usuariosRouter")
const clientesRouter = require("./clientesRouter")
const fabricantesRouter = require("./fabricantesRouter")
const comprasRouter = require("./comprasRouter")
const vehiculosRouter = require("./vehiculosRouter")


//*Uso de cada elemento (en todos compruebo el token menos en usuarios)
apirouter.use("/usuarios", usuariosRouter)
apirouter.use("/clientes", middlewares.checkToken, clientesRouter)
apirouter.use("/fabricantes", middlewares.checkToken, fabricantesRouter)
apirouter.use("/compras", middlewares.checkToken, comprasRouter)
apirouter.use("/vehiculos", middlewares.checkToken, vehiculosRouter)

module.exports = apirouter;