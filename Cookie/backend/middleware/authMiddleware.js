const jwt = require("jsonwebtoken");

const checkAuth = (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  if (token) {
    return res.status(201).json({ message: "token set sucesfully" });
  }
};

module.exports = checkAuth;
