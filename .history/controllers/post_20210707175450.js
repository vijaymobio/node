exports.getPost = (req, res) => {
  res.json({
    posts: [
      { id: 1, name: "Vijay" },
      { id: 1, name: "Ridgeant" },
    ],
  });
};
