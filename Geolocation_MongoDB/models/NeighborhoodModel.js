const mongoose = require("mongoose");
const NeighborhoodSchema = new mongoose.Schema({
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

const Neighborhood = mongoose.model("neighborhood", NeighborhoodSchema);
module.exports = Neighborhood;
