const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [ { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true }],
  discount: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true },
  totalAmout : {type:Number,required:true}
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
