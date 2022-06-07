const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {type:String,required : true},
    description : {type:String,required : true},
    colour : {type:String,required : true},
    cost : {type:Number,required : true},
    category : {type:String,required : true},
    image_url: { type: String, required: true },
    rating : {type:Number,default:0}
})

const Product = mongoose.model("product",ProductSchema)
module.exports = Product