const express = require("express");
const morgan = require("morgan");
const app = express();
const postRoute = require("./routes/post");
const mongose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongose.connect(process.config.MONGO_URI).then(() => {
  console.log("Db is connected");
});

mongose.connection("error", (err) => {
  console.log("Db connect error : ", err.message);
});

app.use(morgan("dev"));

app.use("/", postRoute);

const port = 3000;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
