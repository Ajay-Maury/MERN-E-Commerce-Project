const mongoose = require("mongoose");

const CatogerySchena = new mongoose.Schema({});

const Catogery = mongoose.model("catogery", CatogerySchena);

module.exports = Catogery;
