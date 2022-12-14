const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");

// crear el servidor de express
const app = express();

// Base de datos
dbConnection();

//CORS
app.use(cors());

// Directorio público
// hacer que cuando la persona entre al slash mostrarle el directorio publico
// el use en express es un middleware, es decir una función que se ejecuta
// siempre que pase por algún lugar
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

//Rutas
// aquí especificamos la ruta en la cual quiero que esté habilitado
//este endpoint a traves de un middleware
//(la ruta en la que quiero que esté habilitado este endpoint,
//de lo que tenemos en out )
// es decir que cuando vayan a postman y escriban
//localhost:4001/api/auth se va a buscar el endpoint en routes auth
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// Escuchar ,(le voy a decir a mi servidor de express
// donde escuchar las peticiones) (puerto donde va a correr,
//un callback que se ejecuta cuando el servidor este arriba )
app.listen(process.env.PORT, () => {
  console.log("Melissa hermosa");
});
