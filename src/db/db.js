const Sequelize = require("sequelize")

const sequelize = new Sequelize("concesionario", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;