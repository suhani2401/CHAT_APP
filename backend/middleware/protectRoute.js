const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies && req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = protectRoute;
