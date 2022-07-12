const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique:true },
  password: { type: String, required: true },
  mobile_no: { type: Number, required: true, maxlength: 10, minlength: 10 },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Others"] },
  profilePic: { type: String, required: false },
  addresses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
      required: false,
    },
  ],
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
