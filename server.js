const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Importar o pacote cors
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para habilitar CORS para qualquer origem
app.use(
  cors({
    origin: "*", // Permite requisições de qualquer origem
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  })
);

// Middleware para analisar requisições JSON e URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "aneel_reclamacoes", // Especifica o nome do banco de dados
  })
  .then(() =>
    console.log("Conectado ao banco aneel_reclamacoes no MongoDB Atlas")
  )
  .catch((error) => console.error("Erro ao conectar ao MongoDB Atlas:", error));

// Importar e usar as rotas
const concessionariasRoutes = require("./routes/concessionariasRoutes");
app.use("/api/concessionarias", concessionariasRoutes);

// Rota de Documentação
app.get("/api/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
