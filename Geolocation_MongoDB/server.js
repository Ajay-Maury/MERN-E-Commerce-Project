const app = require("./index")
const mongoose = require("mongoose");
require("dotenv").config()
const PORT = process.env.PORT || 5000
const connect = () => {
  return mongoose.connect(process.env.mongoDB_URI);
};

app.listen(PORT, async () => {
  try {
    await connect();

    console.log(`Connected to port : ${PORT}`);



    // console.log(Neibhour .getMongo());
  } catch (err) {
    console.log({ msg: err.message });
  }
});