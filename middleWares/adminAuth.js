const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");

const adminAuth = (req, res, next) => {
  try {
    const Token = req.header("Auth-Token");
    if (!Token) return res.status(400).json({ msg: "You are not admin !! " });

    jwt.verify(Token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) return res.status(400).json({ msg: "You are not admin !! " });
      //testing if is admin using role
      const decodedToken = jwt_decode(Token);
      if (decodedToken.role === 0)
        return res.status(400).json({ msg: "You are not admin !! " });
      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.msg });
  }
};
module.exports = adminAuth;
