var mongoose = require("mongoose");
mongoose.connect("mongodb://172.31.0.2:27017/auxiliatura", {useNewUrlParser: true});
var db  = mongoose.connection;
db.on("error", () => {
    console.log("ERRO no se puede conectar al servidor");
});
db.on("open", () => {
    console.log("Conexion exitosa");
});
module.exports = mongoose;