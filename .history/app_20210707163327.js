const express = require("express");
const morgan = require("morgan");
const app = express();
const postRoute = require("./routes/post");

app.use(morgan("dev"));

app.use("/", postRoute);

const port = 3000;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
