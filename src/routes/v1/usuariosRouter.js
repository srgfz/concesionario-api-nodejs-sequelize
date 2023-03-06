const usuariosRouter = require("express").Router();

//Controlador:
const usuariosController = require("../../controllers/usuariosController")

//Acciones del usuario: login y registro
usuariosRouter.get("/login", usuariosController.login)
usuariosRouter.post("/register", usuariosController.register)

module.exports = usuariosRouter