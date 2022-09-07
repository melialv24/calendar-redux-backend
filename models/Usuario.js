const { Schema, model } = require("mongoose");
<<<<<<< HEAD
=======
const { stringify } = require("querystring");
>>>>>>> 25edf5e0421b39b8fa217b125b2f3eb29777a50d

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
