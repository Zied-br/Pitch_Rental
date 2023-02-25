const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  squadName: {
    type: String,
    required: true,
  },

  start: {
    type: Date,
    required: true,
  },

  code: {
    type: String,
    required: true,
  },
  subscriber: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("booking", bookingSchema);
