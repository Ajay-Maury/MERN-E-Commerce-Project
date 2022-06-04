const mongoose = require("mongoose");
const neighborhoodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  geometry: {
    type: {
      type: String,
      enum: ["Polygon"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const Neighborhood = mongoose.model("neighborhood", neighborhoodSchema);
module.exports = Neighborhood;
