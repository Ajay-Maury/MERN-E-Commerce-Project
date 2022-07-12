const mongoose = require("mongoose")
const app = require("./index")
require("dotenv").config()
const PORT = process.env.PORT || 5000

const connect = () => {
    return mongoose.connect(process.env.MongoDB_URI)
}

app.listen(PORT, async () => {
    try {
        await connect()
        console.log("Server is running at port : ",PORT)
        
    } catch (error) {
        console.log("Error :",error)
    }
})