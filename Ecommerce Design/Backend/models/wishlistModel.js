const mongoose = require("mongoose");
const WishlistSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  ],
  userId: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
});

const Wishlist = mongoose.model("wishlist", WishlistSchema);

module.exports = Wishlist;
