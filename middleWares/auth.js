const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const Token = req.header("Auth-Token");
    if (!Token)
      return res.status(400).json({ msg: "You are not authorized !! " });

    jwt.verify(Token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err)
        return res.status(400).json({ msg: "You are not authorized !! " });
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.msg });
  }
};
module.exports = auth;
