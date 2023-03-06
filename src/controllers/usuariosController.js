const usuariosService = require("../services/usuariosService")

//Métodos: este solo tendrá los de registro y de login
const login = async (req, res) => {
    res.json(await usuariosService.login(req.body))
}

const register = async (req, res) => {
    const user = await usuariosService.register(req.body)
    if (user.name === "SequelizeUniqueConstraintError") {//Si el email introducido ya está en uso
        res.status(200).json({ Error: "El email indicado ya se encuentra registrado, inice sesión para acceder" })
    } else {
        res.status(200).json(user)
    }
}

module.exports = {
    login,
    register,
}