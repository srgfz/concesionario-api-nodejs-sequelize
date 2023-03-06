const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// Conversión a json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Importamos el api Routes:
const apiroutes = require("./routes/v1/apiRouter");
//Improtamos la DB:
const sequelize = require("./db/db");
//Importamos las relaciones de la db:
require("./db/associations")


app.use("/concesionario", apiroutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor eschando en http://localhost:${PORT}`);
    // conexión con mysql mediante sequelize
    sequelize
        .sync({ force: false })
        .then(() => console.log("tablas sincronizadas correctamente"));
});
