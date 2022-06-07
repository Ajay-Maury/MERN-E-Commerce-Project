const mongoose = require("mongoose");

const OrderSchena = new mongoose.Schema({});

const Order = mongoose.model("order", OrderSchena);

module.exports = Order;
