const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  reviewMessage: { type: String, required: true },
  rating: { type: Number, required: true,default:0 },
});

const Reviews = mongoose.model("review", ReviewSchema);

module.exports = Reviews