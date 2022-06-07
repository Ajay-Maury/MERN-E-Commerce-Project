const { default: mongoose } = require("mongoose")
const app = require("./index")
require("dotenv").config()
const PORT = process.env.PORT || 4000

const connect = () => {
    return mongoose
      .connect(process.env.API_BASE_URL);
}


app.listen(PORT, async () => {
    try {
         await connect()
         
        console.log(`Listining at port : ${PORT}`)
    } catch (error) {
        console.log("Error : ", error.message)
    }
})