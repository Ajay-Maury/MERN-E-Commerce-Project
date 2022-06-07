const mongoose = require("mongoose");

const CatogerySchema = new mongoose.Schema({});

const Catogery = mongoose.model("catogery", CatogerySchema);

module.exports = Catogery;
