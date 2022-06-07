const express = require("express")
const app = express()
app.use(express.json())

app.use("/", (req, res) => {
    return res.send("Server in working")
})

module.exports = app