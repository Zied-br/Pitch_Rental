const User = require("../models/userSchema");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("../helpers/cloudinary");

const userCtrl = {
  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ error: errors.mapped() });

      const {
        firstName,
        lastName,
        password,
        email,
        cinNumber,
        phoneNumber,
        image,
      } = req.body;

      const userEmail = await User.findOne({ email });
      const userCin = await User.findOne({ cinNumber });

      if (userEmail)
        return res.status(400).json({ msg: "Email already exist !" });
      else if (userCin)
        return res.status(400).json({ msg: "Cin Number already exist !" });

      const hash = await bcrypt.hash(password, 11);

      const newUser = new User({
        firstName,
        lastName,
        password: hash,
        email,
        cinNumber,
        phoneNumber,
      });

      if (image) {
        const savedImage = await cloudinary.uploader.upload(image, {
          timeout: 20000,
          upload_preset: "PITCHRENTAL",
        });

        newUser.image = {
          url: savedImage.url,
          public_id: savedImage.public_id,
        };
      }

      const registredUser = await newUser.save();

      const payload = {
        id: registredUser._id,
      };

      const accessToken = await jwt.sign(payload, process.env.ACCESS_TOKEN);
      res.json(accessToken);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        return res.status(400).json({ errors: errorMessages });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({
            errors: [`User doesn't exist. You have to register before!!`],
          });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ errors: [`Please enter a valid password!!`] });

      const payload = {
        id: user._id,
        role: user.role,
      };

      const accessToken = await jwt.sign(payload, process.env.ACCESS_TOKEN);
      res.json({ accessToken, role: user.role, name: user.firstName });
    } catch (err) {
      return res.status(500).json({ errors: [err.message] });
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select({ password: 0 });
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
module.exports = userCtrl;
