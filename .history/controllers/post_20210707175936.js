exports.getPost = (req, res) => {
  res.json({
    posts: [
      { id: 1, name: "Vijay" },
      { id: 2, name: "Ridgeant" },
    ],
  });
};
