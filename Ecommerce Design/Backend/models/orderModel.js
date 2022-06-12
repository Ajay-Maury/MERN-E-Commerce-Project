const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [{
    productID : { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },  
    quantity: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true }
}],
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
