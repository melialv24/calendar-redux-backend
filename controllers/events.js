const { response } = require("express");

/*{
    ok: true,
    msg: 'getEventos'
}*/

const getEvents = (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: "getEvents",
  });
};

const crearEvento = (req, res = response) => {
  // Verificar que tenga el evento
  console.log(req.body);

  res.status(201).json({
    ok: true,
    msg: "crearEvento",
  });
};

const actualizarEvento = (req, res = response) => {
  const params = req.params;

  console.log(params);
  res.status(201).json({
    ok: true,
    msg: "actualizarEvento",
  });
};

const eliminarEvento = (req, res = response) => {
  const params = req.params;

  console.log(params);
  res.status(201).json({
    ok: true,
    msg: "eliminarEvento",
  });
};

module.exports = {
  getEvents,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
