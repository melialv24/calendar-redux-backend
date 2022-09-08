const {
  getEvents,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

const { validarJWT } = require("../middlewares/validar-jwt");

const router = require("./auth");

router.use(validarJWT);

// Todas tienen que pasar por la validación del JWT
// Obtener eventos
router.get("/getEvents", getEvents);

//Crear n nuevo evento
router.post("/newEvent", crearEvento);

//Actualizar evento
router.put("/updateEvent/:id", actualizarEvento);

//Eliminar evento
router.delete("/deleteEvent/:id", eliminarEvento);

module.exports = router;
