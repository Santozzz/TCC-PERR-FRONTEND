//Importando as bibliotecas necessárias
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const cors = require("cors");
const { log } = require("console");

//Inicializando o aplicativo Express
const app = express();
const PORT = 3000; //Porta do servidor
const SECRET_KEY = "perr@#_2024#@"; //Chave secreta do jwt

// Configurando o middleware para analisar o corpo das requisições como JSON
app.use(bodyParser.json());
// Habilitando CORS para permitir requisições de outros domínios
app.use(cors());

// Função para ler o banco de dados (arquivo JSON)
function readDB() {
  const data = fs.readFileSync("bd.json");
  return JSON.parse(data);
}

// Função para escrever no banco de dados (atualiza o arquivo JSON)
function writeDB(data) {
  fs.writeFileSync("bd.json", JSON.stringify(data, null, 2));
}

// Rota de cadastro (endpoint para registrar novos usuários)
app.post("/Cadastro", async (req, res) => {
  const { username, tel, email, password } = req.body;

  const db = readDB();
  const userExist = db.users.find((user) => user.username === username);

  if (userExist) {
    return res.status(400).json({ message: "Usuário já existe" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  db.users.push({ username, tel, email, password: hashedPassword });
  writeDB(db);

  res.status(201).json({ message: "Usuário criado com sucesso" });
});

//ROda de login (endpoint para autenticar usuários)
app.post("/Entrar", async (req, res) => {
  const { username, password } = req.body;

  const db = readDB();
  const user = db.users.find((user) => user.username === username);

  if (!user) {
    return res.status(400).json({ message: "Usuário não encontrado" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Senha Incorreta" });
  }

  //Gera um token JWT para o usuário autenticado
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
  res.status(200).json({ token });
});

//Inicia o Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
