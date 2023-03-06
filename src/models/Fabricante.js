const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");
class Fabricante extends Model { }

Fabricante.init({
    id_fab: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_fab: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    direccion_fab: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono_fab: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "fabricante",
        timestamps: false,
    });

module.exports = Fabricante;
