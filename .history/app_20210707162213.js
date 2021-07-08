const express = require("express");
const morgan = require("morgan");
const app = express();
const { getPost } = require("./routes/post");

app.use(morgan("dev"));

app.get("/", getPost);

const port = 3000;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
