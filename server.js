const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hey", (req, res) => {
  res.send("Let's go babe");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
