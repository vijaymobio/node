const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello vijay");
});
const port = 3000;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
