const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: Number, required: true },
    pinCode: { type: Number, required: true, minlength: 6, maxlength: 6 },
    buildingName: { type: String, required: true },
    colony: { type: String, required: true },
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Address = mongoose.model("address", AddressSchema);

module.exports = Address;
