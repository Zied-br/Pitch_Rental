const jwt_decode = require("jwt-decode");
const Post = require("../models/postSchema");

const checkPostOwner = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id, owner: req.user.id });
    const Token = req.header("Auth-Token");
    const decodedToken = jwt_decode(Token);

    if (!post && decodedToken.role !== 1)
      return res.status(401).json({ errors: [{ msg: "Not authorized !" }] });
    next();
  } catch (err) {
    res.status().json({ err: err });
  }
};

module.exports = checkPostOwner;
