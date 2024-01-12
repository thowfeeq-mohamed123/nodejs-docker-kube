const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send("Hello World !");
});

app.listen(4000, () => {
  console.log(`App start with http://localhost:${4000}`);
});
