const mongoose = require("mongoose");

const post = new mongoose.Schema({
  title: {
    type: String,
    requiered: "Title is required",
    minlength: 4,
    maxlength: 150,
  },
  body: {
    type: String,
    requiered: "Body is required",
    minlength: 4,
    maxlength: 2000,
  },
});

module.exports = post;
