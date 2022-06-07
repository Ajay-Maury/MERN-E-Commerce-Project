const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
    title: { type: String, required: true },
    product_Id :  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: false,
  },
});

const Brand = mongoose.model("brand", BrandSchema);

module.exports = Brand;
