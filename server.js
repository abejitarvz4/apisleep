const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConexion = require("./conexion");

const clientes = require("./routes/usuarios");

var app = express();
app.use(bodyParser.json());
app.use("/usuarios",clientes);
app.listen(3000);