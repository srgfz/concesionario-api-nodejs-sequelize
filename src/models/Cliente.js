const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");
class Cliente extends Model { }

Cliente.init({
    id_cli: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_cli: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion_cli: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechanac_cli: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    telefono_cli: {//Será un string por el +34...
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "cliente",
        timestamps: false,
    });

module.exports = Cliente;
