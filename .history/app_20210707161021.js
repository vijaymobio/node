const express = require("express");
const app = express();
const { getPost } = require("./routes/post");

app.get("/", getPost);

const port = 3000;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
