const express = require("express");
const router = express.Router();
const cors = require("cors");
const { registerUser, loginUser } = require("../controllers/authControllers");

// middleware
router.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN_URI,
  })
);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
