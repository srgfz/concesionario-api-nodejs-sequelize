const jwt = require('jwt-simple')
const moment = require('moment')

const checkToken = (req, res, next) => {
    //Guardo el token
    const token = req.headers["token"]
    let playload = {}
    if (!token) {//Si el token no existe
        return res.json({ error: "Necesita un token para realizar esta petición, por favor, inicie sesión para obtener su token" })
    }
    try {//El token es correcto
        playload = jwt.decode(token, "Frase de encriptado .env")
        if (playload.expiredAt < moment().unix()) {//Si el token ha expirado (más de 8 horas)
            return res.json({ error: "Su token ha expirado, por favor inicie sesión para obtener un nuevo token" })
        }
    } catch (error) {//Si el token no coincide
        return res.json({ error: "Token erroneo, inicie sesión para obtener un token válido" })
    }
    next()
}

module.exports = {
    checkToken,
}