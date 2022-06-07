const mongoose = require("mongoose");

const BrandSchena = new mongoose.Schema({});

const Brand = mongoose.model("brand", BrandSchena);

module.exports = Brand;
