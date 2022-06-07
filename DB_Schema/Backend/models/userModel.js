const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobile_no: { type: Number, required: true, maxlength: 10, minlength: 10 },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
      required: false,
    },
  ],
});

const User = mongoose.model("user",UserSchema)

module.exports = User