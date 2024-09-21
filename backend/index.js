const express = require("express");
const port = 3000;

const app = express();

app.use(express.static("public"));

console.log(` E está rodando da porta: ${port}`);

app.listen(port);
