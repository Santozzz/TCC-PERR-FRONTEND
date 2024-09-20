const express = require("express");
const mysql = require("mysql");
const port = 3000;

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Conectado ao MySQL! E está rodando da porta: ${port}`);

  app.listen(port);
});
