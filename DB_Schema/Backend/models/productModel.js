const mongoose = require("mongoose");

const ProductSchena = new mongoose.Schema({});

const Product = mongoose.model("product", ProductSchena);

module.exports = Product;
