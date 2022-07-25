const User = require("../models/userModel");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { body, validationResult } = require("express-validator");

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = router.post(
  "/",
  body("name").trim().not().isEmpty().withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Email is required")
    .not()
    .isEmpty()
    .withMessage("Email is required")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body("password").trim().not().isEmpty().withMessage("Password is required"),
  body("mobile")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Mobile No. is required")
    .isNumeric()
    .withMessage("Mobile No. must be a number")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile No. be of 10 digit"),
  body("age")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Age is required")
    .isNumeric()
    .withMessage("Age  must be a number")
    .custom((value) => {
      if (value < 1 || value > 100) {
        throw new Error("Age should be between 1 - 100");
      }
      return true;
    }),
  body("gender").trim().not().isEmpty().withMessage("Gender is required"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      //   console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email }).lean().exec();

      //checking email
      if (user) {
        return res.send("Email already exists");
      } // if new user create it
      user = await User.create(req.body);

      const token = generateToken(user);
      return res.status(200).send({ user, token });
    } catch (error) {
      return res.status(500).send({ error: error.message });
    }
  }
);

// const register = async (req, res) => {
//   try {
//     let user = await User.findOne({ email: req.body.email }).lean().exec();

//     //checking email
//     if (user) {
//       return res.send("Email already exists");
//     } // if new user create it
//     user = await User.create(req.body);

//     const token = generateToken(user);
//     return res.status(200).send({ user, token });
//   } catch (error) {
//     return res.send(error.message);
//   }
// };

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
