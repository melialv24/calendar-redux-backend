const {
  getEvents,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");

const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const router = require("./auth");

router.use(validarJWT);

// Todas tienen que pasar por la validación del JWT
// Obtener eventos
router.get("/getEvents", getEvents);

//Crear n nuevo evento
router.post(
  "/newEvent",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    //check("title", "Fecha de fin es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//Actualizar evento
router.put("/updateEvent/:id", actualizarEvento);

//Eliminar evento
router.delete("/deleteEvent/:id", eliminarEvento);

module.exports = router;
