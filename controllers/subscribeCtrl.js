const Subscribtion = require("../models/subscribeSchema");

const subscribeCtrl = {
  newSubscription: async (req, res) => {
    try {
      const { type, code, fullName, email, phoneNumber } = req.body;

      const addNewSubscribtion = new Subscribtion({
        type,
        code,
        fullName,
        email,
        phoneNumber,
      });

      const addSubscription = await addNewSubscribtion.save();
      res.json(addSubscription);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getSubscriptions: async (req, res) => {
    try {
      const allSubscriptions = await Subscribtion.find();
      res.json(allSubscriptions);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteSubscription: async (req, res) => {
    try {
      const deleteOneSubscription = await Subscribtion.findByIdAndDelete(
        req.params.id
      );
      res.json(deleteOneSubscription);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = subscribeCtrl;
