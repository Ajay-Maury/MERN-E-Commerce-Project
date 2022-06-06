const mongoose = require("mongoose");
const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: {
      type: String,
      default:"Point",
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});
RestaurantSchema.index({location:"2dsphere"})
const Restaurant = mongoose.model("restaurant", RestaurantSchema);
module.exports = Restaurant;
