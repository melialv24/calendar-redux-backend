const { Schema, model } = require("mongoose");
const { stringify } = require("querystring");

const UsuarioSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = model("Usuario", UsuarioSchema);
