//Importaciones
const Usuario = require("../models/Usuario")
const moment = require('moment')
const jwt = require('jwt-simple')
const bcryptjs = require('bcryptjs');

//Funciones del servicio usuario:
//*Función para crear el token:
const createToken = (user) => {
    const payload = {
        usuarioId: user.id_user,
        createdAt: moment().unix(),
        expiredAt: moment().add(8, "hours").unix()//El token expirará a las 8 horas
    }
    return jwt.encode(payload, "Frase de encriptado .env")
}

//*Función de Login
const login = async (body) => {
    if (typeof body === 'undefined' || typeof body.password_user === 'undefined' || typeof body.email_user === 'undefined') {//Si no se introduce la contraseña y/o el email
        return { error: "Debe introducir un email y una contraseña" };
    }
    const user = await Usuario.findOne({
        where: {
            email_user: body.email_user,
        },
    });
    if (user) {//Si el usuario para el email dado existe
        if (bcryptjs.compareSync(body.password_user, user.password_user)) {//Si el login es correcto devolvemos el token para ese usuario
            return { token: createToken(user) }
        } else {//Contraseña incorrecta
            return { error: "Contraseña incorrecta" };
        }
    } else {//Email incorrecto
        return { error: "Email Incorrecto" };
    }
}

//*Función de registro
const register = async (newUser) => {
    try {
        return await Usuario.create({
            nombre_user: newUser.nombre_user,
            apellidos_user: newUser.apellidos_user,
            email_user: newUser.email_user,
            password_user: bcryptjs.hashSync(newUser.password_user, 10),
        });
    }
    catch (error) {
        return error
    }
}

module.exports = {
    login,
    register,
};