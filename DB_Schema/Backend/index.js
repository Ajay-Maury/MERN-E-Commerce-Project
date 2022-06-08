const express = require("express")
const app = express()
const UserController = require("./controllers/userController")
const ProductController = require("./controllers/addressController")
const BrandController = require("./controllers/brandController")
app.use(express.json())



app.use("/user", UserController)
app.use("/products",ProductController)
app.use("/brands",BrandController)

module.exports = app