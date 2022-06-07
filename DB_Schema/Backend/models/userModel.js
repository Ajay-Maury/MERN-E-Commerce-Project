const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, required: true },
    mobile_no: {type:Number,required:true,maxlength:10,minlength:10},
    addresses: []

})

const User = mongoose.model("user",UserSchema)

module.exports = User