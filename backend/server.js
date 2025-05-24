const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Essa linha exige que o require retorne um router
app.use("/api/users", require("./routes/userRoutes"));


app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
