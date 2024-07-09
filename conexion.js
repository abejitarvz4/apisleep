const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
    connectionLimit: 10000, 
    host: "oaxacapower.org",
    user: "u744130986_Sleeptrack",
    password: "Sleeptrack25",
    database: "u744130986_Sleeptrack",
    multipleStatements: true,
});

mysqlConexion.connect(
(err) => {
    if (!err) {
        console.log("conectado a bd");
    } 
    else {
        console.log("error",err);
    }
}
);

module.exports = mysqlConexion;