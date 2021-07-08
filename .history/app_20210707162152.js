const express = require("express");
const morgan = require("morgan");
const app = express();
const { getPost } = require("./routes/post");

app.use(morgan("dev"));

app.get("/", getPost);

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
}

const port = 3000;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
