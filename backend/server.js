const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,});

  app.use("/api/users"), require("./routes/userRoutes");

  app.listen(5000, () => console.log("Servidor rodando na porta 5000. Obaa!"));

  