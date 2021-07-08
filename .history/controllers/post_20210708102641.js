const Post = require("../models/post");
exports.getPost = (req, res) => {
  res.json({
    posts: [
      { id: 1, name: "Vijay" },
      { id: 2, name: "Ridgeant" },
    ],
  });
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  console.log("Creating post : ", req.body);
};
