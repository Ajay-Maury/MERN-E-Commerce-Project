const mongoose = require("mongoose");

const CatogerySchema = new mongoose.Schema({
   category: { type: String, required: true },
    
});

const Catogery = mongoose.model("catogery", CatogerySchema);

module.exports = Catogery;
