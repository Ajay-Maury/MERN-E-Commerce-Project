const express = require("express")
const ResturentController = require("./controllers/ResturentController")
const NeibhourhoodController = require("./controllers/NeibhourhoodController")
require("dotenv").config()
const app = express()
app.use(express.json())


app.use("/resturents",ResturentController)
app.use("/neibhourhood",NeibhourhoodController)

module.exports = app
