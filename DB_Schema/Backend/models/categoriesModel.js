const mongoose = require("mongoose");

const CatogerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    
});

const Catogery = mongoose.model("catogery", CatogerySchema);

module.exports = Catogery;
