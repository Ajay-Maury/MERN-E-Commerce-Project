const express = require("express")
const app = express()
const UserController = require("./controllers/userController")
app.use(express.json())

// app.use("/", (req, res) => {
//     return res.send("Server in working")
// })

app.use("/user",UserController)

module.exports = app