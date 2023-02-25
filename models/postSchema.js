const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    description: String,

    owner: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },

    image: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: { currentTime: () => new Date(Date.now() + 3600 * 1000) } }
);

module.exports = mongoose.model("post", postSchema);
