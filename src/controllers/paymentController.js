const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

require("dotenv").config();
const instance = new Razorpay({
  key_id: process.env.Razorpay_Key_Id,
  key_secret: process.env.Razorpay_Key_Secret,
});

router.post("/", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount, // amount in the smallest currency unit
      currency: "INR",
      receipt: `rcpt:${Date.now()}`,
    };
    const order = await instance.orders.create(options);
    return res.status(200).send(order);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
