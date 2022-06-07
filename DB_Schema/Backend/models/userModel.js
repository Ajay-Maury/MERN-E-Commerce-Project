const mongoose = require("mongoose")

const UserSchena = new mongoose.Schema({

})

const User = mongoose.model("user",UserSchena)

module.exports = User