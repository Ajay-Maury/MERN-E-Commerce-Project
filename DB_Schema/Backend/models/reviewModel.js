const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  reviewMessage: { type: String, required: true },
});

const Review = mongoose.model("review",ReviewSchema)

module.exports = Review