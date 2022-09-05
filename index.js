const express = require("express");
require("dotenv").config();

// crear el servidor de express
const app = express();

// Directorio público
// hacer que cuando la persona entre al slash mostrarle el directorio publico
// el use en express es un middleware, es decir una función que se ejecuta siempre que pase por algún lugar
app.use(express.static("public"));

//Rutas
// aquí le digo al cliente cuando alguien
//solicite un slash que es lo que quiero responder
/*app.get("/", (req, res) => {
  //para retornar un objeto json
  res.json({
    ok: true,
  });
});
*/
// Escuchar ,(le voy a decir a mi servidor de express
// donde escuchar las peticiones) (puerto donde va a correr,
//un callback que se ejecuta cuando el servidor este arriba )
app.listen(process.env.PORT, () => {
  console.log("Melissa hermosa");
});
