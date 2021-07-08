const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const postRoute = require("./routes/post");
const mongose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(() => {
  console.log("Db is connected");
});

mongose.connection.on("error", (err) => {
  console.log("Db connect error : ", err.message);
});
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use("/", postRoute);

const port = 3000;
app.listen(port, () => {
  console.log("https://localhost:" + port);
});
