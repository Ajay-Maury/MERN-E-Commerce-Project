const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({});

const Brand = mongoose.model("brand", BrandSchema);

module.exports = Brand;
