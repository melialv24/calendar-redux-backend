const { response } = require("express");
<<<<<<< HEAD
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const Usuario = require("../models/Usuario");
const crearUsuario = async (req, res = response) => {
=======
const Usuario = require("../models/Usuario");
const { validationResult } = require("express-validator");
const crearUsuario = async (req, res = response) => {
  const { name, email, password } = req.body;

  const usuario = new Usuario(req.body);
  await usuario.save();

  //para retornar un objeto json

  //manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  res.status(201).json({
    ok: true,
    msg: "register",
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
>>>>>>> 25edf5e0421b39b8fa217b125b2f3eb29777a50d
  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });
    console.log(usuario);

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe con ese correo",
      });
    }

    usuario = new Usuario(req.body);

    // Encriptar contraseña

    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hablar con el administrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe con ese correo",
      });
    }

    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Contraseña incorrecta",
      });
    }

    //para retornar un objeto json
    res.status(201).json({
      ok: true,
      msg: "login",
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hablar con el administrador",
    });
  }
};

const revalidarToken = (req, res = response) => {
  //para retornar un objeto json
  res.json({
    ok: true,
    msg: "renew",
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
