const express = require('express');
const router = express.Router();
const User = require('../modules/user');
const jwt = require('jsonwebtoken');
require("dotenv").config({ path: "./config/config.env" });

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    req.userId = decoded._id;
    next();
  });
};

// Route to fetch user data
router.get("/user", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user data:", err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
