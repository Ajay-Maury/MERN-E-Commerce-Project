const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    BrandName: { type: String, required: true },
    BrandLogo: { type: String, required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Brand = mongoose.model("brand", BrandSchema);

module.exports = Brand;
