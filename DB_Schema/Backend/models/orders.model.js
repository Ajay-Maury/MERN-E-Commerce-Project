const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    price : {type:Number,required:true}
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
