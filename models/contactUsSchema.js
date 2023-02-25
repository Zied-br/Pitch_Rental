const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: { currentTime: () => new Date(Date.now() + 3600 * 1000) } }
);

module.exports = mongoose.model("contactUs", contactUsSchema);
