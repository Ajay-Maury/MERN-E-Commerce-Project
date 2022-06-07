const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({

})

const Review = mongoose.model("review",ReviewSchema)

module.exports = Review