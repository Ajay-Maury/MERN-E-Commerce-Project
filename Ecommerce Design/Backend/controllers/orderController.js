const express = require("express");
const Order = require("../models/orderModel");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const order = await Order.create(req.body)
        return res.status(201).send({Order : order})
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

router.get("/:userId", async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId }).lean().exec()
        return res.status(200).send({Orders:order})
    } catch (error) {
        return res.status(500).send(error.message)        
    }
})

router.get("/:orderId", async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId).lean().exec()
        return res.status(200).send({Order:order})
    } catch (error) {
        return res.status(500).send(error.message)                
    }
})

module.exports = router