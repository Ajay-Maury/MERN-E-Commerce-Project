const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  }],
  brand_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
    required: true,
  },
    price: { type: Number, required: true },
  image_url:{type:String,required:false}
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
