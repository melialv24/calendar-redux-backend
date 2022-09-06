const { Router } = require("express");
// el check se encarga de validar un campo en particular a la vez
const { check } = require("express-validator");
const router = Router();
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

// aquí le digo al cliente cuando alguien
//solicite un slash que es lo que quiero responder

// si queremos implementar middleware los pasamos como segundo argumento a la función
router.post(
  "/new",
  [
    //middleware
    // primer argumento es el campo que quiero evaluar, segundo el mensaje de error

    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  crearUsuario
);

router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
  ],
  loginUsuario
);

router.get("/renew", revalidarToken);

module.exports = router;
