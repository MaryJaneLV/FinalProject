const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ errors: [{ msg: "No token, authorization denied" }] });
  }

  try {
    await jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        res.status(401).json({ msg: "Token is not valid " });
      } else {
        req.user = decode.user;
        next();
      }
    });
  } catch (err) {
    console.error("Something wrong with middleware");
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = auth