const express = require("express")
const RestaurantController = require("./controllers/RestaurantController")
const NeibhourhoodController = require("./controllers/NeighborhoodController")
require("dotenv").config()
const app = express()
app.use(express.json())


app.use("/restaurants",RestaurantController)
// app.use("/",)
app.use("/neibhourhood",NeibhourhoodController)

module.exports = app
