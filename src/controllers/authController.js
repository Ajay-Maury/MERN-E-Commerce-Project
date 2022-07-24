const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    //checking email
    if (user) {
      return res.send("Email already exists");
    } // if new user create it
    user = await User.create(req.body);

    const token = generateToken(user);
    return res.status(200).send({ user, token });
  } catch (error) {
    return res.send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // check if email exists
    if (!user) {
      return res.send("Wrong email or password");
    }

    // if email exists  check password
    const match = user.checkPassword(req.body.password);
    // if doesn't match
    if (!match) {
      return res.send("Wrong Email or Password");
    }
    // if matched
    const token = generateToken(user);
    return res.send({ user, token });
  } catch (error) {
    return res.send(error.message);
  }
};

module.exports = { register, login };
