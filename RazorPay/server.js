const express = require("express")
const mongoose = require("mongoose")
const Razorpay = require("razorpay")
// const dotenv = require("dotenv")
require("dotenv").config();
// dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URI).then(() => { console.log("mongoDB Connected") })

app.use(express.json())

const OrderSchema = mongoose.Schema({
    isPaid: Boolean,
    amount: Number,
    razorpay: {
        orderId: String,
        paymentId: String,
        signature : String
    }
})

const Order = mongoose.model("Order", OrderSchema)

app.get("/get-razorpay-key", (req, res) => {
    res.send({key:process.env.RAZORPAY_KEY_ID})
})

app.post("/create-order", async (req, res, next) => {
    try {
        const instance = new Razorpay({
          key_id: process.env.RAZORPAY_KEY_ID,
          key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        const options = {
            amount: req.body.amount,
            currency: "INR"
        };
        const order = await instance.orders.create(options)
        if (!order) return res.status(500).send("Some Errors Occured")
        res.send(order)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.post("/pay-order",async(req,res)=> {
    try {
        const { amount, razorPaymentId, razorpayOrderId, razorpaySignature } = req.body;
        const newPayment = Order({
          isPaid: true,
          amount: amount,
          razorpay: {
            orderId: razorPaymentId,
            paymentId: razorpayOrderId,
            signature: razorpaySignature,
          },
        });
        await newPayment.save();
        res.send({message : "Payment was suscessfull"})
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/list-orders", async (req, res) => {
    const orders = await Order.find();
    res.send(orders)

})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})