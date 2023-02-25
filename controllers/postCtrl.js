const Post = require("../models/postSchema");
const cloudinary = require("../helpers/cloudinary");

const postCtrl = {
  addPost: async (req, res) => {
    try {
      const { title, description, image } = req.body;

      const newPost = new Post({
        title,
        description,
        owner: req.user.id,
      });

      if (image) {
        const savedImage = await cloudinary.uploader.upload(image, {
          timeout: 20000,
          upload_preset: "PITCHRENTAL",
        });

        newPost.image = {
          url: savedImage.url,
          public_id: savedImage.public_id,
        };
      }

      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getAllPost: async (req, res) => {
    try {
      const allPosts = await Post.find().populate({
        path: "owner",
        select: "firstName lastName image",
      });
      res.json(allPosts);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUserPost: async (req, res) => {
    try {
      const getMyPosts = await Post.find({ owner: req.user.id }).populate({
        path: "owner",
        select: "firstName lastName image",
      });
      res.json(getMyPosts);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deltePost: async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      res.json(deletedPost);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );

      res.json(updatedPost);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postCtrl;
