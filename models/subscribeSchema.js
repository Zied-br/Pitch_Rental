const mongoose = require("mongoose");

const subscribeSchema = new mongoose.Schema(
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
    type: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { timestamps: { currentTime: () => new Date(Date.now() + 3600 * 1000) } }
);

module.exports = mongoose.model("subscribe", subscribeSchema);
