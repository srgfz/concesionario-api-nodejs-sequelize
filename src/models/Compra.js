const sequelize = require("../db/db")
const { Model, DataTypes } = require("sequelize")
const Vehiculo = require("../models/Vehiculo")
const Cliente = require("../models/Cliente")


class Compra extends Model { }

Compra.init({
    fecha_compra: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,//Por defecto será el valor en el que se inserte el registro
    },
    precio_compra: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "compra",
    timestamps: false,
})

//Relaciones de Compra:
Cliente.belongsToMany(Vehiculo, { through: Compra })
Vehiculo.belongsToMany(Cliente, { through: Compra })

Cliente.hasMany(Compra)
Compra.belongsTo(Cliente)

Vehiculo.hasMany(Compra)
Compra.belongsTo(Vehiculo)


module.exports = Compra;