const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");
class Usuario extends Model { }

Usuario.init({
    id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos_user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {//Valido que sea un email
            isEmail: true,
        },
        unique: true,//Pongo que no pueda ser un campo que se repita (email único)
    },
    password_user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "usuario",
        timestamps: false,
    });

module.exports = Usuario;
