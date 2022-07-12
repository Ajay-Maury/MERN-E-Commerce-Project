const mongoose = require("mongoose");
const WishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  ],
});

const Wishlist = mongoose.model("wishlist", WishlistSchema);

module.exports = Wishlist;
