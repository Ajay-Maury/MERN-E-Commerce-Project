const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

require("dotenv").config();
const instance = new Razorpay({
  key_id: process.env.Razorpay_Key_Id,
  key_secret: process.env.Razorpay_Key_Secret,
});

router.post("/", async (req, res) => {
  console.log("PAym out");
  try {
      console.log(req.body)
      return res.status(200).send("Order Suscessfully Placed")
  } catch (error) {
    console.log("PAym err");
    return res.status(500).send(error.message);
  }
});

module.exports = router;
