const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello express!");
});
const port = 8080;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
