const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cinNumber: {
      type: Number,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    image: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: { currentTime: () => new Date(Date.now() + 3600 * 1000) } }
);

module.exports = mongoose.model("user", userSchema);
