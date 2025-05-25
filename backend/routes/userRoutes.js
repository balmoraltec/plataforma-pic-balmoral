const express = require("express");
const router = express.Router();
const User = require("../models/User");
const nodemailer = require("nodemailer");

router.post("/cadastro", async (req, res) => {
  const { email, nome } = req.body;
  const codigo = Math.floor(100000 + Math.random() * 900000);

  const novoUsuario = new User({
    email,
    nome,
    codigoVerificacao: codigo,
    verificado: false
  });

  await novoUsuario.save();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    to: email,
    subject: "Código de Verificação Balmoral",
    html: `<h1>Seu código é: ${codigo}</h1>`
  });

  res.status(200).json({ msg: "Código enviado por e-mail" });
});

module.exports = router;