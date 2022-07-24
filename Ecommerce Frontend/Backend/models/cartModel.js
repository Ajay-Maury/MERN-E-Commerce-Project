const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
    ],
    // count: { type: Number, required: true, default: 1 } ,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
