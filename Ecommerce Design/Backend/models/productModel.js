const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  colour: { type: String, required: false },
  image_url: { type: String, required: false },
  categoryId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: false,
    },
  ],
  brandId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
    required: true,
  },
  reviewsId: [
    {
      ref: "reviews",
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  ],
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
