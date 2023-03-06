const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize");
class Vehiculo extends Model { }

Vehiculo.init({
    id_veh: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre_veh: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unidades_veh: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    precio_veh: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
},
    {
        sequelize,
        modelName: "vehiculo",
        timestamps: false,
    });

module.exports = Vehiculo;
