const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  address_line: { type: String, required: true },
  city: { type: String, required: true },
  pinCode: { type: Number, required: true , minlength:6,maxlength:6},
  district : { type: String, required: true },
  state: { type: String, required: true },
  country : { type: String, required: true },
});

const Address = mongoose.model("address", AddressSchema);

module.exports = Address;
