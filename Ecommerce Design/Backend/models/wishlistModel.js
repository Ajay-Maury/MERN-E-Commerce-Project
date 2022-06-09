const mongoose = require("mongoose");
const WishlistSchema = new mongoose.Schema({
  productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: false,
    },
  ],
});

const Wishlist = mongoose.model("wishlist", WishlistSchema);

module.exports = Wishlist;
