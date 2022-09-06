const { Router } = require("express");
const router = Router();
const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");

// aquí le digo al cliente cuando alguien
//solicite un slash que es lo que quiero responder
router.post("/new", crearUsuario);

router.post("/", loginUsuario);

router.get("/renew", revalidarToken);

module.exports = router;
