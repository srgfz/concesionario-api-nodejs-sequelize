const Fabricante = require("../models/Fabricante")
const Vehiculo = require("../models/Vehiculo")

//Relación 1 a N: un fabricante tiene muchos vehículos y un vehículo pertenecerá a un único fabricante
Fabricante.hasMany(Vehiculo)
Vehiculo.belongsTo(Fabricante)