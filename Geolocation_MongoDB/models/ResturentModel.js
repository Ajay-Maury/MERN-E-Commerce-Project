const mongoose = require("mongoose");
const resturentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});
const Resturent = mongoose.model("resturent", resturentSchema);
module.exports = Resturent;
