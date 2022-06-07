const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
    name : { type: String, required: true },
    products_Id :  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: false,
  },
});

const Brand = mongoose.model("brand", BrandSchema);

module.exports = Brand;
