const mongoose = require("mongoose");

const CatogerySchema = new mongoose.Schema({
    title:{type:String,required:true}
});

const Catogery = mongoose.model("catogery", CatogerySchema);

module.exports = Catogery;
