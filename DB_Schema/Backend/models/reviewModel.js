const mongoose = require("mongoose")

const ReviewSchena = new mongoose.Schema({

})

const Review = mongoose.model("review",ReviewSchena)

module.exports = Review