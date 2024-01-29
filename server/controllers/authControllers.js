const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

// Register Endpoint
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    // Check if name was entered
    if (!firstName || !lastName) {
      return res.json({
        error: "First name and last name are required",
      });
    }
    // Check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // Check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);
    // Create user in database
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Login Endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    // Check if passwords match
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        {
          email: user.email,
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({ token, user });
        }
      );
    }

    if (!match) {
      return res.json({
        error: "Passwords do not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const testUser = (req, res) => {
  res.send("Hello World!");
};

module.exports = {
  registerUser,
  loginUser,
  testUser,
};
