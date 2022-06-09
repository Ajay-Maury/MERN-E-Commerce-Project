const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  product: [
    [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: false,
        },
        quantity: { type: Number, required: false, default: 1 } ,
      },
    ],
  ],
});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
