const helpers = require("./helpers");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello express!");
});
app.listen(3000);
const total = helpers.sum(10, 200);
console.log("Helpers : total 10 + 200 =  ", total);
