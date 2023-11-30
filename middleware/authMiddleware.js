const jwt = require("jsonwebtoken");
const { secret } = require("../config");

const authMiddleWare = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, secret);
    req.email = decoded.email;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleWare;
