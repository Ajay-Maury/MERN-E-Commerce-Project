const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
