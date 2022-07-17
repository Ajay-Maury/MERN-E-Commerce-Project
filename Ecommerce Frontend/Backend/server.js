const mongoose = require("mongoose");
const app = require("./index");
const Razorpay = require("razorpay");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const connect = () => {
  return mongoose.connect(process.env.MongoDB_URI);
};
const instance = new Razorpay({
  key_id: process.env.Razorpay_Key_Id,
  key_secret: process.env.Razorpay_Key_Secret,
});
module.export = instance;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("Server is running at port : ", PORT);
  } catch (error) {
    console.log("Error :", error);
  }
});
