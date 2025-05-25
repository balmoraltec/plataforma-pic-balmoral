const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  nome: String,
  codigoVerificacao: String,
  verificado: Boolean
});

module.exports = mongoose.model("User", userSchema)