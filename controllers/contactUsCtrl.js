const Message = require("../models/contactUsSchema");
const { validationResult } = require("express-validator");

const contactUsCtrl = {
  sendMessage: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ error: errors.mapped() });
      const { fullName, email, phoneNumber, subject, message } = req.body;

      const newMessage = new Message({
        fullName,
        email,
        phoneNumber,
        subject,
        message,
      });

      const sentedMessage = await newMessage.save();
      res.json(sentedMessage);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getMessages: async (req, res) => {
    try {
      const allMessages = await Message.find();
      res.json(allMessages);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteMessage: async (req, res) => {
    try {
      const deleteMessage = await Message.findByIdAndDelete(req.params.id);
      res.json(deleteMessage);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = contactUsCtrl;
